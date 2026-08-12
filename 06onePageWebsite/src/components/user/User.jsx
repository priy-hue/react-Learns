import React from "react";

export default function User() {
    return (
        <div className="min-h-screen bg-[#0b0b0f] text-white py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-12">

                    <span className="text-[#8b5cf6] font-semibold tracking-[3px] text-sm uppercase">
                        My Profile
                    </span>

                    <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
                        About the <span className="text-[#8b5cf6]">Developer</span>
                    </h1>

                </div>


                {/* PROFILE CARD */}
                <div className="bg-[#13131a] border border-[#27272f] rounded-2xl p-8">

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                        {/* PROFILE IMAGE */}
                        <div className="relative">

                            <div className="absolute inset-0 bg-[#8b5cf6] opacity-20 blur-2xl rounded-full"></div>

                            <div className="relative w-32 h-32 rounded-full border-2 border-[#8b5cf6] bg-[#0b0b0f] flex items-center justify-center overflow-hidden">

                                <img
                                    src="/logo.png"
                                    alt="Profile"
                                    className="w-24 h-24 object-contain"
                                />

                            </div>

                        </div>


                        {/* USER INFO */}
                        <div className="text-center md:text-left flex-1">

                            <h2 className="text-3xl font-bold">
                                Priyanshu Kumar Sahu
                            </h2>

                            <p className="mt-2 text-[#8b5cf6] font-semibold">
                                Developer • AI/ML Enthusiast
                            </p>

                            <p className="mt-5 text-[#a1a1aa] leading-7 max-w-2xl">

                                I'm a developer who enjoys building practical
                                applications and learning new technologies.
                                I'm currently focused on improving my skills
                                in React, Python, AI/ML, and problem solving.

                            </p>


                            {/* SOCIAL BUTTONS */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">

                                <a
                                    href="https://github.com/YOUR_USERNAME"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-lg font-semibold transition"
                                >
                                    GitHub ↗
                                </a>

                                <a
                                    href="#"
                                    className="px-5 py-2.5 border border-[#3f3f46] hover:border-[#8b5cf6] rounded-lg text-[#d4d4d8] hover:text-white transition"
                                >
                                    LinkedIn ↗
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* INFORMATION CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


                    {/* SKILLS */}
                    <div className="bg-[#13131a] border border-[#27272f] rounded-2xl p-7 hover:border-[#8b5cf6] transition">

                        <h3 className="text-xl font-bold mb-5">
                            🛠 Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                React
                            </span>

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                JavaScript
                            </span>

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                Python
                            </span>

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                C++
                            </span>

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                AI / ML
                            </span>

                            <span className="px-3 py-2 bg-[#0b0b0f] border border-[#27272f] rounded-lg text-sm">
                                FastAPI
                            </span>

                        </div>

                    </div>


                    {/* EDUCATION */}
                    <div className="bg-[#13131a] border border-[#27272f] rounded-2xl p-7 hover:border-[#8b5cf6] transition">

                        <h3 className="text-xl font-bold mb-5">
                            🎓 Education
                        </h3>

                        <h4 className="text-lg font-semibold">
                            C. V. Raman Global University
                        </h4>

                        <p className="mt-2 text-[#a1a1aa]">
                            B.Tech — Artificial Intelligence & Data Science
                        </p>

                        <p className="mt-2 text-[#71717a] text-sm">
                            Currently pursuing my degree and building projects
                            alongside my studies.
                        </p>

                    </div>

                </div>


                {/* CURRENT FOCUS */}
                <div className="mt-6 bg-[#13131a] border border-[#27272f] rounded-2xl p-7">

                    <h3 className="text-xl font-bold">
                        🚀 Currently Learning
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

                        <div className="p-5 bg-[#0b0b0f] rounded-xl border border-[#27272f]">
                            <p className="text-[#8b5cf6] font-semibold">
                                01
                            </p>

                            <h4 className="mt-2 font-semibold">
                                React Development
                            </h4>

                            <p className="mt-2 text-sm text-[#71717a]">
                                Building reusable components and modern UIs.
                            </p>
                        </div>


                        <div className="p-5 bg-[#0b0b0f] rounded-xl border border-[#27272f]">
                            <p className="text-[#8b5cf6] font-semibold">
                                02
                            </p>

                            <h4 className="mt-2 font-semibold">
                                AI / ML
                            </h4>

                            <p className="mt-2 text-sm text-[#71717a]">
                                Exploring machine learning and AI applications.
                            </p>
                        </div>


                        <div className="p-5 bg-[#0b0b0f] rounded-xl border border-[#27272f]">
                            <p className="text-[#8b5cf6] font-semibold">
                                03
                            </p>

                            <h4 className="mt-2 font-semibold">
                                DSA
                            </h4>

                            <p className="mt-2 text-sm text-[#71717a]">
                                Improving algorithms and problem-solving skills.
                            </p>
                        </div>

                    </div>

                </div>


                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                    <div className="bg-[#13131a] border border-[#27272f] rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-[#8b5cf6]">
                            10+
                        </h3>
                        <p className="text-[#71717a] mt-2 text-sm">
                            Projects
                        </p>
                    </div>

                    <div className="bg-[#13131a] border border-[#27272f] rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-[#8b5cf6]">
                            5+
                        </h3>
                        <p className="text-[#71717a] mt-2 text-sm">
                            Technologies
                        </p>
                    </div>

                    <div className="bg-[#13131a] border border-[#27272f] rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-[#8b5cf6]">
                            3+
                        </h3>
                        <p className="text-[#71717a] mt-2 text-sm">
                            Years Learning
                        </p>
                    </div>

                    <div className="bg-[#13131a] border border-[#27272f] rounded-xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-[#8b5cf6]">
                            ∞
                        </h3>
                        <p className="text-[#71717a] mt-2 text-sm">
                            Things to Learn
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}