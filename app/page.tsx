import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/public/hero-img.png";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <section className=" py-15  bg-linear-to-br  from-background to-blue-50">
        <div className="grid lg:grid-cols-2">
          <div className=" mx-15  lg:px-15  lg:py-25 ">
            <h1 className=" my-4  text-4xl font-bold  leading-tight  lg:text-6xl">
              Automussh{" "}
              <span className="bg-linear-to-r  from-primary to-accent bg-clip-text  text-transparent">
                Insight
              </span>
            </h1>
            <p className=" my-5 text-[1.11rem] text-gray-700 lg:text-xl">
              Your AI dashboard for real-time performance monitoring and
              human-centred insights.
            </p>
            <div className="flex flex-col   lg:flex-row  gap-5  lg:gap-0">
              <Link
                href="#"
                className=" bg-linear-to-r from-primary to-accent  text-white   text-center px-5 py-4 mr-4   rounded-2xl  transform transition-transform duration-400 hover:-translate-y-1 hover:shadow-md  "
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="   text-primary  px-6 py-4 mr-4   rounded-2xl  text-center  border-3 hover:bg-primary hover:text-white transiton-all duration-400"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-sm mx-auto my-12">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={Hero}
                alt="Hero Image"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Animated Ball outside corner */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-75"></div>
          </div>
        </div>
      </section>
      <Features/>
    </>
  );
}
