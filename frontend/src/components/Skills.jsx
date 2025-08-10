const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Node.js",
    "Express.js", "MongoDB", "Git", "GitHub", "REST APIs", "Python",
    "Responsive Design", "UI/UX Design", "Agile Methodologies", "Problem Solving",
    "Team Collaboration"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-gray-900 border border-gray-700 shadow rounded-lg text-gray-300 hover:text-teal-400 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
