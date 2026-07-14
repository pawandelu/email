"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Icons from "../common/Icons";
import Heading from "../common/Heading";
import Button from "../common/Button";
import Swal from "sweetalert2";

const EmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_viipt7b", "template_nu9joan", form.current, {
        publicKey: "i-uFJaVh3bqI5pZHD",
      })
      .then(
        () => {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          form.current.reset();
        })

        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please try again.",
          });
          console.error(error);
        });
  };

  return (
    <footer className="px-4 lg:mt-30 md:mt-22 sm:mt-15 mt-10 flex flex-col items-center justify-center">
      <div className="max-w-[1760px] mx-auto flex flex-col lg:flex-row w-full relative ">
        {/* form */}
        <div className="p-5 sm:p-8 md:p-10 lg:p-15 lg:max-w-260 w-full border border-cool-gray">
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-start sm:items-center sm:gap-5 flex-nowrap md:mb-15 sm:mb-10 mb-6">
            <Heading
              heading={
                <>
                  Get in{" "}
                  <span className="text-orange underline flex-nowrap">
                    Touch
                  </span>{" "}
                </>
              }
              vari={"not"}
            />
            <img
              className=" md:w-[273.41px] sm:w-48 w-36 h-auto"
              src="/assets/image/webp/navlogo.webp"
              alt="footer logo"
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row gap-5 mb-7.5">
                <div className="md:max-w-112.25 w-full">
                  <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                    First Name
                  </h3>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter First Name..."
                    className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue "
                  />
                </div>
                <div className="md:max-w-112.25 w-full">
                  <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                    Email
                  </h3>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Enter Email..."
                    className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue "
                  />
                </div>
              </div>
            </div>
            <div className="mb-7.5">
              <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                Message
              </h3>
              <textarea
                type="message"
                name="message"
                required
                placeholder="Lorem ipsum dolor sit amet consectetur..."
                className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] pb-10 text-cool-gray border w-full outline-none mt-3.75 border-ash-blue resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex flex-row  items-center gap-3.75">
                <Icons icon={"pin"} />
                <h2 className="jost text-xl sm:text-[24px] font-medium leading-[100%] text-charcoal-blue">
                  Attach Files
                </h2>
              </div>
              <Button btn={"Send"} vari={"dan"} type="submit" />
            </div>
          </form>
        </div>
        {/* contact */}
        <div className='bg-[url("/assets/image/webp/footer-img.webp")] w-full lg:max-w-143.5 bg-cover p-5 sm:p-8 md:p-10 lg:pt-15 lg:pb-14.75 lg:pl-15 bg-no-repeat  bg-center min-h-auto lg:min-h-153.75'>
          <Heading heading={"Contact"} vari={"dan"} />

          <div className="mb-8 lg:mb-10 mt-10 lg:mt-15">
            <h2 className="jost font-medium text-2xl sm:text-[30px] leading-[100%] mb-5 underline text-white">
              Location:
            </h2>
            <a
              href="https://maps.google.com/?q=123+Main+Street,+Anytown,+CA+12345,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="Poppins font-normal text-base sm:text-[18px] leading-[100%] text-white"
            >
              123 Main Street, Anytown, CA 12345, USA
            </a>
          </div>

          <div className="mb-8 lg:mb-10">
            <h2 className="jost font-medium text-2xl sm:text-[30px] leading-[100%] mb-5 underline text-white">
              Email:
            </h2>
            <a
              href="mailto:clever.travel@example.com"
              className="Poppins font-normal text-base sm:text-[18px] leading-[100%] text-white"
            >
              clever.travel@example.com
            </a>
          </div>

          <div className="mb-8 lg:mb-10">
            <h2 className="jost font-medium text-2xl sm:text-[30px] leading-[100%] mb-5 underline text-white">
              Phone:
            </h2>
            <a
              href="tel:+01234567623"
              className="Poppins font-normal text-base sm:text-[18px] leading-[100%] text-white"
            >
              +01 234 5676 23
            </a>
          </div>
          <div className="flex flex-wrap gap-4 cursor-pointer">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                icon={"twiter"}
                className={"hover:scale-115 transition-all duration-300"}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                icon={"in"}
                className={"hover:scale-115 transition-all duration-300"}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                icon={"insta"}
                className={"hover:scale-115 transition-all duration-300"}
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                icon={"facebook"}
                className={"hover:scale-115 transition-all duration-300"}
              />
            </a>
          </div>
        </div>
        {/* img */}
        <div>
          <img
            className="hidden xl:block max-w-130.5 h-130.5 -z-10 w-full absolute right-0 top-10 "
            src="/assets/image/png/footer-bg-img.png"
            alt="golden frame"
          />
        </div>
      </div>

      <div className="max-w-[1760px] w-full mx-auto border border-cool-gray md:mt-15 sm:mt-10 mt-7"></div>

      <div className="max-w-[1760px] w-full mx-auto flex max-sm:flex-wrap flex-row items-center justify-between my-4 sm:mt-7.5 sm:mb-7.5 gap-5">
        <span className="Poppins font-normal text-[16px] leading-[150%] text-charcoal-blue">
          Powered by GoDaddy
        </span>
      </div>
    </footer>
  );
};

export default EmailJS;
