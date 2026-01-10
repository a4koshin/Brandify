import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-8 mb-14 mt-16">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-3xl text-start lg:text-left px-4 sm:px-6 lg:mt-14">
          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 mb-4 md:mb-6">
            Seamless <span className="text-[#3b9ed8]">Travel</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#3b9ed8]">
                Expertly Managed
              </span>
              <span className="absolute bottom-1.5 xs:bottom-2 left-0 w-full h-2 xs:h-3 bg-gradient-to-r from-[#3b9ed8] to-white -rotate-1 z-0 opacity-10"></span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-800">Here</span>
              <span className="absolute bottom-1.5 xs:bottom-2 left-0 w-full h-2 xs:h-3 bg-gradient-to-r from-blue-50 to-blue-100 -rotate-1 z-0"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span className="font-semibold text-[#3b9ed8] text-base">
              {" "}
              At Rahila travel agency
            </span>{" "}
            we design personalized travel experiences with precision, expertise,
            and genuine passion. Every journey is thoughtfully planned to be
            seamless, inspiring, and tailored to your unique needs—so you can
            explore the world with confidence, comfort, and complete peace of
            mind.
          </p>
          <div className="flex xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 items-center">
            <Button className="px-6 py-5 font-meduim bg-[#3b9ed8] text-white hover:bg-[#2f7ead]">
              Book your Flight <span className="animate"> ✈</span>
            </Button>
            <Button
              className="px-6 py-5 font-meduim border border-[#3b9ed8] text-[#3b9ed8] hover:bg-[#ebf5fb] hover:text-[#3b9ed8]"
              variant="outline"
            >
              Direct Message
            </Button>
          </div>
        </div>
        {/* Right */}
        <div className="w-full lg:w-5/12 xl:w-1/3 max-w-lg mx-auto">
          <div className="relative group">
            <div className="aspect-square lg:aspect-[3/4] xl:aspect-[4/5] relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              <Image
                src="/hero.png"
                alt="Caalami Group construction project showcasing modern equipment and professional team"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
