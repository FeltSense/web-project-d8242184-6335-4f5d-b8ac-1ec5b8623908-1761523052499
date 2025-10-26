'use client'

import React from 'react';

export default function Navigation() {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const services = [
    {
      category: "Training",
      items: [
        { name: "Personal Training", description: "One-on-one coaching" },
        { name: "Group Classes", description: "Community workouts" },
        { name: "Virtual Sessions", description: "Train from anywhere" }
      ]
    },
    {
      category: "Wellness",
      items: [
        { name: "Nutrition Coaching", description: "Personalized meal plans" },
        { name: "Recovery & Mobility", description: "Stretch and restore" },
        { name: "Wellness Assessments", description: "Track your progress" }
      ]
    }
  ];

  const pricing = [
    { name: "Monthly Membership", price: "$89/mo" },
    { name: "Annual Membership", price: "$799/yr" },
    { name: "Class Packages", price: "From $120" },
    { name: "Personal Training", price: "Custom rates" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-slate-900 tracking-tight">
              Elevate Fitness Studio
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden animate-fadeIn">
                  <div className="grid grid-cols-2 gap-8 p-8">
                    {services.map((section) => (
                      <div key={section.category}>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          {section.category}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item) => (
                            <a
                              key={item.name}
                              href="#"
                              className="block p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                            >
                              <div className="text-sm font-medium text-slate-900 group-hover:text-slate-900 mb-1">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                {item.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('pricing')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 flex items-center gap-1">
                Pricing
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'pricing' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeMenu === 'pricing' && (
                <div className="absolute top-full right-0 mt-2 w-[320px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden animate-fadeIn">
                  <div className="p-6">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Membership Options
                    </h3>
                    <div className="space-y-2">
                      {pricing.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                        >
                          <span className="text-sm font-medium text-slate-900">
                            {item.name}
                          </span>
                          <span className="text-sm text-slate-600 group-hover:text-slate-900">
                            {item.price}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Sign In
            </a>
            <a
              href="/start"
              className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-200 shadow-sm"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-6 space-y-4">
            <a href="/" className="block text-base font-medium text-slate-900 hover:text-slate-600 transition-colors duration-200">
              Home
            </a>
            
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Services</div>
              {services.flatMap(section => section.items).map((item) => (
                <a key={item.name} href="#" className="block pl-4 text-sm text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pricing</div>
              {pricing.map((item) => (
                <a key={item.name} href="#" className="block pl-4 text-sm text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  {item.name}
                </a>
              ))}
            </div>

            <a href="/contact" className="block text-base font-medium text-slate-900 hover:text-slate-600 transition-colors duration-200">
              Contact
            </a>

            <div className="pt-4 space-y-3 border-t border-slate-200">
              <a href="/login" className="block w-full px-4 py-2.5 text-center text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-200">
                Sign In
              </a>
              <a href="/start" className="block w-full px-4 py-2.5 text-center text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}