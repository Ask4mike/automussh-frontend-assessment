import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { TwitterIcon , Github01Icon, Linkedin01Icon} from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#111827]  text-white py-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Automussh Insight</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with intelligent AI monitoring and
              human-centered insights for better decision making.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <HugeiconsIcon
                  icon={TwitterIcon}
                  className="w-5 h-5 text-white"
                />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <HugeiconsIcon
                  icon={Github01Icon}
                  className="w-5 h-5 text-white"
                />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <HugeiconsIcon
                  icon={Linkedin01Icon}
                  className="w-5 h-5 text-white"
                />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Automussh Tech Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
