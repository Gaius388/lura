import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";

const Login = () => {
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
    <form className="grid gap-3" onSubmit={formik.handleSubmit}>
      <div
        className={`border border-transparent border-b-gray-500 ${
          formik.errors.password && formik.touched.password && "border-rose-500"
        }`}
      >
        <input
          type="email"
          name="email"
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
      </div>
      <div
        className={`border border-transparent border-b-gray-500 ${
          formik.errors.password && formik.touched.password && "border-rose-500"
        } relative`}
      >
        <input
          type={showPassword ? "password" : "text"}
          name="password"
          className="w-full py-1.5 pl-3 placeholder:font-thin outline-none"
          placeholder="Password"
          {...formik.getFieldProps("password")}
        />
        <div
          className="absolute top-3 right-2 text-gray-400 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <p className="text-purpleLura">Forgot Password?</p>
      </div>
      <div className="w-[60%] mx-auto my-8">
        <button
          type="submit"
          className="py-2 w-full text-sm font-medium bg-purpleLura text-white rounded-md"
        >
          Log in
        </button>
        {submitError && (
          <span className="text-rose-500 text-xs font-medium text-center">
            {submitError}
          </span>
        )}
        <p className="text-center text-xs mt-2">
          Don`t have an account?{" "}
          <Link href={"/register"} className="text-purpleLura">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
