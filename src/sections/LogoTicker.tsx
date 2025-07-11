import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]">
            <div className="flex flex-none gap-12">
              {[
                acmeLogo,
                apexLogo,
                echoLogo,
                celestialLogo,
                pulseLogo,
                quantumLogo,
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt="logo"
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
