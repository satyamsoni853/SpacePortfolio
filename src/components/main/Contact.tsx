"use client";

import React from "react";
import { contactsData } from "@/constants/contact";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-10">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-[1200px] px-4 md:px-10 relative z-20">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 text-gray-200 p-6 border border-[#7042f88b] rounded-lg bg-[#0300145e] shadow-lg shadow-[#2A0E61]/50">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="leading-relaxed text-gray-300">
            Feel free to reach out to me for any questions, opportunities, or
            just to say hi!
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#b49bff]">Email:</span>
              <a
                href={`mailto:${contactsData.email}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {contactsData.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#b49bff]">Phone:</span>
              <span>{contactsData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#b49bff]">Address:</span>
              <span>{contactsData.address}</span>
            </div>
          </div>

          <div className="flex gap-5 mt-6 text-3xl text-gray-400">
            {contactsData.github && (
              <a
                href={contactsData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <RxGithubLogo />
              </a>
            )}
            {contactsData.linkedIn && (
              <a
                href={contactsData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <RxLinkedinLogo />
              </a>
            )}
            {contactsData.twitter && (
              <a
                href={contactsData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <RxTwitterLogo />
              </a>
            )}
            {contactsData.facebook && (
              <a
                href={contactsData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex-1 flex flex-col gap-4 p-6 border border-[#7042f88b] rounded-lg bg-[#0300145e] shadow-lg shadow-[#2A0E61]/50"
        >
          <input
            type="hidden"
            name="access_key"
            value="f5e9b95b-ceb0-42ce-a6ce-b9511c7f96e6"
          />
          <h2 className="text-2xl font-bold text-white mb-4">Send a Message</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="p-3 rounded-lg bg-[#0b0c1e] text-white border border-[#2b2d42] focus:border-[#7042f8] focus:outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="p-3 rounded-lg bg-[#0b0c1e] text-white border border-[#2b2d42] focus:border-[#7042f8] focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-300 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="p-3 rounded-lg bg-[#0b0c1e] text-white border border-[#2b2d42] focus:border-[#7042f8] focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-3 px-6 rounded-lg bg-linear-to-r from-purple-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
