"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { teamMembers } from "@/utils/team.js";
import PageLoader from "@/components/pageLoader/PageLoader.jsx";




function Page({ params }) {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    try {
      setLoading(true);
      const userId = id;
      const currUser = teamMembers.filter((item) => item.id == userId);
      console.log("Current user : ", currUser[0]);

      if (currUser[0]) {
        setUser(currUser[0]);
      }
    } catch (error) {
      console.log("Error : ", error);
      return;
    } finally {

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [id]);

  if (loading || !user) {
    return <PageLoader />;
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0b0712] to-[#140b1f] overflow-hidden flex items-center">
      {/* Purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#4B1F6F]/40 blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#9d5cd1]/30 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}

        <div className="relative flex justify-center pt-25">
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
            {/* Purple glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

            <img
              src={user ? user.image : ""}
              alt={user ? user.name : "No user"}
              className="w-full h-full object-cover"
            />

            {/* Glow edge */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#9d5cd1]/30" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d5cd1] to-[#4B1F6F]">
              {user ? user.name : "No User"}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-300">
            {user ? user.description : "No description"}
          </p>
          <span className="inline-block mb-6 mt-5 px-4 py-2 text-xs tracking-widest uppercase text-[#9d5cd1] border border-[#9d5cd1]/30 rounded-full bg-white/5 backdrop-blur">
            {user ? user.role : "No role"}
          </span>
          {/* Social */}
          <div className="mt-5 mb-5 flex gap-8 justify-center lg:justify-start text-gray-400 text-sm tracking-wider">
            {user
              ? user?.socialLinks?.map((link, index) => {
                  return (
                    <a
                      href={link.url}
                      key={link.name + index}
                      className="hover:text-white transition"
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  );
                })
              : "No social links"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
