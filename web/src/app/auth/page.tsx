"use client";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import React, { useState } from "react";

interface AuthState {
  activeTab: "login" | "register";
}

const Auth: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>({ activeTab: "login" });

  const handleActiveTab = (tab: "login" | "register") => {
    setAuthState({ activeTab: tab });
  };
  return (
    <React.Fragment>
      
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handleActiveTab("login")}
          className={`p-2 bg-gray-200 transition duration-300 ease-in-out rounded-tl-md rounded-bl-md ${
            authState.activeTab === "login" ? "bg-gray-700 text-white transition duration-500" : "text-gray-700"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleActiveTab("register")}
          className={`p-2 bg-gray-200 transition duration-300 ease-in-out rounded-tr-md rounded-br-md ${
            authState.activeTab === "register" ? "bg-gray-700 text-white transition duration-500" : "text-gray-700"
          }`}
        >
          Register
        </button>
      </div>


      <div className="flex justify-center items-center">
        {authState.activeTab === "login" && <Login />}
        {authState.activeTab === "register" && <Register />}
      </div>
    </React.Fragment>
  );
};

export default Auth;
