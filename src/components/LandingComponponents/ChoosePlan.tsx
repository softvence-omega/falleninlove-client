import { plans } from "@/common/demodata";
import { Check } from "lucide-react";

export default function ChoosePlan() {
  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          No hidden charges!
        </h2>
        <p className="text-xl font-semibold text-gray-700 mb-14">
          choose your plan
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border border-orange-300 rounded-lg flex flex-col transition-transform duration-300
                ${
                  plan.highlight
                    ? "scale-105 lg:scale-110 z-10"
                    : "scale-100"
                }
              `}
            >
              {/* Top section */}
              <div
                className="p-8 rounded-t-lg text-white"
                style={{
                  backgroundColor: plan.highlight ? "#FF715B" : "#14B8A6",
                }}
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-base mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Bottom section */}
              <div className="p-8 flex flex-col justify-between flex-grow bg-white rounded-b-lg">
                <div>
                  <p className="text-4xl lg:text-5xl font-extrabold text-teal-600">
                    ${plan.price}
                    <span className="text-base lg:text-lg font-normal text-gray-600">
                      /Session
                    </span>
                  </p>

                  <h4 className="mt-8 mb-3 text-lg text-teal-600 font-semibold">
                    Key Features
                  </h4>
                  <ul className="text-base text-gray-700 space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 px-6 py-3 rounded-lg font-semibold transition text-lg cursor-pointer ${
                    plan.highlight
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : "border border-teal-400 text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  Purchase Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
