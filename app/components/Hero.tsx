export default function Hero() {
  return (
    <section className="px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          We Build Smart Systems{" "}
          <span className="text-purple-600">for Your Business</span>
        </h1>

        <p className="mt-6 text-gray-600">
          Custom software for schools, restaurants, shops, and startups.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
