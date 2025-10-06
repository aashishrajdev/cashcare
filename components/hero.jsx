"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-5xl lg:text-[48px] font-extrabold pb-6">
          Manage Your Finances <br />
          With Intelligence
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          An AI-powered personal finance management tool that helps you
          track,analyze, and optimize your spending with real-time insights and
          personalized recommendations.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/aashishrajdev/cashcare">
            <Button size="lg" variant="ghost" className="px-8">
              Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
