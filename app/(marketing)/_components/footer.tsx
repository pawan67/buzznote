import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex items-center w-full p-6 bg-background z-50 ">
      <div className=" hidden md:block">
        <Logo />
      </div>

      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Link href="/privacy-policy" className=" text-sm hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-conditions" className=" text-sm hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
