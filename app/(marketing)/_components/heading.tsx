"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

export const Heading = () => {
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
      <Button>
        Enter NoteWorthy
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
