import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Gradient divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">ServiceBook</span>.
            All rights reserved.
          </p>

          {/* Right - Socials */}
          <div className="flex gap-5 text-gray-600">
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Github"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
