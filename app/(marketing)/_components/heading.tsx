"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">NoteWorthy</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        NoteWorthy is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button size={"sm"} asChild>
            <Link href={"/documents"}>
              Enter NoteWorthy <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </>
      )}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button size={"sm"}>
              Get NoteWorthy free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};
