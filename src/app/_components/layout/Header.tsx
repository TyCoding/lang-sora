import {
  MdiGithub,
  RiProductHuntFill,
  SimpleIconsBuymeacoffee,
} from "@/app/_components/common/Icon";
import { AppSetting } from "@/const/setting";

export function Header() {
  return (
    <header className="mt-1 h-auto w-screen">
      <div className="flex w-screen items-center justify-center">
        <div className="navbar max-w-7xl">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-3xl text-primary">
              {AppSetting.title}
            </a>
          </div>

          <div className="flex gap-4 text-white">
            <a href={AppSetting.github} target="_blank">
              <MdiGithub className="cursor-pointer text-2xl" />
            </a>
            <RiProductHuntFill className="cursor-pointer text-2xl" />
            <SimpleIconsBuymeacoffee className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
}
