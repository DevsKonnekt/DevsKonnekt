"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./themeToggle";
import { navLinks } from "@/constants";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const NavBar = () => {
  return (
    <header className="fixed w-full left-0 px-4 sm:px-6 md:px-16 mx-auto h-20 shadow-xl z-50 dark:bg-gray-700">
      <nav className="flex justify-between items-center h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="DevsKonnekt Logo"
            width="60"
            height="60"
            className="rounded-full"
          />
        </Link>

        {/* Full Screen Menu */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.name} className="px-4">
                <Link
                  href={link.href}
                  className="text-sm tracking-widest font-bold "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="text-sm text-background font-bold">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent side="left" className="w-72 px-0">
                <SheetHeader className="p-4 mt-4">
                  <Image
                    src="/logo.jpg"
                    alt="DevsKonnekt Logo"
                    width="60"
                    height="60"
                    className="rounded-full block mx-auto"
                  />
                </SheetHeader>
                <Separator className="h-[2px] bg-primary opacity-45" />
                <ul className="p-4 w-full flex flex-col gap-4 mb-8 justify-between">
                  {navLinks.map((link) => (
                    <li key={link.name} className="px-4 w-full hover:underline">
                      <Link
                        href={link.href}
                        className="w-full text-md tracking-widest font-semibold hover:font-bold opacity-70 hover:opacity-100"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
