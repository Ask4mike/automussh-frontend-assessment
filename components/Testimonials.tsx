import Image from "next/image";
import Avatar_1 from "@/public/avatar-1.jpg";
import Avatar_2 from "@/public/avatar-2.jpg";
import Avatar_5 from "@/public/avatar-5.jpg";

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto lg:px-8">
        <h1 className="text-center text-3xl  font-medium  lg:text-4xl">
          Built by People, for People
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  my-16">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <Image
                src={Avatar_1}
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-textPrimary">
                  Sarah Chen
                </h4>
                <p className="text-textSecondary text-sm">
                  AI Engineer at TechCorp
                </p>
              </div>
            </div>
            <p className="text-textSecondary leading-relaxed italic">
              &lduo;Automussh Insight transformed how we monitor our AI systems.
              The insights are incredibly valuable and easy to
              understand.&rdquo;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <Image
                src={Avatar_2}
                alt="Marcus Rodriguez"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-textPrimary">
                  Marcus Rodriguez
                </h4>
                <p className="text-textSecondary text-sm">CTO at DataFlow</p>
              </div>
            </div>
            <p className="text-textSecondary leading-relaxed italic">
              &ldquo;The real-time monitoring capabilities are outstanding. We
              can now proactively address issues before they impact our
              users.&rdquo;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <Image
                src={Avatar_5}
                alt="Emma Thompson"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-textPrimary">
                  Emma Thompson
                </h4>
                <p className="text-textSecondary text-sm">
                  Product Manager at InnovateLab
                </p>
              </div>
            </div>
            <p className="text-textSecondary leading-relaxed italic">
              &ldquo;Finally, an AI monitoring tool that speaks human language.
              Our entire team can now understand our AI performance
              metrics.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
