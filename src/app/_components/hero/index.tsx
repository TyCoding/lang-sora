"use client";

import { api } from "@/trpc/react";
import { toast } from "@/app/_components/common/alert";
import { useState } from "react";

export function Hero() {
  const queryApi = api.video.getVideoIdList.useQuery();
  const [prompt, setPrompt] = useState("");

  async function onCreate() {
    if (prompt.trim() == "") {
      toast.error("Prompt is empty");
      return;
    }

    const list = queryApi.data;
    if (!list) {
      return;
    }
    const random = Math.floor(Math.random() * list.length);
    window.location.href = "/video/" + list[random]?.id;
  }
  return (
    <div className="hero relative overflow-hidden px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-32">
      <div className="hero-content z-10 flex-col text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-primary">
            Get Sora AI Video Quickly
          </h1>
          <p className="text py-6 text-xl text-gray-300">
            Make AI Video With Sora, Unleash Your Creativity
          </p>
          <div className="flex items-center justify-center gap-4">
            <label className="input input-bordered flex w-7/12 items-center gap-2">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                className="grow"
                placeholder="Describe your ideas"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button onClick={onCreate} className="btn btn-primary">
              Create Video
            </button>
          </div>
        </div>
        <div className="text-neutral-content/60">
          Sora text-to-video API is not available, you will get an random video
          with your prompt.
        </div>
      </div>

      <div className="flex justify-center">
        <div className="pointer-events-none absolute top-[30%] z-[1] aspect-square w-1/2 rounded-full bg-primary opacity-35 blur-3xl"></div>
      </div>
    </div>
  );
}
