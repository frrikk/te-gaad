"use client";

import { cn } from "@/utils/cn";
import { Chevron } from "@/app/(components)/chevron";
import React from "react";

export const Menu = () => {
  return (
    <div className={cn("grid grid-cols-6 tracking-[-1.5px]")}>
      <div className={cn("flex flex-col gap-2")}>
        <div>NYHETER</div>
        <div>NYHETSSENTER</div>
        <div>NORGE</div>
        <div>URIX</div>
        <div>DEBATTEN</div>
        <div>KULTUR</div>
        <div>LIVSTIL</div>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <div>VITEN</div>
        <div>DOKUMENTAR</div>
        <div>YTRING</div>
        <div>NRK SÀPMI</div>
        <div>NRK KVENSK</div>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <div>SPORT</div>
        <div>SPORTSNYHETER</div>
        <div>LIVESPORT</div>
        <div>SPORTSENDEPLAN</div>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <div>DISTRIKT</div>
        <div>AGDER</div>
        <div>AKERSHUS</div>
        <div>BUSKERUD</div>
        <div>FINNMARK</div>
        <div>INNLANDET</div>
        <div>MØRE OG ROMSDAL</div>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <div>ROGALAND</div>
        <div>TELEMARK</div>
        <div>TROMS</div>
        <div>TRØNDELAG</div>
        <div>VESTFOLD</div>
        <div>VESTLANDET</div>
        <div>ØSTFOLD</div>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <div>TEMASIDER</div>
        <div>NRK HUMOR</div>
        <div>NRK MAT</div>
        <div>NRK SKOLE</div>
        <div>NRKBETA</div>
        <div>INFO</div>
        <div>INFORMASJON</div>
        <div>KARRIERE</div>
      </div>
    </div>
  );
};
