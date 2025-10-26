export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Subtle accent line */}
        <div className="mx-auto mb-8 h-1 w-16 bg-gradient-to-r from-slate-300 to-slate-200 rounded-full"></div>
        
        {/* Main heading */}
        <h1 className="text-center text-4xl sm:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Elevate Fitness Studio
          <span className="block mt-3 text-3xl sm:text-4xl font-normal text-slate-700">
            Strength, Yoga, HIIT & Cycling Classes
          </span>
        </h1>

        {/* Value proposition */}
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600 mb-12">
          40+ weekly sessions led by certified trainers specializing in functional movement, 
          vinyasa flow, metabolic conditioning, and indoor cycling. Drop in anytime—no contracts required.
        </p>

        {/* Key features - minimal list */}
        <div className="mx-auto max-w-xl mb-12">
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-base">Morning, lunch, and evening sessions 7 days a week</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-base">Trainers certified in ACE, NASM, RYT-200, and Spinning®</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-base">Month-to-month memberships or class packs—cancel anytime</span>
            </li>
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#schedule"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-base font-medium rounded-lg shadow-sm hover:bg-slate-800 transition-all duration-200 hover:shadow-md text-center"
          >
            View Class Schedule
          </a>
          <a
            href="#trial"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 text-base font-medium rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 text-center"
          >
            Book Free Trial Class
          </a>
        </div>

        {/* Subtle bottom note */}
        <p className="mt-10 text-center text-sm text-slate-500">
          First class free for new members · Equipment provided
        </p>
      </div>
    </section>
  );
}