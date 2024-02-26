import { MdiGithub } from "@/app/_components/common/Icon";
import { AppSetting, FooterSetting } from "@/const/setting";

export const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-info-content p-16 text-neutral-content">
      <div className="footer mt-auto max-w-7xl px-5">
        <aside>
          <p className="pb-2 text-lg font-bold text-white">
            {AppSetting.title}
          </p>
          <div className="flex flex-col gap-2 text-gray-500">
            <div>{AppSetting.description}</div>
            <div>
              Copyright © 2024 -{" "}
              <a
                href={AppSetting.github}
                target="_blank"
                className="link-hover link link-primary"
              >
                {AppSetting.author}
              </a>{" "}
              All right reserved
            </div>
            <div className="mt-2 flex gap-2 text-white">
              <a href={AppSetting.github} target="_blank">
                <MdiGithub className="cursor-pointer text-2xl" />
              </a>
            </div>
          </div>
        </aside>
        {FooterSetting.map((item) => {
          return (
            <nav key={item.label} className="gap-3 tracking-wider">
              <h6 className="footer-title">{item.label}</h6>
              {item.list.map((link) => {
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    className="link-hover link"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          );
        })}
      </div>
    </footer>
  );
};
