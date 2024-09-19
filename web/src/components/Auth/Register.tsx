"use client";
import { useGlobalUser } from "@/context/UserContext";
import { registerUser } from "@/utils/api.method";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { RiLockPasswordFill, RiPhoneFill } from "react-icons/ri";

interface AppState {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const initialState: AppState = {
  email: "",
  name: "",
  password: "",
  phone: "",
};

const Register = () => {
  const [state, setState] = useState<AppState>(initialState);
  const [isPassword, setIsPassword] = useState(false);
  const { setUser } = useGlobalUser();
  const router = useRouter()


  const togglePassword = () => {
    setIsPassword(!isPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      const res = await registerUser(state)
      if (res.status) {
        setCookie("user", JSON.stringify(res.result));
        setUser(res.result);
        router.push('/');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <section className="relative dark:bg-slate-400 dark:text-black">
        <div className="w-full px-4 py-12">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold sm:text-7xl uppercase text-slate-800">
              Register here!
            </h1>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            action=""
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
            onSubmit={onRegister}
          >
            <div>
              <div className="">Enter Full Name</div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter Full Name"
                  autoComplete="off"
                  name="name"
                  onChange={handleChange}
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <RiLockPasswordFill className="w-5 h-5 text-gray-400" />
                </span>
              </div>
            </div>
            <div>
              <div className="">Enter Email</div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  autoComplete="off"
                  name="email"
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <RiLockPasswordFill className="w-5 h-5 text-gray-400" />
                </span>
              </div>
            </div>
            <div>
              <div className="">Enter Phone</div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter Phone"
                  name="phone"
                  autoComplete="off"
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <RiPhoneFill className="w-5 h-5 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <div className="">Enter Password</div>
              <div className="relative">
                <input
                  type={isPassword ? "text" : "password"}
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  name="password"
                  autoComplete="off"
                  onChange={handleChange}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  {isPassword ? (
                    <BsEye onClick={togglePassword} />
                  ) : (
                    <BsEyeSlash onClick={togglePassword} />
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have account ? <br />
                <Link href="/auth" className="underline text-teal-500">
                  Sign in
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block px-8 py-3 ml-3 uppercase font-medium text-white bg-teal-700 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
