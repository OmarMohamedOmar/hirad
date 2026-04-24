import { services } from "../data/services";
export default function Services() {
  return (
    <section id="services" className="px-8 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              key={i}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6]/10 to-[#AB55F7]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F3FF] group-hover:bg-[#5B21B6] transition">
                  <Icon className="text-[#5B21B6] group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
