"use client";
import { useGlobalUser } from "@/context/UserContext";
import { RegisterRequest, UserAPI } from "@/utils/api/users.api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { RiLockPasswordFill, RiPhoneFill } from "react-icons/ri";

const Register = () => {
  const [isPassword, setIsPassword] = useState(false);
  const { setUser } = useGlobalUser();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterRequest>();

  const togglePassword = () => setIsPassword(!isPassword);

  const onRegister: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      const res = await UserAPI.register(data);
      if (res.status) {
        setCookie("user", JSON.stringify(res.result));
        setUser(res.result);
        router.push('/');
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <section className="relative">
      <div className="w-full px-4 py-12">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-center font-bold text-5xl text-white">
            Register
          </h1>
         
        </div>

        <form
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          onSubmit={handleSubmit(onRegister)}
        >
          <InputField
            label="Enter Full Name"
            name="name"
            type="text"
            placeholder="Enter Full Name"
            register={register}
            required="Name is required"
            errors={errors}
            icon={<RiLockPasswordFill className="w-5 h-5 text-gray-400" />}
          />

          <InputField
            label="Enter Email"
            name="email"
            type="email"
            placeholder="Enter email"
            register={register}
            required="Email is required"
            pattern={{
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address"
            }}
            errors={errors}
            icon={<RiLockPasswordFill className="w-5 h-5 text-gray-400" />}
          />

          <InputField
            label="Enter Phone"
            name="phone"
            type="text"
            placeholder="Enter Phone"
            register={register}
            required="Phone is required"
            errors={errors}
            icon={<RiPhoneFill className="w-5 h-5 text-gray-400" />}
          />

          <InputField
            label="Enter Password"
            name="password"
            type={isPassword ? "text" : "password"}
            placeholder="Enter password"
            register={register}
            required="Password is required"
            minLength={{
              value: 6,
              message: "Password must be at least 6 characters"
            }}
            errors={errors}
            icon={
              isPassword ? (
                <BsEye onClick={togglePassword} className="cursor-pointer text-gray-900" />
              ) : (
                <BsEyeSlash onClick={togglePassword} className="cursor-pointer text-gray-900" />
              )
            }
          />

          <div className="w-full">
            
            <button
              type="submit"
              className="inline-block w-full px-8 py-3 capitalize font-medium text-white bg-green-500 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: keyof RegisterRequest;
  type: string;
  placeholder: string;
  register: any;
  required: string;
  errors: any;
  icon: React.ReactNode;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, name, type, placeholder, register, required, errors, icon, pattern, minLength 
}) => (
  <div>
    {/* <div className="">{label}</div> */}
    <div className="relative">
      <input
        type={type}
        className="w-full p-4 pr-12 text-sm border border-gray-300 text-gray-900 rounded-lg shadow-sm"
        placeholder={placeholder}
        {...register(name, { required, pattern, minLength })}
      />
      <span className="absolute inset-y-0 inline-flex items-center right-4">
        {icon}
      </span>
    </div>
    {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
  </div>
);

export default Register;