import { HugeiconsIcon } from "@hugeicons/react";
import { Chart03Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#" },
    { name: "Pricing", path: "#" },
    { name: "Contact", path: "#" },
  ];
  return (
    <header className="fixed p-5  flex  items-center   justify-between  w-full   border-b border-gray-200  shadow-sm">
      <div className="flex items-center gap-2  ml-4   lg:ml-20">
        <HugeiconsIcon
          icon={Chart03Icon}
          className=" bg-linear-to-r from-primary to-accent text-white p-2 w-10 h-10  rounded-2xl"
        />
        <h1 className=" font-medium   md:text-2xl">Automussh Insight</h1>
      </div>

      <nav>
        <ul className="hidden md:hidden lg:flex  space-x-16">
          {navLinks.map((navLinks) => (
            <li key={navLinks.name}>
              <Link
                href={navLinks.path}
                className={`text-gray-500 hover:text-accent ${
                  navLinks.name === "Home"
                    ? "text-neutral-950 font-semibold"
                    : ""
                }`}
              >
                {navLinks.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="#"
        className="bg-linear-to-r from-primary to-accent  text-white  px-5 py-2 mr-4 lg:mr-20  rounded-2xl  transform transition-transform duration-400 hover:-translate-y-1 hover:shadow-md"
      >
        Get Started
      </Link>
    </header>
  );
}
