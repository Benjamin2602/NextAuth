"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login page</h1>
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
      <label htmlFor="password">password</label>
      <input
        className="p-2 border-2 border-gray-300 p-2 rounded-md"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="p-2 border-2 border-gray-300 rounded-md mt-2"
        onClick={onLogin}
      >
        Login
      </button>
      <p>
        Dont have an account yet?
        <span>
          <Link href="/signup">
            <span className="text-blue-300">  Sign up</span>
          </Link>
        </span>
      </p>
    </div>
  );
}
