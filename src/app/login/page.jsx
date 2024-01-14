"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";

const page = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  // const router = useRouter()

 // if (user) {
 //   redirect("/main");
 // }
  const handleSignIn = async () => {
    try {
      await googleSignIn();
      // router.push('/')
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-screen bg-slate-200 w-full flex items-center justify-center">
      <div className="py-8 shadow-xl px-16 border-l-4 border-[#EEA20B] bg-slate-900 rounded-xl text-center">
        <p className="mb-8 text-slate-200 text-xl font-black">
          Sign in with Google
        </p>
        <button
          className="font-black w-full transition-all hover:brightness-90 duration-200 text-lg bg-slate-200 py-4 px-8 rounded-lg"
          onClick={handleSignIn}
          aria-label="Sign in with Google"
          name="Sign in with Google"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default page;
