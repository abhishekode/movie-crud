"use client";
import { useGlobalUser } from "@/context/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbLogout } from "react-icons/tb";
import { deleteCookie } from "cookies-next";

const StickyNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useGlobalUser();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 1, name: "Courses", path: "/courses" },
    { id: 2, name: "Blogs", path: "/blog" },
    { id: 3, name: "Gallery", path: "/about" },
    { id: 4, name: "About", path: "/about" },
  ];

  if (user) {
    if (user.role === "student") {
      navLinks.push({ id: 6, name: "Student", path: "/student" });
    } else if (user.role === "admin") {
      navLinks.push({ id: 4, name: "Admin", path: "/admin" });
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  if (pathname.match(/^\/admin(\/.*)?$/)) {
    return null;
  }

  const handleLogout = () => {
    deleteCookie("user");
    setUser(null);
  };

  return (
    <div
      className={`${isScrolled
        ? "bg-white shadow-md fixed w-screen top-0 text-gray-800"
        : "bg-slate-900 text-gray-50 sticky top-0"
        } z-50 px-4`}
    >
      <div className="max-w-7xl lg:mx-auto">
        <div className="py-5 px-2 flex justify-between items-center w-full rounded-md">
          <div className="cursor-pointer">
            <Link href="/" className="md:text-3xl text-xl font-extrabold uppercase">
              iAbhishek
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled ? 'text-gray-950' : 'text-gray-50'} focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${isMobileMenuOpen
              ? "fixed inset-0 z-50 bg-gray-800 text-white flex flex-col px-10 gap-4 pt-10"
              : "hidden"
              } lg:flex lg:space-x-4`}
          >
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex gap-8 lg:gap-6 lg:flex-row flex-col items-start">
              <div className="lg:hidden mb-10">
                <div className="cursor-pointer">
                  <Link href="/" className="text-2xl font-extrabold uppercase">
                    Crystal Pathshala
                  </Link>
                  <p className="uppercase md:text-xs font-semibold">offline education & learning</p>
                </div>
              </div>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path} className="text-3xl lg:text-base uppercase" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              {/* {user ? (
                <button
                  className="text-white bg-red-500"
                  onClick={handleLogout}
                >
                  <TbLogout className="text-2xl" />
                </button>
              ) : (
                <Link href="/auth" className="">
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
