import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT */}
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          We Build Smart Systems{" "}
          <span className="text-[#5B21B6]">for Your Business</span>
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed text-lg max-w-xl">
          Custom software solutions designed for schools, restaurants, shops,
          and startups.
        </p>

        <div className="mt-8 flex gap-4">
          {/* VIEW PROJECTS → FILLED → OUTLINE ON HOVER */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl 
    bg-[#5B21B6] text-white font-medium 
    border border-[#5B21B6]
    transition-all duration-300 
    hover:bg-transparent hover:text-[#5B21B6] hover:-translate-y-0.5"
          >
            View Projects
          </a>

          {/* CONTACT → OUTLINE → FILLED ON HOVER */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl 
    border border-[#5B21B6] text-[#5B21B6] font-medium 
    transition-all duration-300 
    hover:bg-[#5B21B6] hover:text-white hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative">
        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5B21B6]/20 to-[#AB55F7]/20 blur-3xl rounded-3xl"></div>

        {/* IMAGE CARD */}
        <div className="relative bg-purple-100 rounded-3xl shadow-2xl p-4">
          <Image
            src="/hero-img.jpg"
            alt="dashboard preview"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* FLOATING CARD */}
        <div className="absolute -bottom-8 -left-6 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4 border border-gray-100">
          {/* ICON */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F3FF]">
            <CheckCircle className="text-[#5B21B6]" size={22} />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-sm text-gray-500">Projects Delivered</p>
            <h3 className="text-xl font-bold text-gray-900">2+</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
