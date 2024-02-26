"use client";

import React from "react";
import { type Video } from "@/types/video";

export const Card: React.FC<Video> = ({
  id,
  src,
  poster,
  prompt,
  author,
  avatar,
}) => {
  return (
    <div className="card mb-4 cursor-pointer bg-base-100 p-3 shadow-xl">
      <a href={`/video/${id}`} target="_self">
        <video
          className="video w-full cursor-pointer rounded-md"
          {...(src != null && { src: src })}
          {...(poster != null && { poster: poster })}
          preload="auto"
          muted
          loop
          controls
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
        <div className="flex w-full items-center justify-start gap-2 p-2 pl-1 pt-4">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                {...(avatar && { src: avatar })}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div className="font-bold">{author}</div>
        </div>
        <div className="p-2">
          <p>{prompt}</p>
        </div>
      </a>
    </div>
  );
};
