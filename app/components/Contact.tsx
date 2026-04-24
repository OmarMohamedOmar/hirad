export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>

      <form className="max-w-xl mx-auto mt-10 space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message" />
        <button className="w-full bg-purple-600 text-white py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
