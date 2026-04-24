import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B34] text-gray-300 px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/hirad-logo.png" // make sure inside /public
              alt="Hirad logo"
              width={160}
              height={40}
              className="rounded-lg object-contain"
            />
          </div>

          <p className=" text-sm leading-relaxed text-gray-400">
            Custom software solutions for schools, restaurants, shops, and
            startups.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">All Services</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
            <li className="hover:text-white cursor-pointer">Process</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-white font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>

          <div className="mt-3 space-y-2 text-sm text-gray-400">
            <p>+252 613736287</p>
            <p>+252 618347745</p>
            <p>+252 619881881</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © 2026 Hirad. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          <div className="p-2 rounded-lg hover:bg-[#5B21B6]/20 transition cursor-pointer">
            <FaTwitter size={18} />
          </div>

          <div className="p-2 rounded-lg hover:bg-[#5B21B6]/20 transition cursor-pointer">
            <FaFacebook size={18} />
          </div>

          <div className="p-2 rounded-lg hover:bg-[#5B21B6]/20 transition cursor-pointer">
            <FaLinkedin size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
