import React from "react";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2">
        <button>Privacy Policy</button>
        <button>Terms & Conditions</button>
      </div>
    </div>
  );
};
