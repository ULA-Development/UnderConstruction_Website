import Logo from "@/svgs/plus-circle-solid.svg";
import Image from "next/image";
import Button from "@/components/Button";
export default function Header() {
  return (
    <div
      className={
        "max-w-6xl w-full items-center justify-between text-xl lg:flex text-tBlack "
      }
    >
      <button
        className={"flex items-center hover:scale-95 transform duration-100"}
      >
        <Image src={Logo} alt={"Logo"} className="w-8 h-8" />
        <text className={"font-semibold text-3xl pl-2"}>Healthcare</text>
      </button>
      <div className={"flex space-x-5 items-center text-tBlack"}>
        <button className={"hover:text-primary"}>Home</button>
        <button className={"hover:text-primary"}>About</button>
        <Button>Connect</Button>
      </div>
    </div>
  );
}
