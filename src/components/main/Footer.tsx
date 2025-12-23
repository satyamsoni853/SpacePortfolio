import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-800 dark:text-gray-200 shadow-lg p-[15px] z-[20] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/satyamsoni853"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-500 transition-colors"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <a
              href="https://x.com/crazy_soni_"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-400 transition-colors"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-soni-90a618258/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-500 transition-colors"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
            <a
              href="https://www.facebook.com/people/Satyam-Soni/pfbid02azCfxLuCYWnHa8qveWvvqpXid895adqbQ9fmViwHQeyfSjNbCSqmSxcDRfHufTJl/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-700 transition-colors"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919696050128&text=Hello+Satyam%2C+I+am+interested+in+hiring+you%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-green-500 transition-colors"
            >
              <BsWhatsapp />
              <span className="text-[15px] ml-[6px]">WhatsApp</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="https://drive.google.com/file/d/1K6BbOQqBZEtoNu1XqpDisApls2_82Iva/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-500 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">Download CV</span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                satyamsoni853@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Satyam Soni 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
