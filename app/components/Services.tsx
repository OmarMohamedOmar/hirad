export default function Services() {
  const services = [
    "School Systems",
    "Business Management",
    "POS Systems",
    "Custom Web Apps",
  ];

  return (
    <section id="services" className="px-8 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {services.map((s, i) => (
          <div key={i} className="p-6 shadow rounded-xl bg-white">
            <h3 className="font-bold">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
