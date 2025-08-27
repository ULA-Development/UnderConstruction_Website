import Result1 from "@/images/ResultsScreen1.png";
import Result2 from "@/images/ResultsScreen2.png";
import HatcheryLogo from "@/images/UofTHatcheryLogo.png";
import EthanHeadshot from "@/images/cofounder-headshots/ethan.jpg";
import ArmitiHeadshot from "@/images/cofounder-headshots/armiti.jpg";
import AliHeadshot from "@/images/cofounder-headshots/ali.jpg";
import SpencerHeadshot from "@/images/cofounder-headshots/spencer.jpg";
import Header from "@/components/Header";
import Button from "@/components/Button";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";
import MovingDiv from "@/components/MovingDiv";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col pl-2 pr-2 pt-10 md:pl-10 md:pr-10">
      <Header />
      {/*Home page*/}
      <div
        className={
          "lg:pt-64 pt-40 lg:max-w-6xl w-full lg:w-full flex flex-col lg:flex-row"
        }
        id={"home"}
      >
        {/*Info section*/}
        <div
          className={
            "flex-col flex-1 text-center sm:text-left space-y-3 justify-center flex"
          }
        >
          <div
            className={"font-bold text-[2.5rem] leading-10 space-y-1 text-wrap"}
          >
            <h1>Coming soon,</h1>
            <h1 className={"text-wrap"}>
              We are changing the healthcare industry
            </h1>
          </div>
          <h2 className={"text-lg text-wrap"}>
            Ula Healthcare Systems is committed to providing the best services
            for you.
          </h2>
          <div className={"justify-center sm:justify-start flex space-x-3"}>
            <Link
              href={"https://www.linkedin.com/company/ula-healthcare-systems"}
              target={"_blank"}
            >
              <Button>Linkedin </Button>
            </Link>
            <ScrollLink to={"#about"}>
              <SecondaryButton>About</SecondaryButton>
            </ScrollLink>
          </div>
        </div>
        {/*Bubble section*/}
        <div
          className={
            "relative mt-40 lg:mt-0 h-80 lg:w-[40rem] m-w-full w-full overflow-x-clip"
          }
        >
          <div
            className={
              "flex w-full h-full absolute items-center justify-center"
            }
          >
            <div
              className={
                "left-1/2 top-1/2 w-4/12 h-full bg-gradient-to-t from-blue-300 to-purple-200 blur-2xl"
              }
            />
            <div
              className={
                "left-1/2 top-1/2 w-4/12 h-full bg-gradient-to-b from-blue-300 to-green-200 blur-2xl"
              }
            />
          </div>
          <MovingDiv leftToRight={true}>
            <Image
              src={Result2}
              alt={"result1"}
              className={
                "rounded-xl w-[20rem] sm:w-[25rem] absolute top-32 right-1 md:right-1/3 lg:right-1/4 shadow-xl"
              }
            />
          </MovingDiv>
          <MovingDiv leftToRight={false}>
            <Image
              src={Result1}
              alt={"result2"}
              className={
                "rounded-xl w-[20rem] sm:w-[25rem] h-auto absolute left-1 md:left-1/3 lg:left-1/4 -top-20 shadow-xl"
              }
            />
          </MovingDiv>
        </div>
      </div>

      {/*About page*/}
      <div
        className={
          "pt-64 lg:pb-0 pb-24 lg:w-full flex flex-col items-center text-center sm:text-left"
        }
      >
        <hr className="w-full max-w-6xl h-0.5 bg-gray-200 rounded-full" />
        <div
          className={"lg:pt-64 lg:max-w-6xl w-full flex flex-col lg:flex-row"}
          id={"about"}
        >
          {/*Floating section*/}
          <div
            className={
              "relative hidden lg:block mt-40 mb-20 lg:mt-0 lg:mb-0 h-80 lg:w-[35rem] w-full"
            }
          >
            <MovingDiv leftToRight={true}>
              <div
                className={
                  "rounded-xl w-[17rem] h-[17rem] absolute left-1/2 top-24 flex bg-white items-center " +
                  "justify-center shadow-2xl"
                }
              >
                <Image
                  src={HatcheryLogo}
                  alt={"Hatchery"}
                  className={"w-[12rem]"}
                />
              </div>
            </MovingDiv>
            <MovingDiv leftToRight={false}>
              <div
                className={
                  "rounded-xl w-[17rem] h-[17rem] absolute right-1/2 -top-24 flex bg-white items-center " +
                  "justify-center shadow-2xl"
                }
              >
                <div className={"text-center text-wrap"}>
                  <div className={"align-baseline space-x-2"}>
                    <h1 className={"font-bold text-6xl inline-block"}>3</h1>
                    <div className={"w-3 h-3 bg-primary inline-block"} />
                  </div>
                  <h2 className={"text-xl"}>Months until</h2>
                  <h2 className={"text-xl"}>we launch</h2>
                </div>
              </div>
            </MovingDiv>
          </div>
          {/*Info section*/}
          <div
            className={
              "mt-32 lg:mt-0 space-y-5 w-full flex-col flex flex-1 pl-5 pr-5"
            }
          >
            <h1 className={"font-bold text-[2rem] "}>What is our mission?</h1>
            <h2 className={"text-md text-wrap"}>
              Our mission is to address the challenges in the Ontario healthcare
              system, particularly the prolonged ER wait times and limited
              access to family physicians. Proudly affiliated with the U of T
              Hatchery, we leverage innovative solutions and academic expertise
              to drive positive change in the healthcare landscape.
            </h2>
            <div className={"justify-center sm:justify-start flex space-x-3"}>
              <Link
                href={"https://hatchery.engineering.utoronto.ca/"}
                target={"_blank"}
              >
                <Button>Learn more</Button>
              </Link>
            </div>
          </div>
          <div className={"lg:hidden "}>
            <div
              className={
                "rounded-xl w-full h-[12rem] mt-12 flex bg-white items-center " +
                "justify-center shadow-lg"
              }
            >
              <div className={"text-center text-wrap"}>
                <div className={"align-baseline space-x-2"}>
                  <h1 className={"font-bold text-6xl inline-block"}>3</h1>
                  <div className={"w-3 h-3 bg-primary inline-block"} />
                </div>
                <h2 className={"text-xl"}>Months until</h2>
                <h2 className={"text-xl"}>we launch</h2>
              </div>
            </div>
            <div
              className={
                "rounded-xl w-full h-[12rem] mt-5 flex bg-white items-center " +
                "justify-center shadow-lg"
              }
            >
              <Image
                src={HatcheryLogo}
                alt={"Hatchery"}
                className={"w-[12rem]"}
              />
            </div>
          </div>
        </div>
      </div>

      {/*Cofounders page*/}
      <div
        className={
          "pt-64 lg:pb-64 pb-24 lg:w-full flex flex-col items-center text-center"
        }
      >
        <hr className="w-full max-w-6xl h-0.5 bg-gray-200 rounded-full" />
        <div
          className={"lg:pt-32 lg:max-w-6xl w-full flex flex-col items-center"}
          id={"cofounders"}
        >
          <div className={"space-y-8 w-full"}>
            <div className={"text-center space-y-4"}>
              <h1 className={"font-bold text-[2rem]"}>Meet Our Cofounders</h1>
              <h2 className={"text-md text-wrap max-w-2xl mx-auto"}>
                Our team brings together diverse expertise in healthcare, technology, and business to revolutionize the Ontario healthcare system.
              </h2>
            </div>
            
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"}>
              {/* Cofounder 1 */}
              <div className={"bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                <div className={"w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden"}>
                  <Image
                    src={EthanHeadshot}
                    alt="Ethan McFarland"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={"font-bold text-xl mb-2"}>Ethan McFarland</h3>
                <p className={"text-gray-600 mb-4"}>Software and Cybersecurity Operations</p>
                <p className={"text-sm text-gray-500"}>
                  Software engineer with industry experience at Scotiabank and Tangerine, specializing in secure systems.
                </p>
              </div>

              {/* Cofounder 2 */}
              <div className={"bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                <div className={"w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden"}>
                  <Image
                    src={ArmitiHeadshot}
                    alt="Armiti Zarbakhsh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={"font-bold text-xl mb-2"}>Armiti Zarbakhsh</h3>
                <p className={"text-gray-600 mb-4"}>Outreach and Healthcare Operations</p>
                <p className={"text-sm text-gray-500"}>
                  Leverages healthcare experience at SickKids and UHN to strengthen clinical outreach.
                </p>
              </div>

              {/* Cofounder 3 */}
              <div className={"bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                <div className={"w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden"}>
                  <Image
                    src={AliHeadshot}
                    alt="Ali Shabani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={"font-bold text-xl mb-2"}>Ali Shabani</h3>
                <p className={"text-gray-600 mb-4"}>Technology and Machine Learning Operations</p>
                <p className={"text-sm text-gray-500"}>
                  AI researcher with Radical AI, advancing machine learning applications in healthcare.
                </p>
              </div>

              {/* Cofounder 4 */}
              <div className={"bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                <div className={"w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden"}>
                  <Image
                    src={SpencerHeadshot}
                    alt="Spencer Chang"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={"font-bold text-xl mb-2"}>Spencer Chang</h3>
                <p className={"text-gray-600 mb-4"}>Expansion and Business Operations</p>
                <p className={"text-sm text-gray-500"}>
                  Brings experience from CI Financial and Magna, focusing on business strategy and expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed Back to Top Button */}
      <div className={"fixed bottom-8 right-8 z-50"}>
        <ScrollLink to={"#home"}>
          <SecondaryButton>Back to Top</SecondaryButton>
        </ScrollLink>
      </div>
    </main>
  );
}
