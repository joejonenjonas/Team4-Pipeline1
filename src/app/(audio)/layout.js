"use client"
import React from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <main>{children}</main>
      < AudioPlayer />
    </section>
  );
}