import { Card } from "@/app/_components/video/Card";
import { type Video } from "@/types/video";
import { api } from "@/trpc/server";

export async function Video() {
  const list: Video[] = await api.video.getVideoList.query();

  return (
    <div
      className="columns-1 md:columns-2 xl:columns-3"
      style={{ columnGap: "1rem" }}
    >
      {list &&
        list.length > 0 &&
        list.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            <Card {...item} />
          </div>
        ))}
    </div>
  );
}
