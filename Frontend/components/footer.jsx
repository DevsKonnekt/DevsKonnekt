"use client";
import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from "react-icons/bi";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 max-w-7xl w-full mx-auto px-4 mt-8 py-4 bg-primary">
      <div className="flex flex-col gap-4  flex-wrap sm:flex-row items-start justify-start lg:justify-between">
        <div className="flex flex-col items-start justify-start gap-4">
          <Link
            href="/"
            className="text-3xl md:text-5xl text-background font-black"
          >
            DevsKonnekt
          </Link>
          <p className="text-center text-background/80 font-semibold">
            Connecting Developers, <br />
            Simplifying Innovation.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-xl md:text-2xl text-background font-black">
            Links
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li>
              <Link href="/" className="text-background/80">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-background/80">
                Services
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-background/80">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-background/80">
                Events
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-background/80">
                News & Updates
              </Link>
            </li>
            <li>
              <Link href="/developers" className="text-background/80">
                Explore Profiles
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-xl md:text-2xl text-background font-black">
            About
          </h2>
          <ul className="flex flex-col items-start justify-start gap-4">
            <li>
              <Link href="/about" className="text-background/80">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-background/80">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-background/80">
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="#" className="text-background/80">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-background/80">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-xl md:text-2xl text-background font-black">
            Support
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li>
              <Link href="/contact" className="text-background/80">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-background/80">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-xl md:text-2xl text-background font-black">
            Legal
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li>
              <Link href="/privacy-policy" className="text-background/80">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-background/80">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap sm:flex-row items-start justify-start mt-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-xl md:text-2xl text-background font-black">
            Connect with Us
          </h2>
          <p className="text-start text-background/80 font-semibold max-w-[35ch]">
            Follow us on social media to stay up-to-date with the latest news
            and updates.
          </p>
          <ul className="flex flex-wrap items-start justify-start gap-2 sm:gap-4 md:gap-6">
            <li>
              <Link
                href="https://www.linkedin.com/company/devskonnekt/"
                className="text-background/80"
              >
                <BiLogoLinkedinSquare size={32} />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/DevsKonnekt"
                className="text-background/80"
              >
                <BiLogoTwitter size={32} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/devskonnekt/"
                className="text-background/80"
              >
                <BiLogoInstagramAlt size={32} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/DevsKonnekt"
                className="text-background/80"
              >
                <BiLogoFacebookSquare size={32} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 w-full sm:w-auto">
          <h2 className="text-xl md:text-2xl text-background font-black">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-start text-background/80 font-semibold max-w-[40ch]">
            Get the latest news, updates, and insights straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row items-start justify-start gap-2 w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-0 rounded-lg bg-background text-primary/80"
            />
            <button
              type="submit"
              className="h-10 primary-btn w-full sm:w-[283px] font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Separator className="w-full h-[2px] bg-secondary/30" />
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4">
        <p className="text-center text-background/80 font-semibold">
          © {new Date().getFullYear()} DevsKonnekt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
