import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/developer skills.json"; // Your downloaded animation

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Animation Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Lottie
                        animationData={aboutAnimation}
                        loop={true}
                        className="w-80 h-80"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                        <p>
                            I’m a passionate Full Stack Developer and a 7th-semester B.Tech CSE student at
                            Assam Kaziranga University. I specialize in building impactful digital solutions —
                            from crafting intuitive, user-friendly interfaces to designing robust and scalable
                            backend systems.
                        </p>

                        <p>
                            My technical expertise includes <strong>Java, JavaScript, React, HTML/CSS, Python, C, C++,
                                and Data Structures</strong>, with ongoing learning in <strong>Node.js, Express, and MongoDB</strong>.
                            I aim to combine creativity with functionality to deliver applications that are efficient,
                            reliable, and engaging.
                        </p>

                        <p>
                            Beyond coding, I’m a <strong>chess enthusiast, music lover, and avid reader</strong>.
                            Writing is another passion of mine, often inspiring fresh ideas and innovative approaches
                            in my projects.
                        </p>

                        <p>
                            Currently, I’m focused on enhancing my development skills, collaborating on impactful
                            projects, and contributing to solutions that make a real-world difference.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
