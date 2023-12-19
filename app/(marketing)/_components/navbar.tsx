"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Spinner } from "@/components/spinner";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#181818] absolute top-0 inset-x-0   w-full  justify-between p-4 py-3",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className=" w-full justify-between flex items-center ">
        <Logo />

        <div className="md:ml-auto md:justify-end justify-between  flex items-center gap-x-2">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <div className=" hidden md:block">
                <SignInButton mode="modal">
                  <Button size="sm">Get Buzznote free</Button>
                </SignInButton>
              </div>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <div className=" hidden md:block">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/documents">Enter Buzznote</Link>
                </Button>
              </div>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
