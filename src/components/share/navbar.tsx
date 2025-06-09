"use client";
import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import ContactForm from "../forms/contact-form";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { useMediaQuery } from "@uidotdev/usehooks";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import path from "path";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();

  const isOpen = searchParams.get("open") === "true";

  const handleClose = () => {
    params.delete("open");
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const manageOutsideClick = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      navbarRef?.current?.contains(target) ||
      hamburgerRef?.current?.contains(target)
    ) {
      return;
    }

    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", manageOutsideClick);

    return () => {
      document.removeEventListener("click", manageOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="fixed top-6 z-30 w-full px-2.5 md:px-[27px] xl:px-[114px] 2xl:px-[249px]">
        <div className="rounded-[30px] border border-white/15 bg-[rgba(45,45,45,0.27)] backdrop-blur-[22.79px]">
          <div className="flex flex-row items-center justify-between rounded-[33px] border border-white/15 px-[19px] py-2 md:px-9 xl:px-[68.5px] 2xl:px-[173px]">
            {/* avidion logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-[10.87px]">
              <div className="relative size-[30px] md:size-9 xl:size-[40px]">
                <Image
                  src={"/avidion-logo.png"}
                  alt="avidion-logo"
                  fill
                  priority
                />
              </div>
              <div className="animate-gradient-wave bg-[radial-gradient(78.86%_61.3%_at_59.94%_54.33%,_#6748CD_0%,_#972BC7_27.47%,_#B33691_64.66%,_#8A30AC_97.65%)] bg-[length:400%_auto] bg-clip-text font-inter text-lg font-bold -tracking-[0.6px] text-transparent md:text-xl xl:text-2xl">
                Avidion
              </div>
            </Link>

            <div className="flex flex-row items-center gap-5 xl:gap-[30px]">
              {/* desktop menu */}
              <div className="hidden gap-5 lg:flex xl:gap-[30px]">
                {navItems.map((item, index) => (
                  <>
                    <Link
                      key={index}
                      href={item.url}
                      className="relative transition-all duration-300 ease-in"
                    >
                      <span
                        className={`font-inter text-[13px] font-normal leading-[26px] -tracking-[0.001px] ${pathname === item.url || (item.url != "/" && pathname.startsWith(item.url)) ? `bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#9E3DC2_95.25%)] bg-clip-text text-transparent underline underline-offset-8` : `text-white/80 hover:font-medium hover:text-white`}`}
                      >
                        {item.name}
                      </span>
                      {(pathname === item.url ||
                        (item.url != "/" &&
                          pathname.startsWith(`${item.url}/`))) && (
                        <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)]"></span>
                      )}
                    </Link>
                  </>
                ))}
              </div>

              <div className="flex flex-row items-center gap-4 md:gap-8">
                {/* Contact Button */}
                <div
                  onClick={() => {
                    params.set("open", "true");
                    router.push(`/?${params.toString()}`, { scroll: false });
                  }}
                  className="cursor-pointer rounded-[8px] border border-[#EB88D6] bg-[rgba(0,0,0,0.16)] p-1 backdrop-blur-[94.64px] md:rounded-[12px] md:p-1.5"
                >
                  <div className="rounded-[5.51px] border-white/15 bg-[linear-gradient(90deg,_rgba(157,46,135,0.4)_0%,_rgba(84,41,153,0.4)_100%)] px-[15px] py-0.5 font-inter text-[10px] text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] transition-all duration-700 ease-in hover:bg-[linear-gradient(90deg_,rgba(201,104,182,0.40)_0%,_rgba(121,81,186,0.40)_100%)] md:rounded-[8px] md:py-1 md:text-sm">
                    Contact Us
                  </div>
                </div>

                <div
                  ref={hamburgerRef}
                  className="relative size-7 md:size-9 lg:hidden"
                >
                  <div
                    className={`${isMobileMenuOpen ? `pointer-events-none opacity-0` : `pointer-events-auto opacity-100`} absolute inset-0 transition-opacity duration-300 ease-in-out`}
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <Image
                      src={"/icons/hamburger.svg"}
                      alt="hamburger-icon"
                      fill
                      priority
                    />
                  </div>

                  <div
                    className={`${isMobileMenuOpen ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`} absolute inset-0 transition-opacity duration-300 ease-in-out`}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  >
                    <Image
                      src={"/icons/cross.svg"}
                      alt="hamburger-icon"
                      fill
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div
              ref={navbarRef}
              className="flex flex-col items-center gap-9 px-[27px] pb-[30px] pt-[50px] transition-all duration-300 ease-in-out"
            >
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative"
                  >
                    <span
                      className={`font-inter text-[13px] font-normal leading-[26px] -tracking-[0.001px] ${
                        pathname === item.url ||
                        (item.url != "/" && pathname.startsWith(item.url))
                          ? "bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#9E3DC2_95.25%)] bg-clip-text text-transparent underline underline-offset-8"
                          : "text-white/80"
                      }`}
                    >
                      {item.name}
                    </span>
                    {(pathname === item.url ||
                      (item.url != "/" && pathname.startsWith(item.url))) && (
                      <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[linear-gradient(57deg,_#C0ADFF_11.25%,_#BF5CEA_34.88%,_#DD68BD_66.68%,_#4D1263_95.25%)]"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* contact us form dialog */}
      {isSmallDevice ? (
        <>
          <Sheet
            open={isOpen}
            onOpenChange={(open) => {
              if (!open) {
                handleClose();
              }
            }}
          >
            <SheetContent
              side="bottom"
              className="h-[80vh] overflow-y-auto border border-none bg-[#141315] pb-[80px] transition-transform duration-500"
            >
              <ContactForm />

              <SheetClose asChild onClick={() => handleClose()}>
                <RxCross2 className="absolute right-4 top-4 size-4 text-white" />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </>
      ) : (
        <Dialog
          open={isOpen}
          onOpenChange={(open) => {
            if (!open) {
              handleClose();
            }
          }}
        >
          <DialogContent className="max-h-screen w-screen overflow-y-auto rounded-[4px] border border-none bg-[#141315] md:w-[95%] xl:w-[80%] 2xl:w-[60%]">
            <ContactForm />
            <DialogClose></DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
