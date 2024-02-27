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
      <div className={"flex items-center"}>
        <Image src={Logo} alt={"Logo"} className="w-8 h-8" />
        <text className={"font-semibold text-3xl pl-2"}>Healthcare</text>
      </div>
      <div className={"flex space-x-5 items-center text-tBlack"}>
        <text>Home</text>
        <text>About</text>
        <Button>Connect</Button>
      </div>
    </div>
  );
}
