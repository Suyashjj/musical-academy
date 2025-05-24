// import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function GridBackground() {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black">
        <div
          className={twMerge(
            clsx(
              'absolute inset-0',
              '[background-size:40px_40px]',
              '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
              'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
            )
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>
    );
  }
  
  export default GridBackground;
