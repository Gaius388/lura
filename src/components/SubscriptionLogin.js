import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";

const SubscriptionLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [submitError, setSubmitError] = useState("");
  const onSubmit = async (values) => {
    const status = await signIn("credentials", {
      redirect: false, //disabling default redirection
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status && !status.ok) {
      setSubmitError(status.error || "");
    }
    if (status.ok) router.push("/");
  };
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password =
        "Must be greater than 8 and less than 20 characters long";
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      passowrd: "",
    },
    validate,
    onSubmit,
  });
  return (
    <section className="">
      <div className="text-xs font-bold flex gap-2 items-center">
        <p className="text-purpleLura">Account</p>
        <AiFillCheckCircle />
        <p>Payment</p>
      </div>
      <h4 className="my-4">Account Details</h4>
      <form className="grid gap-3" onSubmit={formik.handleSubmit}>
        <div className="relative">
          <label className="text-xs mb-2">Email address</label>
          <input
            name="email"
            type="email"
            className={`w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs  ${
              formik.errors.password &&
              formik.touched.password &&
              "border-rose-500"
            }`}
            placeholder="email@myemail.com"
            {...formik.getFieldProps("email")}
          />
          <AiFillCheckCircle
            className={`${
              formik.errors.password && formik.touched.password
                ? "text-rose-500"
                : "text-green-500"
            } absolute right-[2%] top-[55%]`}
          />
        </div>
        <div className="relative">
          <label className="text-xs mb-2">Password</label>
          <input
            name="password"
            type={showPassword ? "password" : "text"}
            className={`w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs  ${
              formik.errors.password &&
              formik.touched.password &&
              "border-rose-500"
            }`}
            placeholder="*******"
            {...formik.getFieldProps("password")}
          />
          <AiFillCheckCircle
            className={`${
              formik.errors.password && formik.touched.password
                ? "text-rose-500"
                : "text-green-500"
            } absolute right-[2%] top-[55%]`}
          />
        </div>
        <div className="flex items-center justify-end gap-8 text-xs mt-4">
          {submitError && (
            <span className="text-rose-500 text-xs font-medium text-left">
              {submitError} 
            </span>
          )}
          <Link href={"/register"} className="font-bold">
            Create Account
          </Link>
          <button
            type="submit"
            className=" bg-purpleLura py-1.5 px-8 text-white rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubscriptionLogin;
