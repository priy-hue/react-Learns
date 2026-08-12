import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-[#0b0b0f] text-white">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden">

                {/* Purple background glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6] opacity-20 blur-[120px] rounded-full"></div>

                <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="text-center lg:text-left">

                            <p className="text-[#8b5cf6] font-semibold tracking-[3px] uppercase text-sm">
                                Welcome to my portfolio
                            </p>

                            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-tight">

                                Hi, I'm{" "}
                                <span className="text-[#8b5cf6]">
                                    Priyanshu
                                </span>

                            </h1>

                            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#d4d4d8]">
                                Developer & AI/ML Enthusiast
                            </h2>

                            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-[#a1a1aa] text-lg leading-8">

                                I build web applications, explore artificial
                                intelligence, and enjoy turning ideas into
                                practical projects using modern technologies.

                            </p>


                            {/* BUTTONS */}
                            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

                                <Link
                                    to="/github"
                                    className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-lg transition duration-300"
                                >
                                    View My Projects →
                                </Link>

                                <Link
                                    to="/contacts"
                                    className="px-6 py-3 border border-[#3f3f46] hover:border-[#8b5cf6] text-[#d4d4d8] hover:text-white font-semibold rounded-lg transition duration-300"
                                >
                                    Contact Me
                                </Link>

                            </div>

                        </div>


                        {/* RIGHT SIDE */}
                        <div className="flex justify-center lg:justify-end">

                            <div className="relative">

                                {/* Glow */}
                                <div className="absolute inset-0 bg-[#8b5cf6] opacity-20 blur-[80px] rounded-full"></div>

                                {/* Image */}
                                <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#27272f] bg-[#13131a] flex items-center justify-center overflow-hidden">

                                    <img
                                        src="/my.png"
                                        alt="Developer illustration"
                                        className="w-64 sm:w-80 object-contain"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ABOUT PREVIEW */}
            <section className="border-t border-[#27272f]">

                <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8">

                    <div className="text-center">

                        <span className="text-[#8b5cf6] font-semibold tracking-[3px] text-sm uppercase">
                            What I Do
                        </span>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                            Turning ideas into{" "}
                            <span className="text-[#8b5cf6]">
                                projects
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl mx-auto text-[#a1a1aa] leading-7">
                            I enjoy learning by building. From web applications
                            to AI and machine learning projects, I continuously
                            experiment with new technologies.
                        </p>

                    </div>


                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">


                        {/* CARD 1 */}
                        <div className="p-7 bg-[#13131a] border border-[#27272f] rounded-2xl hover:border-[#8b5cf6] transition duration-300">

                            <div className="text-3xl mb-5">
                                💻
                            </div>

                            <h3 className="text-xl font-bold">
                                Web Development
                            </h3>

                            <p className="mt-3 text-[#a1a1aa] leading-7 text-sm">
                                Building responsive and interactive web
                                applications using React, JavaScript,
                                HTML and CSS.
                            </p>

                        </div>


                        {/* CARD 2 */}
                        <div className="p-7 bg-[#13131a] border border-[#27272f] rounded-2xl hover:border-[#8b5cf6] transition duration-300">

                            <div className="text-3xl mb-5">
                                🤖
                            </div>

                            <h3 className="text-xl font-bold">
                                AI & Machine Learning
                            </h3>

                            <p className="mt-3 text-[#a1a1aa] leading-7 text-sm">
                                Exploring machine learning, artificial
                                intelligence and building practical
                                AI-powered applications.
                            </p>

                        </div>


                        {/* CARD 3 */}
                        <div className="p-7 bg-[#13131a] border border-[#27272f] rounded-2xl hover:border-[#8b5cf6] transition duration-300">

                            <div className="text-3xl mb-5">
                                🧠
                            </div>

                            <h3 className="text-xl font-bold">
                                Problem Solving
                            </h3>

                            <p className="mt-3 text-[#a1a1aa] leading-7 text-sm">
                                Practicing data structures and algorithms
                                while improving my programming and
                                problem-solving skills.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* PROJECT CTA */}
            <section className="border-t border-[#27272f]">

                <div className="max-w-4xl mx-auto text-center px-6 py-20">

                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Want to see what I've built?
                    </h2>

                    <p className="mt-4 text-[#a1a1aa]">
                        Explore my projects and see what I'm currently
                        working on.
                    </p>

                    <Link
                        to="/github"
                        className="inline-block mt-7 px-7 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-lg font-semibold transition duration-300"
                    >
                        Explore Projects →
                    </Link>

                </div>

            </section>

        </div>
    );
}