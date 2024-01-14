"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
// import { redirect, useRouter } from 'next/navigation'

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //       router.push('/login');
  //   }
  // }, [user]);
  return (
    <div className="w-64l h-[calc(100vh-54px)] flex flex-col justify-start text-base gap-8 bg-[#F1F3F4]">
      <h1 className="p-2 font-largest text-accent-light px-4 text-3xl font-black text-center flex bg-slate-800 rounded-full aspect-square m-4 items-center w-52 justify-center">
        <div className="flex flex-col gap-6 -mt-6 scale-95">
          <p>BUSSIn</p>
          <p className="text-[4.25rem] ml-[2px]">bEE</p>
        </div>
      </h1>
      <div className="font-largest text-accent-light px-8 font-black flex flex-col gap-8 items-center">
        <div className="bg-slate-900 py-4 w-full text-center rounded-lg">
          <Link href="/main">hOmE</Link>
        </div>
        <div className="bg-slate-900 py-4 w-full text-center rounded-lg">
          <Link href="/about">AboUt</Link>
        </div>
        {/* <div>
          <Link href="/playlist">Playlist</Link>
        </div> */}
        {!user ? (
          <div></div>
        ) : (
          <div className="bg-slate-900 py-4 w-full text-center rounded-lg">           <Link href="/login">SIGN OUT</Link>         </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
