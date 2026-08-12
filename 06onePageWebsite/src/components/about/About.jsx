import React from "react";

export default function About() {
    return (
        <div className="py-20 bg-[#0b0b0f] text-white">

            <div className="container m-auto px-6 md:px-12 xl:px-6">

                <div className="space-y-10 md:space-y-0 md:flex md:gap-12 lg:items-center">


                    {/* IMAGE */}
                    <div className="md:w-5/12 lg:w-5/12">

                        <div className="relative">

                            <div className="absolute -inset-2 bg-[#8b5cf6] opacity-20 blur-2xl rounded-2xl"></div>

                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG0rNZFf7nSxKROnQZJS0GpJjAiEK5Rgco1KNUfZfgQ&s=10"
                                alt="About"
                                className="relative rounded-2xl border border-[#27272f] shadow-2xl w-full"
                            />

                        </div>

                    </div>


                    {/* CONTENT */}
                    <div className="md:w-7/12 lg:w-6/12">

                        <span className="text-[#8b5cf6] font-semibold tracking-[3px] text-sm uppercase">
                            About Me
                        </span>


                        <h2 className="mt-3 text-3xl text-white font-bold md:text-5xl leading-tight">

                            Building ideas into
                            <span className="text-[#8b5cf6]"> real projects.</span>

                        </h2>


                        <p className="mt-6 text-[#a1a1aa] leading-7">

                            I'm a developer passionate about building practical
                            applications and exploring modern technologies. I enjoy
                            turning ideas into working projects while continuously
                            improving my problem-solving and development skills.

                        </p>


                        <p className="mt-4 text-[#a1a1aa] leading-7">

                            My interests include React, Python, AI/ML, backend
                            development and data structures & algorithms. I'm
                            constantly learning new technologies and working on
                            projects that help me understand how real-world
                            applications are built.

                        </p>


                        {/* SKILLS */}
                        <div className="mt-8">

                            <h3 className="text-lg font-semibold text-white mb-4">
                                What I Work With
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    React
                                </span>

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    JavaScript
                                </span>

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    Python
                                </span>

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    C++
                                </span>

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    AI / ML
                                </span>

                                <span className="px-4 py-2 bg-[#13131a] border border-[#27272f] rounded-lg text-[#d4d4d8] text-sm hover:border-[#8b5cf6] transition">
                                    FastAPI
                                </span>

                            </div>

                        </div>


                        {/* BUTTON */}
                        <div className="mt-8">

                            <a
                                href="/github"
                                className="inline-block px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-lg transition duration-300"
                            >
                                Explore My Projects →
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}