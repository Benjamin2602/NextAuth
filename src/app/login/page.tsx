"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast/headless";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("LoginPage -> response", response.data);
      toast.success("Login successful");
      router.push("/profile");
      
    } catch (error: any) {
      console.log("LoginPage -> error", error.message);
      toast.error(error.message);
      
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "processing" : "Login"}</h1>
      <hr />

      <label htmlFor="username">username</label>
      <input
        className="p-2 border-2 border-gray-300 rounded-md text-blue-950"
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border-2 border-gray-300 rounded-md text-blue-950"
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
        {buttonDisabled ? "No Login" : "Login"}
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
