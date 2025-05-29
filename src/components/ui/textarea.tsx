import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content shadow-xs flex min-h-16 w-full rounded-[4px] border border-[#CCCACA] bg-[rgba(255,255,255,0.03)] px-[15px] py-3 text-base text-[#969696] outline-none transition-[color,box-shadow] placeholder:text-sm placeholder:text-[#969696] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
