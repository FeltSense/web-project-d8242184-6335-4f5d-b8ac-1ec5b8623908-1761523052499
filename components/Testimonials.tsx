'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "I've tried other gyms before, but Elevate is different. The trainers actually remember your name and your goals. After three months, I'm finally seeing the progress I've been working toward, and I actually look forward to my workouts now.",
      author: "Marcus Chen",
      role: "Software Engineer",
      image: "MC"
    },
    {
      id: 2,
      content: "As someone who was intimidated by fitness studios, the welcoming atmosphere here made all the difference. The small class sizes mean I get personalized attention, and the instructors are patient with modifications. I feel stronger and more confident.",
      author: "Sarah Mitchell",
      role: "High School Teacher",
      image: "SM"
    },
    {
      id: 3,
      content: "The flexibility of the class schedule works perfectly with my unpredictable work hours. I can drop in for an early morning session or catch an evening class. The variety keeps things interesting, and I've noticed real improvements in my energy levels throughout the day.",
      author: "James Rodriguez",
      role: "Restaurant Manager",
      image: "JR"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-4">
            Member Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from our fitness community
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 min-h-[320px] flex flex-col justify-between transition-all duration-500">
            {/* Quote Icon */}
            <div className="mb-8">
              <svg
                className="w-10 h-10 text-slate-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-grow mb-8">
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                {testimonials[currentIndex].content}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-sm">
                <span className="text-slate-700 font-medium text-sm">
                  {testimonials[currentIndex].image}
                </span>
              </div>
              <div>
                <div className="font-medium text-slate-900">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-slate-500">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-slate-400'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}