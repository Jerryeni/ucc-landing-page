"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
    tokensSold: number; 
    totalTokens: number; 
  }
>(({ className, value, indicatorClassName, tokensSold, totalTokens, ...props }, ref) => {
  const progressPercentage = (value || 0); // Ensure value is defined
  const dynamicTokensSold = Math.round((progressPercentage / 100) * totalTokens); // Calculate tokens sold based on progress

  return (
    <div className="relative w-full ">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        {/* Progress bar indicator */}
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-500 ease-in-out",
            indicatorClassName
          )}
          style={{
            transform: `translateX(-${100 - progressPercentage}%)`,
          }}
        />
      </ProgressPrimitive.Root>

      {/* White dot */}
      {value !== undefined && (
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full"
          style={{
            width: "16px",
            height: "16px",
            left: `calc(${progressPercentage}% - 8px)`,
          }}
        />
      )}

      {value !== undefined && (
        <div
          className="absolute top-8 left-0 transform"
          style={{
            left: `calc(${progressPercentage}% - 50px)`, 
          }}
        >
          <div className="bg-[#2a2a2a] border border-gray-500 border-opacity-40 rounded-xl py-2 px-4 shadow-lg">
            <div className="text-center">
              <div className="text-sm md:text-xl font-bold text-white">
                {dynamicTokensSold.toLocaleString()} UCC
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                TOKENS SOLD
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };