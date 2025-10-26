import { HugeiconsIcon } from "@hugeicons/react";
import{UserGroupIcon, Robot01Icon, Clock01Icon, Target01Icon} from "@hugeicons/core-free-icons";


export default function DashboardPreview() {
  return (
    <section className="py-20 bg-linear-to-br from-back to-blue-50">
      <div className="max-w-7xl mx-auto lg:px-8">
        <h1 className="text-center text-3xl  font-medium  lg:text-4xl">
          A Glimpse of Your Insights
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-4">
        {/* Card 1 - Green theme */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <HugeiconsIcon
                icon={UserGroupIcon}
                className="text-green-600 p-2 w-12 h-12 rounded-2xl"
              />
            </div>
            <span className="text-green-600 text-sm font-medium">+12%</span>
          </div>
          <h3 className="text-2xl font-bold text-textPrimary mb-1 text-left">
            2,340
          </h3>
          <p className="text-gray-500 text-sm text-left">Active Users</p>
        </div>

        {/* Card 2 - Blue theme */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <HugeiconsIcon
                icon={Robot01Icon}
                className="text-blue-600 p-2 w-12 h-12 rounded-2xl"
              />
            </div>
            <span className="text-blue-600 text-sm font-medium">+8%</span>
          </div>
          <h3 className="text-2xl font-bold text-textPrimary mb-1 text-left">
            124k
          </h3>
          <p className="text-gray-500 text-sm text-left">AI Requests</p>
        </div>

        {/* Card 3 - Purple theme */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
              <HugeiconsIcon
                icon={Clock01Icon}
                className="text-purple-600 p-2 w-12 h-12 rounded-2xl"
              />
            </div>
            <span className="text-purple-600 text-sm font-medium">99.97%</span>
          </div>
          <h3 className="text-2xl font-bold text-textPrimary mb-1 text-left">
            99.97%
          </h3>
          <p className="text-gray-500 text-sm text-left">Uptime</p>
        </div>

        {/* Card 4 - Orange theme */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
              <HugeiconsIcon
                icon={Target01Icon}
                className="text-orange-600 p-2 w-12 h-12 rounded-2xl"
              />
            </div>
            <span className="text-orange-600 text-sm font-medium">+5%</span>
          </div>
          <h3 className="text-2xl font-bold text-textPrimary mb-1 text-left">
            92.4%
          </h3>
          <p className="text-gray-500 text-sm text-left">Model Accuracy</p>
        </div>
      </div>
    </section>
  );
}
