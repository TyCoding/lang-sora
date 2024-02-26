import React from "react";
import { api } from "@/trpc/server";
import { type Video } from "@/types/video";
import { Video as VideoPage } from "@/app/_components/video";
import { Copy } from "@/app/_components/common/Copy";

export default async function ({ params }: { params: { uuid: string } }) {
  const data = (await api.video.getVideo.query(params.uuid)) as Video;

  return (
    <div className="mb-20 mt-20 flex w-screen flex-col items-center justify-center">
      <div className="flex max-w-7xl flex-col ">
        <div className="mb-4 flex flex-col items-center gap-3 p-10">
          <div className="text-5xl font-bold text-primary">
            Preview Sora AI Video
          </div>
          <div className="text-lg">
            This video is made with Sora, by OpenAI red team.
          </div>
        </div>

        <div className="hero rounded bg-base-200">
          <div className="hero-content flex-col items-start lg:flex-row">
            <div className="artboard card flex h-[510px] w-[550px] justify-center">
              <video
                className="video h-full w-full cursor-pointer rounded-md"
                {...(data.src && { src: data.src })}
                {...(data.poster && { poster: data.poster })}
                preload="auto"
                muted
                loop
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-fit px-10">
              <p className="py-8 text-lg tracking-wider text-white">
                {data.prompt}
              </p>
              <div className="mb-5 flex w-full items-center justify-between pl-1 pt-4">
                <div className="flex items-center justify-center gap-2 ">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        {...(data.avatar && { src: data.avatar })}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                  <div className="font-bold">{data.author}</div>
                </div>
                <Copy text={String(data.prompt)} />
              </div>
              <button className="btn btn-primary">Download Video</button>
            </div>
          </div>
        </div>

        <div className="divider mb-10 mt-20 text-lg text-white">
          More Sora AI Videos
        </div>

        <div className="mx-auto">
          <VideoPage />
        </div>
      </div>
    </div>
  );
}
