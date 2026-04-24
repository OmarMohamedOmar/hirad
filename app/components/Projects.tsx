export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 shadow rounded-xl">
          <h3 className="font-bold">Xajsi Voting System</h3>
          <p className="text-sm mt-2">
            Built in our first-year hackathon. Now used by university students
            for real elections.
          </p>
        </div>

        <div className="p-6 shadow rounded-xl">
          <h3 className="font-bold">School Management System</h3>
          <p className="text-sm mt-2">
            Platform for managing students, attendance, and payments.
          </p>
        </div>

        <div className="p-6 shadow rounded-xl">
          <h3 className="font-bold">Business System</h3>
          <p className="text-sm mt-2">
            Custom solution built for real business operations.
          </p>
        </div>
      </div>
    </section>
  );
}
