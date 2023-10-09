"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUpPage -> response", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("SignUpPage -> error", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "SignUp"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border-2 border-gray-300 rounded-md text-green-950"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border-2 border-gray-300 rounded-md  text-green-950"
        type="email"
        name="email"
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border-2 border-gray-300 rounded-md  text-green-950"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="p-2 border-2 border-gray-300 rounded-md mt-2"
        onClick={onSignUp}
      >
        {buttonDisabled ? "NO signUp" : "sign up"}
      </button>
      <Link href="/login">visit login page</Link>
    </div>
  );
}
