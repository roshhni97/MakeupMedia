"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Image, Sparkles, Menu, X } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
              MakeupMedia
            </span>
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#"
              >
                Home
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#features"
              >
                Features
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#how-it-works"
              >
                How It Works
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Button variant="outline">Log In</Button>
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                Sign Up
              </Button>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 p-4 bg-background">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#"
              >
                Home
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#features"
              >
                Features
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#how-it-works"
              >
                How It Works
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#contact"
              >
                Contact
              </a>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                Sign Up
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Maintain Your Makeup Streak with MakeupMedia
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your daily dose of beauty inspiration. Create, share, and
                  maintain your makeup streak with our Pinterest-like platform
                  designed for makeup enthusiasts.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-violet-50 dark:from-pink-900/10 dark:to-violet-900/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About MakeupMedia
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  MakeupMedia is a social platform that combines the visual
                  appeal of Pinterest with the motivation of streak-based apps.
                  We're here to inspire and support makeup enthusiasts in their
                  daily beauty journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Calendar className="h-12 w-12 text-pink-500" />
                <h2 className="text-xl font-bold">Daily Streaks</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Maintain your makeup posting streak and track your progress
                  over time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Image className="h-12 w-12 text-violet-500" />
                <h2 className="text-xl font-bold">Visual Inspiration</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover and share makeup looks in a visually appealing
                  Pinterest-like layout.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Sparkles className="h-12 w-12 text-pink-500" />
                <h2 className="text-xl font-bold">Community Engagement</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with fellow makeup enthusiasts, share tips, and get
                  inspired.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-violet-50 dark:from-pink-900/10 dark:to-violet-900/10"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How MakeupMedia Works
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our community and start your makeup journey today. Here's
                  how to get started:
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <ol className="list-decimal list-inside text-left space-y-2">
                  <li>Sign up for a free account</li>
                  <li>Create your profile and set your makeup goals</li>
                  <li>Start posting your daily makeup looks</li>
                  <li>Engage with the community and get inspired</li>
                  <li>Maintain your streak and track your progress</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Request New Features
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're always looking to improve. Let us know what features
                  you'd like to see in MakeupMedia.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Describe the feature you'd like to see" />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-violet-500 text-white"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 MakeupMedia. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            FAQ
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
