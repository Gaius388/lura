import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";

const RegisterAccount = () => {
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const onSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setSubmitError(data.error);
        }
        if (data.success) router.push("/login");
      });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    } else if (values.name.includes(" ")) {
      errors.name = "Invalid name";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
      errors.password =
        "Must be greater than 8 and less than 20 characters long";
    } else if (values.password.includes(" ")) {
      errors.password = "Invalid Password";
    }

    if (!values.cpassword) {
      errors.cpassword = "Required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password Not Match";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
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
          type="text"
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Name"
          {...formik.getFieldProps("name")}
        />
      </div>
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
          className="w-full py-1.5 pl-3 placeholder:font-thin"
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
      <div
        className={`border border-transparent border-b-gray-500 ${
          formik.errors.password && formik.touched.password && "border-rose-500"
        } relative`}
      >
        <input
          type={showPassword ? "password" : "text"}
          name="cpassword"
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Confirm Password"
          {...formik.getFieldProps("cpassword")}
        />
        <div
          className="absolute top-3 right-2 text-gray-400 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </div>
      </div>
      {submitError && (
        <span className="text-rose-500 text-xs font-medium text-center">{submitError}</span>
      )}
      <div className="w-[60%] mx-auto my-8">
        <button
          type="submit"
          className="py-2 w-full text-sm font-medium bg-purpleLura text-white rounded-md"
        >
          Create Account
        </button>
        <p className="text-center text-xs mt-2">
          Already have an account?{" "}
          <Link href={"/login"} className="text-purpleLura">
            Login Now
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterAccount;
