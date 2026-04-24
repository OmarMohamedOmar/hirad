import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24 bg-white">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
        <p className="mt-4 text-gray-600">
          Real systems we have built and deployed for real-world use.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {projects.map((project, i) => (
          <div key={i} className="group relative">
            {/* 🔥 PURPLE GLOW BACKGROUND (gadaal) */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#5B21B6]/20 to-[#AB55F7]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

            {/* CARD */}
            <div className="relative bg-purple-50 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition duration-500">
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* INTERACTIVE ELEMENT (no link) */}
                <div className="mt-5 flex items-center gap-2 text-[#5B21B6] font-medium">
                  <span className="w-2 h-2 bg-[#5B21B6] rounded-full group-hover:scale-125 transition"></span>

                  <span className="group-hover:tracking-wide transition-all duration-300">
                    Real Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
