"use client";

import { cn } from "@/utils/cn";
import { Logo } from "@/app/(components)/logo";
import { Chevron } from "@/app/(components)/chevron";
import { Menu } from "@/app/(components)/menu";
import React from "react";

export default function BadLayout(props: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={cn("flex justify-between p-8")}>
        <div className={cn("flex items-center gap-5 mb-8")}>
          <Logo />
          <div className={cn("text-stroke")}>Viktig logo</div>
        </div>
        <div className={cn("flex gap-20 mr-48 relative")}>
          <a
            href="#"
            tabIndex={-1}
            className={cn("text-stroke cursor-default")}
          >
            Dagens <div>artikkel</div>
          </a>
          <a
            href="#"
            tabIndex={-1}
            aria-hidden
            className={cn("text-stroke cursor-default")}
          >
            Nyheter
          </a>
          <a
            href="#"
            tabIndex={-1}
            aria-hidden
            className={cn("text-stroke cursor-default")}
          >
            Sport
          </a>
          <a
            href="#"
            tabIndex={-1}
            aria-hidden
            className={cn("text-stroke cursor-default")}
          >
            Kultur
          </a>
          <a
            href="#"
            tabIndex={-1}
            aria-hidden
            className={cn("text-stroke cursor-default")}
          >
            Humor
          </a>
          <a
            href="#"
            tabIndex={-1}
            aria-hidden
            className={cn("text-stroke cursor-default")}
          >
            Distrikt
          </a>
          <div className={cn("flex relative")}>
            <a
              href="#"
              tabIndex={-1}
              aria-hidden
              className={cn("text-stroke cursor-default flex")}
            >
              Mer
            </a>
            <Chevron
              onClick={() => setOpen(!open)}
              className={cn("relative top-2")}
            />

            {open && (
              <div
                className={cn(
                  "absolute bg-white top-10 -left-[800px] w-[840px] p-4 font-light",
                )}
              >
                <Menu />
              </div>
            )}
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
}
