import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiFillLock } from "react-icons/ai";
import computerFeatures from "../../public/computer_features.svg";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";
const CreateAccountFeatures = () => {
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
    <section className="grid sm:grid-cols-2 mt-4">
      <article className="mx-auto sm:w-[70%]">
        <h2 className="text-xl sm:text-3xl font-semibold">Create Account.</h2>
        <p className="text-md py-3">
          Now you can browse, work and shop online safely.
        </p>
        <form className="grid gap-3" onSubmit={formik.handleSubmit}>
          <div className="flex items-stretch relative text-black">
            <AiFillLock className="absolute top-[30%] left-[1%] text-gray-300" />
            <input
              name="name"
              type="name"
              className="w-full rounded-2xl border border-black pl-6  py-1 outline-none placeholder:text-xs placeholder:pl-1 placeholder:text-black"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
          </div>
          <div className="flex items-stretch relative text-black">
            <CiMail className="absolute top-[30%] left-[1%] text-gray-300" />
            <input
              name="email"
              type="email"
              className="w-full rounded-2xl border border-black pl-6  py-1 outline-none placeholder:text-xs placeholder:pl-1 placeholder:text-black"
              placeholder="Email address"
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="flex items-stretch relative text-black">
            <AiFillLock className="absolute top-[30%] left-[1%] text-gray-300" />
            <input
              name="password"
              type={showPassword ? "password" : "text"}
              className="w-full rounded-2xl border border-black pl-6  py-1 outline-none placeholder:text-xs placeholder:pl-1 placeholder:text-black"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            <div
              className="absolute top-2.5 right-2 text-gray-400 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
          <div className="flex items-stretch relative text-black">
            <AiFillLock className="absolute top-[30%] left-[1%] text-gray-300" />
            <input
              name="cpassword"
              type={showPassword ? "password" : "text"}
              className="w-full rounded-2xl border border-black pl-6 py-1 outline-none placeholder:text-xs placeholder:pl-1 placeholder:text-black"
              placeholder="Confirm Password"
              {...formik.getFieldProps("cpassword")}
            />
            <div
              className="absolute top-2.5 right-2 text-gray-400 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
          {submitError && (
            <span className="text-rose-500 text-xs font-medium text-center">
              {submitError}
            </span>
          )}
          <button
            type="submit"
            className="bg-purpleLura text-white w-full py-2 rounded-2xl text-xs font-bold"
          >
            Create account
          </button>

          <div className="flex justify-between w-full mt-4">
            <div className="border border-black rounded-2xl flex items-center px-2 py-1.5 gap-2">
              <FcGoogle />
              <p className="text-xs font-semibold">Google</p>
            </div>
            <div className="border border-black rounded-2xl flex items-center px-2 py-1.5 gap-2">
              <FaFacebook className="text-blue-500" />
              <p className="text-xs font-semibold">Facebook</p>
            </div>
            <div className="border border-black rounded-2xl flex items-center px-2 py-1.5 gap-2">
              <FaGithub />
              <p className="text-xs font-semibold">Github</p>
            </div>
          </div>
        </form>
      </article>
      <article className="hidden sm:block">
        <Image src={computerFeatures} alt="computer" className="w-1/2" />
      </article>
    </section>
  );
};

export default CreateAccountFeatures;
