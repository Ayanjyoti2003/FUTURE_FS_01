import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.png";

const projects = [
    { id: 1, title: "E-commerce Website", image: project1, link: "#" },
    { id: 2, title: "Portfolio Website", image: project2, link: "#" },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map(proj => (
                        <div
                            key={proj.id}
                            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                                <a
                                    href={proj.link}
                                    className="text-teal-400 hover:underline"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
