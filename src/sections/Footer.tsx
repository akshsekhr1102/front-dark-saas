import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import Instragram from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="py-5  border-white/15 border-t-2">
      <div className="container">
        <div className="flex flex-col md:flex-row md:tems-center  gap-8 ">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup landing page</div>
          </div>
          <div className="md:flex items-center justify-center">
            <nav className="flex flex-col md:flex-row gap-5 md:gap-7 lg:flex-1  text-white/70 text-xs transition">
              <Link
                href={"#"}
                className="hover:text-white text-xs transition md:text-sm"
              >
                Features
              </Link>
              <Link
                href={"#"}
                className="hover:text-white text-xs transition md:text-sm"
              >
                Developers
              </Link>
              <Link
                href={"#"}
                className="hover:text-white text-xs transition md:text-sm"
              >
                Company
              </Link>
              <Link
                href={"#"}
                className="hover:text-white text-xs transition md:text-sm"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="hover:text-white text-xs transition md:text-sm"
              >
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex md:items-center md:justify-center gap-5 text-white/50 lg:flex-1">
            <Xsocial className="hover:text-white" />
            <Instragram className="hover:text-white" />
            <Youtube className="hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
