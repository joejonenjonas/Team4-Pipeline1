"use client"
import React from "react";
import Navbar from "../../components/Navbar";

const NavbarLayout = ({ children }) => {

  return (
    <section>
    <div className="flex grow-0">
      <Navbar/>
      <main className="grow">{children}</main>
    </div>
  </section>
  );
};

export default NavbarLayout;