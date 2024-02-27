import Result1 from "@/images/ResultsScreen1.png";
import Result2 from "@/images/ResultsScreen2.png";
import HatcheryLogo from "@/images/UofTHatcheryLogo.png";
import Header from "@/components/Header";
import Button from "@/components/Button";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-10 pl-64 pr-64">
      <Header />
      <div className={"pt-64 space-y-5 flex-col relative"} id={"home"}>
        <div className={"font-bold text-[2.5rem] leading-10 space-y-1"}>
          <h1>Coming soon,</h1>
          <h1>We are changing</h1>
          <h1>the healthcare industry</h1>
        </div>
        <div className={"text-lg"}>
          <h2>Ula Healthcare Systems is commited to providing</h2>
          <h2>the best services for you.</h2>
        </div>
        <div className={"flex space-x-3"}>
          <Link
            href={"https://www.linkedin.com/company/ula-healthcare-systems"}
            target={"_blank"}
          >
            <Button>Linkedin </Button>
          </Link>
          <ScrollLink to={"#about"}>
            <SecondaryButton>About us</SecondaryButton>
          </ScrollLink>
        </div>
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
      <div className={"w-full mt-64 pb-64 h-fit items-center"}>
        <hr className="w-full h-0.5 bg-gray-200 rounded-full" />
        <div className={"pt-64 flex"} id={"about"}>
          <div className={"flex-1 relative"}>
            <div className={"z-10 absolute -top-20"}>
              <div
                className={
                  "rounded-xl w-[17rem] h-[17rem] absolute flex bg-white items-center " +
                  "justify-center left-56 top-40 shadow-2xl"
                }
              >
                <Image
                  src={HatcheryLogo}
                  alt={"Hatchery"}
                  className={"w-[12rem]"}
                />
              </div>
              <div
                className={
                  "rounded-xl w-[17rem] h-[17rem] flex bg-white items-center " +
                  "justify-center shadow-2xl"
                }
              >
                <div className={"text-center text-wrap"}>
                  <div className={"align-baseline space-x-2"}>
                    <h1 className={"font-bold text-6xl inline-block"}>40</h1>
                    <div className={"w-3 h-3 bg-primary inline-block"} />
                  </div>
                  <h2 className={"text-xl"}>Days until</h2>
                  <h2 className={"text-xl"}>we launch</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={"space-y-5 w-[40rem] pl-5 pr-5"}>
            <h1 className={"font-bold text-[2rem]"}>What is our mission?</h1>
            <h2 className={"text-md text-wrap"}>
              Our mission is to address the challenges in the Ontario healthcare
              system, particularly the prolonged ER wait times and limited
              access to family physicians. Proudly affiliated with the U of T
              Hatchery, we leverage innovative solutions and academic expertise
              to drive positive change in the healthcare landscape.
            </h2>
            <div className={"flex space-x-3"}>
              <Link
                href={"https://hatchery.engineering.utoronto.ca/"}
                target={"_blank"}
              >
                <Button>Learn more</Button>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/uoftentrepreneurshiphatchery/mycompany/"
                }
                target={"_blank"}
              >
                <SecondaryButton>UofT Hatchery</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
