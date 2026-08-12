import React from "react";

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-175 bg-[#0b0b0f] sm:items-center sm:pt-0 text-white">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* LEFT SIDE */}
                        <div className="p-6 mr-2 bg-[#13131a] border border-[#27272f] sm:rounded-lg">

                            <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                                Get in touch:
                            </h1>

                            <p className="text-normal text-lg sm:text-xl font-medium text-[#a1a1aa] mt-2">
                                Fill in the form to start a conversation
                            </p>


                            {/* LOCATION */}
                            <div className="flex items-center mt-8 text-[#a1a1aa]">

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#8b5cf6]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold text-[#d4d4d8] w-40">
                                    C.V. Raman Global University, Odisha
                                </div>

                            </div>


                            {/* PHONE */}
                            <div className="flex items-center mt-4 text-[#a1a1aa]">

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#8b5cf6]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold text-[#d4d4d8] w-40">
                                    +91 XXXXX XXXXX
                                </div>

                            </div>


                            {/* EMAIL */}
                            <div className="flex items-center mt-2 text-[#a1a1aa]">

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#8b5cf6]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold text-[#d4d4d8] w-40">
                                    sahu******@gmail.com
                                </div>

                            </div>

                        </div>


                        {/* RIGHT SIDE - FORM */}
                        <form className="p-6 flex flex-col justify-center bg-[#0b0b0f]">

                            {/* NAME */}
                            <div className="flex flex-col">

                                <label
                                    htmlFor="name"
                                    className="text-[#d4d4d8] mb-1"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#13131a] border border-[#3f3f46] text-white font-semibold placeholder-[#71717a] focus:border-[#8b5cf6] focus:outline-none transition"
                                />

                            </div>


                            {/* EMAIL */}
                            <div className="flex flex-col mt-4">

                                <label
                                    htmlFor="email"
                                    className="text-[#d4d4d8] mb-1"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#13131a] border border-[#3f3f46] text-white font-semibold placeholder-[#71717a] focus:border-[#8b5cf6] focus:outline-none transition"
                                />

                            </div>


                            {/* PHONE */}
                            <div className="flex flex-col mt-4">

                                <label
                                    htmlFor="tel"
                                    className="text-[#d4d4d8] mb-1"
                                >
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#13131a] border border-[#3f3f46] text-white font-semibold placeholder-[#71717a] focus:border-[#8b5cf6] focus:outline-none transition"
                                />

                            </div>


                            {/* MESSAGE */}
                            <div className="flex flex-col mt-4">

                                <label
                                    htmlFor="message"
                                    className="text-[#d4d4d8] mb-1"
                                >
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-[#13131a] border border-[#3f3f46] text-white font-semibold placeholder-[#71717a] focus:border-[#8b5cf6] focus:outline-none transition resize-none"
                                ></textarea>

                            </div>


                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="md:w-32 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-lg mt-5 transition duration-300"
                            >
                                Submit
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}