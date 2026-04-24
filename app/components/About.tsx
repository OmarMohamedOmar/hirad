import { Rocket, ShieldCheck, Layers, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Real-World Solutions",
      desc: "We build systems that solve real business problems and are actively used in production.",
      icon: Rocket,
    },
    {
      title: "Reliable & Scalable",
      desc: "Our systems are designed for performance, security, and long-term growth.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Built",
      desc: "Every solution is tailored to fit the unique needs of each business.",
      icon: Layers,
    },
    {
      title: "Fast Execution",
      desc: "We turn ideas into working systems quickly without compromising quality.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="px-8 py-28 bg-gray-50">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          About <span className="text-[#5B21B6]">Hirad</span>
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed text-lg">
          Hirad is a modern software development company focused on building
          powerful digital systems for businesses. From idea to deployment, we
          design solutions that improve efficiency, simplify workflows, and
          create real impact.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* PURPLE GLOW */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5B21B6]/10 to-[#AB55F7]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F3FF] group-hover:bg-[#5B21B6] transition">
                  <Icon className="text-[#5B21B6] group-hover:text-white" />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* EXTRA TRUST SECTION */}
      <div className="mt-20 text-center">
        <div className="inline-block px-6 py-4 rounded-2xl bg-white shadow-md border border-gray-100">
          <p className="text-gray-700">
            Trusted by real users • Built with modern technologies • Focused on
            results
          </p>
        </div>
      </div>
    </section>
  );
}
