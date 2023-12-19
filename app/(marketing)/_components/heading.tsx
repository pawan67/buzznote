"use client";

import { Spinner } from "@/components/spinner";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className=" text-xl font-bold sm:text-2xl md:text-4xl ">
        Your Ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className=" underline">BuzzNote</span>
      </h1>
      <h3 className=" text-base font-medium sm:text-xl md:text-2xl">
        Buzznote is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className=" w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Link
          className={cn(
            buttonVariants({
              size: "sm",
            }),
            " "
          )}
          href="/documents"
        >
          <p>Enter Buzznote</p> <ArrowRight className=" h-4 w-4 ml-1" />
        </Link>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="lg">Get Buzznote free</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
