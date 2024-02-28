import Logo from "@/svgs/plus-circle-solid.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import ScrollLink from "@/components/ScrollLink";
export default function Header() {
  return (
    <div
      className={
        "lg:max-w-6xl w-full items-center justify-between flex text-tBlack "
      }
    >
      <button
        className={"flex items-center hover:scale-95 transform duration-100"}
      >
        <Image src={Logo} alt={"Logo"} className="w-8 h-8" />
        <text className={"font-semibold text-3xl pl-2"}>Ula Healthcare </text>
      </button>

      <div className={"flex space-x-6 items-center text-xl text-tBlack"}>
        <ScrollLink to={"#home"}>
          <button className={"hover:text-primary"}>Home</button>
        </ScrollLink>
        <ScrollLink to={"#about"}>
          <button className={"hover:text-primary"}>About</button>
        </ScrollLink>
        <Link
          href={"https://www.linkedin.com/company/ula-healthcare-systems"}
          target={"_blank"}
          className={"hidden md:hidden lg:block"}
        >
          <Button>Connect</Button>
        </Link>
      </div>
    </div>
  );
}
