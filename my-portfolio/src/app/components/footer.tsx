// components/Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-gray-400 border-t border-gray-800 px-6 py-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 ">
      
      {/* Left: Connect Heading + Email */}
      <div className="flex flex-col items-center sm:items-start space-y-2 ml-10">
        <h3 className="text-white text-lg font-bold">Connect :</h3>
        <a
          href="shreyagupta0408@gmail.com"
          className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <MdEmail className="text-white" size={20} />
          <span className="text-green-400 font-semibold">shreyagupta0408@gmail.com</span>
        </a>
      </div>

      {/* Right: GitHub + LinkedIn */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/shreya-gupta-04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shreya-gupta-04sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}