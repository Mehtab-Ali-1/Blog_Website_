import React from "react";
import Link from "next/link";
// import { ModeToggle } from "../components/themecomponent";
import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className=" bg-background/50 px-auto sticky top-0 backdrop-blur border-b-2 z-50">
      <div className=" flex h-12 justify-around text-black dark:text-white items-center px-5 max-md:justify-between max-md:px-5">
        <div className="">
          <Link href="/home">
            <div className="text-lg font-bold select-none">MA Blog</div>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-5 select-none">
          <Link
            className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white"
            href="/about"
          >
            About
          </Link>
          <Link
            className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white"
            href="/contact"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 ml-6 ">
            <Link className="border-2 rounded-lg px-1 border-black dark:border-white" href="/signin">
              signin
            </Link>
            <Link
              className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-white"
              href="/signup"
            >
              signup
            </Link>
            <span>
              <ModeToggle />
            </span>
          </div>
        </div>
        <div className="md:hidden ">
          <Sheet>
            <span>
              <ModeToggle />
            </span>
            <SheetTrigger>
              <CgMenuRight />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <div className="flex justify-center text-lg font-bold mx-6 bg-slate-800 text-white">
                      MA Blog
                    </div>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col items-center mt-5 gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div className="flex gap-2 ml-6 mt-7">
                      <Link
                        className="border-2 rounded-lg px-2 border-slate-800"
                        href="/signin"
                      >
                        signin
                      </Link>
                      <Link href="/signup">signup</Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
