const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      {/* Title with badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-full mb-6">
        <div />
        UI/UX & Product Designer
      </div>

      {/* Name */}
      <h1 className="font-inter text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-black text-transparent bg-clip-text mb-6 leading-tight">
        Venkatesh Kesanakurthi
      </h1>

      {/* Tagline */}
      <p className="font-instrument italic text-4xl md:text-3xl font-light text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        Designing{" "}
        <span className="font-inter font-bold text-black">with humans</span>{" "}
        <span className="font-inter font-bold text-black">at the </span>
        <span className="font-instrument italic text-black">centre.</span>
      </p>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
        Inclusive user-centric design for enterprise healthcare applications
        through <span className="font-medium">user research</span>,{" "}
        <span className="font-medium">accessibility</span>, and{" "}
        <span className="font-medium">end-to-end solutions</span>.
      </p>

      {/* CTA Button */}
      <a
        href="mailto:iamvenkateshkvs@gmail.com"
        className="inline-flex items-center gap-3 bg-black text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
      >
        Available for Full-time
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
