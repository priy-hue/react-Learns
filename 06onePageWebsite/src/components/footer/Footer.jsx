import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0b0b0f] border-t border-[#27272f]">

            <div className="mx-auto w-full max-w-7xl p-4 py-8 lg:py-10">

                <div className="md:flex md:justify-between">

                    {/* LOGO / ABOUT */}
                    <div className="mb-8 md:mb-0">

                        <Link to="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="mr-3 h-25"
                                alt="Logo"
                            />
                        </Link>

                        <p className="text-[#a1a1aa] text-sm mt-4 max-w-xs">
                            Building projects, learning new technologies,
                            and exploring the world of software development.
                        </p>

                    </div>


                    {/* FOOTER LINKS */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">


                        {/* RESOURCES */}
                        <div>

                            <h2 className="mb-5 text-sm font-semibold text-white uppercase">
                                Resources
                            </h2>

                            <ul className="text-[#a1a1aa] font-medium">

                                <li className="mb-4">
                                    <Link
                                        to="/"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        to="/about"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        to="/github"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/contacts"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        {/* FOLLOW ME */}
                        <div>

                            <h2 className="mb-5 text-sm font-semibold text-white uppercase">
                                Follow Me
                            </h2>

                            <ul className="text-[#a1a1aa] font-medium">

                                <li className="mb-4">
                                    <a
                                        href="https://github.com/YOUR_USERNAME"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Instagram
                                    </a>
                                </li>

                            </ul>

                        </div>


                        {/* LEGAL */}
                        <div>

                            <h2 className="mb-5 text-sm font-semibold text-white uppercase">
                                Legal
                            </h2>

                            <ul className="text-[#a1a1aa] font-medium">

                                <li className="mb-4">
                                    <Link
                                        to="#"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="#"
                                        className="hover:text-[#8b5cf6] transition duration-300"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>


                {/* DIVIDER */}
                <hr className="my-8 border-[#27272f]" />


                {/* BOTTOM */}
                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-[#71717a] sm:text-center">

                        © 2026{" "}

                        <span className="text-[#d4d4d8]">
                            PriyanshuKrSahu
                        </span>

                        . All Rights Reserved.

                    </span>


                    {/* SOCIAL ICONS */}
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">


                        {/* GITHUB */}
                        <a
                            href="https://github.com/YOUR_USERNAME"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#71717a] hover:text-[#8b5cf6] transition duration-300"
                        >

                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >

                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />

                            </svg>

                            <span className="sr-only">
                                GitHub account
                            </span>

                        </a>


                        {/* LINKEDIN */}
                        <a
                            href="#"
                            className="text-[#71717a] hover:text-[#8b5cf6] transition duration-300"
                        >

                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />

                            </svg>

                            <span className="sr-only">
                                LinkedIn
                            </span>

                        </a>


                        {/* INSTAGRAM */}
                        <a
                            href="#"
                            className="text-[#71717a] hover:text-[#8b5cf6] transition duration-300"
                        >

                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >

                                <path
                                    fillRule="evenodd"
                                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.75 6.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                                    clipRule="evenodd"
                                />

                            </svg>

                            <span className="sr-only">
                                Instagram
                            </span>

                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}