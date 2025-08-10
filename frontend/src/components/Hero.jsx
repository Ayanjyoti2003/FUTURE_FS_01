import profile from "../assets/Ayan.jpg";
import Resume from "../assets/Resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative bg-[#1A1A1A] text-[#EEEEEE] min-h-screen flex items-center">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={profile}
                    alt="Ayanjyoti Bora"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center mt-16">
                {/* Left Column */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-[#00ADB5]">Ayanjyoti Bora</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Full-Stack Developer | AI Enthusiast | Hackathon Builder
                    </p>
                    <p className="mt-4 text-lg text-gray-300">
                        Passionate developer crafting beautiful and functional web
                        experiences.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <a
                            href="#projects"
                            className="bg-[#00ADB5] hover:bg-[#08D9D6] text-[#1A1A1A] px-6 py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href={Resume}
                            download
                            className="bg-transparent border-2 border-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#1A1A1A] px-6 py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-6 flex gap-6 text-2xl">
                        <a
                            href="https://linkedin.com/in/yourlinkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00ADB5] transition duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/yourgithub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00ADB5] transition duration-300"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="hidden md:flex justify-center">
                    <img
                        src={profile}
                        alt="Ayanjyoti Bora"
                        className="rounded-2xl shadow-lg max-w-md border-4 border-[#EEEEEE]/20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
