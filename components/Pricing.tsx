export default function Pricing() {
  const plans = [
    {
      name: "Drop-In",
      price: "25",
      period: "per class",
      description: "Perfect for trying us out or occasional visits",
      features: [
        "Access to any single class",
        "All equipment included",
        "Shower and locker facilities",
        "Valid for 30 days from purchase",
      ],
      cta: "Buy Drop-In",
      popular: false,
    },
    {
      name: "Unlimited",
      price: "149",
      period: "per month",
      description: "Our most popular choice for committed members",
      features: [
        "Unlimited class access (40+ weekly)",
        "Priority class booking",
        "Free guest pass each month",
        "Complimentary fitness assessment",
        "10% off retail and workshops",
        "Cancel anytime, no commitment",
      ],
      cta: "Start Unlimited",
      popular: true,
    },
    {
      name: "Premium",
      price: "249",
      period: "per month",
      description: "Complete fitness experience with personal guidance",
      features: [
        "Everything in Unlimited",
        "4 personal training sessions/month",
        "Customized workout programming",
        "Monthly body composition analysis",
        "Nutrition consultation included",
        "Exclusive member events access",
        "Bring unlimited guests",
      ],
      cta: "Go Premium",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Flexible Membership Plans
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your lifestyle. No long-term contracts, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "shadow-xl ring-2 ring-slate-900 scale-105"
                  : "shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 px-6 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            All memberships include access to shower facilities, lockers, and equipment.
          </p>
          <p className="text-sm text-slate-500">
            First class is free for new members. No credit card required to try.
          </p>
        </div>
      </div>
    </section>
  );
}