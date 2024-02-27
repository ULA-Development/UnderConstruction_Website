import Logo from "@/svgs/plus-circle-solid.svg";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div
      className={
        "w-full items-center justify-between text-xl lg:flex text-tBlack "
      }
    >
      <button
        className={"flex items-center hover:scale-95 transform duration-100"}
      >
        <Image src={Logo} alt={"Logo"} className="w-8 h-8" />
        <text className={"font-semibold text-3xl pl-2"}>Ula Healthcare </text>
      </button>

      <div className={"flex space-x-6 items-center text-tBlack f"}>
        <button className={"hover:text-primary"}>Home</button>
        <button className={"hover:text-primary"}>About</button>
        <Link
          href={"https://www.linkedin.com/company/ula-healthcare-systems"}
          target={"_blank"}
        >
          <Button>Connect</Button>
        </Link>
      </div>
    </div>
  );
}
