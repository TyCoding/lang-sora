import { Hero } from "@/app/_components/hero";
import { Video } from "@/app/_components/video";
import { Toaster } from "@/app/_components/common/alert";
import React from "react";

export default async function Home() {
  return (
    <div className="relative">
      <div className="mx-auto">
        <Hero />

        <div className="flex w-screen items-center justify-center bg-base-200 pb-10 pl-2 pr-2 pt-10">
          <div className="relative mx-auto max-w-7xl">
            <Video />
          </div>
        </div>

        <Toaster />
      </div>
    </div>
  );
}
