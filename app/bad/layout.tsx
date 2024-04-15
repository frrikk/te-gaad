import { cn } from "@/utils/cn";
import { Logo } from "@/app/(components)/logo";

export default function BadLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className={cn("flex justify-between")}>
        <div className={cn("flex items-center gap-5 mb-8")}>
          <Logo />
          <div className={cn("text-stroke")}>Viktig logo</div>
        </div>
        <div className={cn("flex gap-20 mr-48")}>
          <div className={cn("text-stroke")}>
            Dagens <div>artikkel</div>
          </div>
          <div className={cn("text-stroke")}>Nyheter</div>
          <div className={cn("text-stroke")}>Sport</div>
          <div className={cn("text-stroke")}>Kultur</div>
          <div className={cn("text-stroke")}>Humor</div>
          <div className={cn("text-stroke")}>Distrikt</div>
          <div className={cn("text-stroke")}>Mer</div>
        </div>
      </div>
      {props.children}
    </>
  );
}
