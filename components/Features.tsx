import { HugeiconsIcon } from "@hugeicons/react";
import { Chart03Icon , AiBrain01Icon, KnightShieldIcon} from "@hugeicons/core-free-icons";

export default function Features() {
  return (
    <section className=" py-20  bg-white  text-center ">
      <div className="max-w-7xl mx-auto lg:px-8">
        <h1 className="text-3xl font-medium lg:text-4xl  my-3">
          {" "}
          Powerful, Yet Simple
        </h1>
        <p className="my-4 text-gray-500 text-lg">
          Everything you need to understand your AI.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          <div className=" bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 text-center group max-w-sm mx-auto">
            <div className="w-16 h-16 bg-linear-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <HugeiconsIcon
                icon={Chart03Icon}
                className=" text-white p-2 w-12 h-12  rounded-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold">Smart Monitoring</h4>
            <p className="my-4 text-gray-500">
              Track your AI systems with intelligent alerts and real-time
              performance metrics.
            </p>
          </div>
          <div className=" bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 text-center group max-w-sm mx-auto">
            <div className="w-16 h-16 bg-linear-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <HugeiconsIcon
                icon={AiBrain01Icon}
                className=" text-white p-2 w-12 h-12  rounded-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold">AI Insights</h4>
            <p className="my-4 text-gray-500">
              Get deep insights into model performance with human-readable
              analytics.
            </p>
          </div>
          <div className=" bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 text-center group max-w-sm mx-auto">
            <div className="w-16 h-16 bg-linear-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <HugeiconsIcon
                icon={KnightShieldIcon}
                className=" text-white p-2 w-12 h-12  rounded-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold">Secure & Reliable</h4>
            <p className="my-4 text-gray-500">
              Enterprise-grade security with 99.9% uptime guarantee for your
              peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
