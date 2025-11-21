import React from "react";
import { Button } from "@/components/ui/button";

const Subscription = () => {
  return (
    <div className="mt-5 md:mt-15">
      <div className="flex flex-col items-center text-center gap-3 px-4">
        <div className="text-base md:text-lg font-medium">
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto py-3">
          <input
            className="border border-gray-500 bg-black/30 p-3 rounded-sm text-white w-full md:w-[350px]"
            type="text"
            placeholder="Email Address"
          />

          <Button className="bg-red-600 px-6 py-6 hover:bg-red-700 w-full md:w-auto">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
