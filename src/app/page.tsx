import { unstable_noStore as noStore } from "next/cache";
import { Hero } from "@/app/_components/hero";
import { Video } from "@/app/_components/video";

export default async function Home() {
  noStore();

  return (
    <div className="relative">
      <div className="mx-auto">
        <Hero />

        <div className="flex w-screen items-center justify-center bg-base-200 pb-10 pl-2 pr-2 pt-10">
          <div className="relative mx-auto max-w-7xl">
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}
