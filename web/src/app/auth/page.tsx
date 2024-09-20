"use client";

import { useState } from "react";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

type AuthTab = "login" | "register";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("login");

  const TabContent = {
    login: Login,
    register: Register,
  };

  const ActiveComponent = TabContent[activeTab];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm min-h-[70vh]">
        <div className="">
          <div className="relative w-full h-12 bg-gray-200 rounded-full">
            <div
              className={`absolute top-0 left-0 w-1/2 h-12 bg-green-500 rounded-full transition-transform duration-300 ease-in-out ${
                activeTab === "register" ? "translate-x-full" : ""
              }`}
            ></div>
            <div className="relative flex h-full">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 text-sm font-medium z-10 transition-colors duration-300 ${
                  activeTab === "login" ? "text-white" : "text-gray-700"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 text-sm font-medium z-10 transition-colors duration-300 ${
                  activeTab === "register" ? "text-white" : "text-gray-700"
                }`}
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <ActiveComponent />
      </div>
    </div>
  );
};

export default Auth;