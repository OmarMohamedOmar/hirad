"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mdaybapy", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-8 py-28 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Let's Work <span className="text-[#5B21B6]">Together</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Send us a message and we’ll get back to you.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto mt-12">
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#5B21B6]/20 to-[#AB55F7]/20 blur-2xl rounded-3xl opacity-60"></div>

        {/* SUCCESS */}
        {status === "success" && (
          <div className="relative bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-[#5B21B6]">
              Message sent successfully ✅
            </h3>
            <p className="mt-2 text-gray-600">We will get back to you soon.</p>
          </div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <div className="relative bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-red-500">
              Something went wrong ❌
            </h3>
          </div>
        )}

        {/* FORM */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6"
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl border"
            />

            <button
              type="submit"
              className="w-full bg-[#5B21B6] text-white py-3 rounded-xl"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
