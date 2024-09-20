"use client";
import { useGlobalUser } from "@/context/UserContext";
import { loginUser } from "@/utils/api.method";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface AppState {
  email: string;
  password: string;
}

function Login() {
  const { setUser } = useGlobalUser();
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppState>();

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onLogin = async (data: AppState) => {
    setIsLoading(true);
    try {
      const res = await loginUser(data);
      if (res.status) {
        setCookie("user", JSON.stringify(res.result));
        setUser(res.result);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-96 mx-auto w-full text-gray-800">
      <div className="px-4 py-12">
        <div className="text-center font-bold text-5xl text-white">Sign in</div>

        <form
          className="mt-8 mb-0 space-y-4"
          onSubmit={handleSubmit(onLogin)}
        >
          {/* Email Field */}
          <div>
            <div className="relative">
              <input
                type="email"
                className={`w-full p-4 pr-12 text-sm border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                autoComplete="off"
                autoFocus
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <AiOutlineMail />
              </span>
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className={`w-full p-4 pr-12 text-sm border ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm`}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                autoComplete="off"
              />
              <span
                className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer"
                onClick={togglePassword}
              >
                {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </div>
            )}
          </div>
          <div>
            <div className="relative flex items-center justify-center space-x-2">
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-green-400"
                // {...register("rememberMe")}
                />
                <span className="text-sm text-gray-100">Remember me</span>
              </label>
            </div>
          </div>


          {/* Submit Button */}
          <div className="flex items-center justify-between w-full">
            <button
              type="submit"
              className="w-full px-8 py-3 font-medium text-white bg-green-400 rounded-lg"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
