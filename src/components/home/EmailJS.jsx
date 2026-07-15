"use client";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";
import Icons from "../common/Icons";
import Button from "../common/Button";

const EmailJs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    gender: "",
  });

  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setError(true);

    formData.user_name &&
    formData.user_email &&
    /^\d{10}$/.test(formData.user_phone) &&
    formData.gender
      ? (setError(false),
        localStorage.setItem(
          "contacts",
          JSON.stringify([
            ...(JSON.parse(localStorage.getItem("contacts")) || []),
            formData,
          ]),
        ),
        emailjs
          .sendForm("service_77m9x8k", "template_efhy5jn", form.current, {
            publicKey: "wJo3JKkjDqwuvZNbQ",
          })

          .then(() => {
            toast.success("Your message has been sent successfully!");
            form.current.reset();

            setFormData({
              user_name: "",
              user_email: "",
              user_phone: "",
              gender: "",
            });
          })
          .catch((error) => {
            toast.error("Failed to send your message.");
            console.error(error);
          }))
      : null;
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <section className="px-4 mt-10 mb-10  flex flex-col items-center justify-center">
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
              <Image
                src="/assets/image/webp/navlogo.webp"
                width={273.42}
                height={80}
                className=" md:w-[273.41px] sm:w-48 w-36 h-auto"
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
                    {error && !formData.user_name ? (
                      <p className="text-red text-sm mt-1">Name is required</p>
                    ) : null}
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={(e) =>
                        setFormData({ ...formData, user_name: e.target.value })
                      }
                      placeholder="Enter First Name..."
                      className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue "
                    />
                  </div>
                  <div className="md:max-w-112.25 w-full">
                    <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                      Email
                    </h3>
                    {error && !formData.user_email ? (
                      <p className="text-red text-sm mt-1">Email is required</p>
                    ) : null}
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={(e) =>
                        setFormData({ ...formData, user_email: e.target.value })
                      }
                      placeholder="Enter Email..."
                      className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-5 mb-7.5">
                  <div className="md:max-w-112.25 w-full">
                    <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                      Phone Number
                    </h3>
                    {error && !/^\d{10}$/.test(formData.user_phone) ? (
                      <p className="text-red text-sm mt-1">
                        Phone number is required and must be exactly 10 digits.
                      </p>
                    ) : null}
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      maxLength={10}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setFormData({ ...formData, user_phone: value });
                      }}
                      placeholder="Enter Phone Number..."
                      className="Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue "
                    />
                  </div>
                  <div className="md:max-w-112.25 w-full">
                    <h3 className="Poppins text-[16px] font-medium leading-[100%] text-charcoal-blue">
                      Gender
                    </h3>
                    {error && !formData.user_phone ? (
                      <p className="text-red text-sm mt-1">
                        Gender is required
                      </p>
                    ) : null}
                    <div className=" relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="appearance-none Poppins px-3.75 py-3.5 text-[16px] font-medium leading-[100%] text-cool-gray border w-full outline-none mt-3.75 border-ash-blue bg-white cursor-pointer"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-10 -translate-y-1/2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="#6B7280"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex flex-row  items-center gap-3.75">
                  <Icons icon={"pin"} />
                  <h2 className="jost text-xl sm:text-[24px] font-medium leading-[100%] text-charcoal-blue">
                    Attach Files
                  </h2>
                </div>
                <Button btn={"Send"} value="Send" vari={"dan"} type="submit" />
              </div>
            </form>
          </div>
          {/* contact */}
          <div className="footer-bg w-full lg:max-w-143.5 p-5 sm:p-8 md:p-10 lg:pt-15 lg:pb-14.75 lg:pl-15 min-h-auto lg:min-h-153.75">
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
            <Image
              src="/assets/image/png/footer-bg-img.png"
              width={552}
              height={552}
              className="hidden xl:block max-w-130.5 h-130.5 -z-10 w-full absolute right-0 top-10 "
              alt="golden frame"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailJs;
