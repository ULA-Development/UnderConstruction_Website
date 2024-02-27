import Result1 from "@/images/ResultsScreen1.png";
import Result2 from "@/images/ResultsScreen2.png";
import Header from "@/components/Header";
import Button from "@/components/Button";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-10 pl-64 pr-64">
      <Header />
      <div className={"pt-64 space-y-5 flex-col relative"}>
        <div className={"font-bold text-[2.5rem] leading-10 space-y-1"}>
          <h1>Coming soon,</h1>
          <h1>We are changing</h1>
          <h1>the healthcare industry</h1>
        </div>
        <div className={"text-lg"}>
          <h2>Ula Healthcare Systems is commited to providing</h2>
          <h2>the best services for you.</h2>
        </div>
        <Link
          href={"https://www.linkedin.com/company/ula-healthcare-systems"}
          target={"_blank"}
          className={"flex space-x-3"}
        >
          <Button>Linkedin </Button>
          <SecondaryButton>About us</SecondaryButton>
        </Link>
        <div className={"z-10 absolute top-36 right-0"}>
          <Image
            src={Result1}
            alt={"result1"}
            className={
              "rounded-xl w-[25rem]  absolute -left-24 top-52 shadow-xl"
            }
          />
          <Image
            src={Result2}
            alt={"result2"}
            className={"rounded-xl w-[25rem] shadow-xl"}
          />
          <div
            className={
              "-z-20 w-64 h-64 blur-2xl rounded-full absolute -right-12 -bottom-44 bg-gradient-to-r from-blue-300 to-purple-200"
            }
          />
          <div
            className={
              "-z-20 w-64 h-64 blur-2xl rounded-full absolute top-10 -left-36 bg-gradient-to-r from-blue-300 to-green-200"
            }
          />
        </div>
      </div>
    </main>
  );
}
