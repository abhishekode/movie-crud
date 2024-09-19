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
      
      <div className="flex justify-center items-center">
        {authState.activeTab === "login" && <Login />}
        {authState.activeTab === "register" && <Register />}
      </div>
    </React.Fragment>
  );
};

export default Auth;
