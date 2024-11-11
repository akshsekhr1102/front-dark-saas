"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImg from "@/assets/product-image.png";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mx-auto">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has
          revolution the way business approach SEO.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {tabs.map((tab) => (
            <div
              className="border border-white/15 flex items-center  p-2.5 rounded-xl gap-2.5 flex-1"
              key={tab.title}
            >
              <div className="size-12 border border-white/15 rounded-lg grid place-content-center ">
                <DotLottiePlayer src={tab.icon} className="size-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="px-3 py-1 border-[1px] bg-[#8c44ff] text-black text-xs rounded-[32px]">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-2.5 rounded-xl mt-3 border border-white/20">
          <div
            className=" aspect-video bg-cover border  border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImg.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
