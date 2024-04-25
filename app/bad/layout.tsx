"use client";

import { cn } from "@/utils/cn";
import { Logo } from "@/app/(components)/logo";
import { Chevron } from "@/app/(components)/chevron";
import { Menu } from "@/app/(components)/menu";
import React, { ReactNode } from "react";

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
          <HovedMenyLink>Dagens artikkel</HovedMenyLink>
          <HovedMenyLink>Nyheter</HovedMenyLink>
          <HovedMenyLink>Sport</HovedMenyLink>
          <HovedMenyLink tabIndex={-1}>Kultur</HovedMenyLink>
          <HovedMenyLink>Humor</HovedMenyLink>
          <a
            className={cn("text-stroke cursor-default outline-0")}
            href="/distrikt"
          >
            Distrikt
          </a>
          <div className={cn("flex relative")}>
            <HovedMenyLink>Mer</HovedMenyLink>
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

const HovedMenyLink = ({
  tabIndex,
  children,
}: {
  tabIndex?: number;
  children: string;
}) => (
  <a
    href={`/bad/${children.toLowerCase()}-demo`}
    tabIndex={tabIndex}
    aria-hidden
    className={cn("text-stroke cursor-default outline-0")}
  >
    {children}
  </a>
);
