"use client";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LogInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button variant="outline" className="cursor-pointer">
        Login
      </Button>
    </SignInButton>
  );
};

export default LogInButton;