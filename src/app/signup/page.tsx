"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>SignUp page</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
      className="p-2 border-2 border-gray-300 p-2 rounded-md"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
      className="p-2 border-2 border-gray-300 p-2 rounded-md"
        type="email"
        name="email"
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
      className="p-2 border-2 border-gray-300 p-2 rounded-md"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button className="p-2 border-2 border-gray-300 rounded-md mt-2" onClick={onSignUp}>
        SignUp
      </button>
      <Link href="/login">visit login page</Link>

    </div>
  );
}
