"use client";
import axios from "axios";
import { set } from "mongoose";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `{token}` : "no token"}
      </h2>
      {verified && (
        <div className="">
          <h2 className="p-2 bg-green-500 text-black">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
       {error && (
        <div className="">
          <h2 className="p-2 text-2xl bg-red-500 text-black">Error</h2>
          
        </div>
      )}
    </div>
  );
}
