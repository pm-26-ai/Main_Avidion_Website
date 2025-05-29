import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "selection:bg-primary dark:bg-input/30 shadow-xs flex h-9 w-full min-w-0 rounded-[4px] border border-[#CCCACA] bg-[rgba(255,255,255,0.03)] px-[15px] py-3 text-sm text-[#969696] outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium placeholder:text-sm placeholder:text-[#969696] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
