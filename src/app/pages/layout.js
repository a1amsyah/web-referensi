"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Logo</div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {/* Ikon Hamburger */}
              <svg
                className="w-6 h-6"
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
          <ul
            ref={menuRef}
            className={`md:flex space-x-4 ${
              isOpen ? "block" : "hidden"
            } absolute md:static bg-gray-900 left-0 w-full md:w-auto border-t md:border-none border-gray-700`}
          >
            <li className="block md:inline-block">
              <Link href="/pages/dashboard/landing-pages">
                <Button variant="ghost" className="w-full text-left p-2">
                  Referensi Landing Page
                </Button>
              </Link>
            </li>
            <li className="block md:inline-block">
              <Link href="/pages/dashboard/video-ads">
                <Button variant="ghost" className="w-full text-left p-2">
                  Referensi Video Iklan
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-8">{children}</main>
    </div>
  );
}
