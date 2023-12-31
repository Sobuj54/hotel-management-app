"use client";

import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex flex-col mb-8 md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>

          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 cursor-pointer text-4xl text-black dark:text-white" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
            Sign Up
          </button>
        </form>
        <div>
          <span>Already Have an Account? </span>
          <button className="text-blue-600 underline">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
