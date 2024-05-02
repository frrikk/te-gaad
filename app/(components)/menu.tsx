"use client";

import { cn } from "@/utils/cn";
import { Chevron } from "@/app/(components)/chevron";
import React from "react";

export const Menu = () => {
  return (
    <div className={cn("grid grid-cols-6 tracking-[-1.5px]")}>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>NYHETER</MegaMenuLink>
        <MegaMenuLink>NYHETSSENTER</MegaMenuLink>
        <MegaMenuLink>NORGE</MegaMenuLink>
        <MegaMenuLink>URIX</MegaMenuLink>
        <MegaMenuLink>DEBATTEN</MegaMenuLink>
        <MegaMenuLink>KULTUR</MegaMenuLink>
        <MegaMenuLink>LIVSTIL</MegaMenuLink>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>VITEN</MegaMenuLink>
        <MegaMenuLink>DOKUMENTAR</MegaMenuLink>
        <MegaMenuLink>YTRING</MegaMenuLink>
        <MegaMenuLink>NRK SÀPMI</MegaMenuLink>
        <MegaMenuLink>NRK KVENSK</MegaMenuLink>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>SPORT</MegaMenuLink>
        <MegaMenuLink>SPORTSNYHETER</MegaMenuLink>
        <MegaMenuLink>LIVESPORT</MegaMenuLink>
        <MegaMenuLink>SPORTSENDEPLAN</MegaMenuLink>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>DISTRIKT</MegaMenuLink>
        <MegaMenuLink>AGDER</MegaMenuLink>
        <MegaMenuLink>AKERSHUS</MegaMenuLink>
        <MegaMenuLink>BUSKERUD</MegaMenuLink>
        <MegaMenuLink>FINNMARK</MegaMenuLink>
        <MegaMenuLink>INNLANDET</MegaMenuLink>
        <MegaMenuLink>MØRE OG ROMSDAL</MegaMenuLink>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>ROGALAND</MegaMenuLink>
        <MegaMenuLink>TELEMARK</MegaMenuLink>
        <MegaMenuLink>TROMS</MegaMenuLink>
        <MegaMenuLink>TRØNDELAG</MegaMenuLink>
        <MegaMenuLink>VESTFOLD</MegaMenuLink>
        <MegaMenuLink>VESTLANDET</MegaMenuLink>
        <MegaMenuLink>ØSTFOLD</MegaMenuLink>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <MegaMenuLink>TEMASIDER</MegaMenuLink>
        <MegaMenuLink>NRK HUMOR</MegaMenuLink>
        <MegaMenuLink>NRK MAT</MegaMenuLink>
        <MegaMenuLink>NRK SKOLE</MegaMenuLink>
        <MegaMenuLink>NRKBETA</MegaMenuLink>
        <MegaMenuLink>INFO</MegaMenuLink>
        <MegaMenuLink>INFORMASJON</MegaMenuLink>
        <MegaMenuLink>KARRIERE</MegaMenuLink>
      </div>
    </div>
  );
};

const MegaMenuLink = ({
  tabIndex,
  children,
  outline,
}: {
  tabIndex?: number;
  children: string;
  outline?: boolean;
}) => (
  <a
    href={`/${children.toLowerCase()}-demo`}
    tabIndex={tabIndex}
    aria-hidden
    className={cn("uppercase", {})}
  >
    {children}
  </a>
);
