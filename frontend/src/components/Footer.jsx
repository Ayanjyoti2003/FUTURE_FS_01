import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm mb-4 md:mb-0 text-gray-400">
                    © {new Date().getFullYear()} Ayanjyoti Bora. All rights reserved.
                </p>
                <div className="flex space-x-4 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/ayanjyoti-bora/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Ayanjyoti2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition-colors"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
