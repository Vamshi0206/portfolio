const skills = [
  "Java", "Python", "SQL", "JavaScript", "C", "C++",
  "Spring Boot", "ReactJS", "Angular", "Node.js", "Flask",
  "PostgreSQL", "MySQL", "MongoDB", "Oracle",
  "AWS", "Docker", "Kubernetes", "Jenkins", "Kafka"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-cyan-400">Technical Skills</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 bg-gray-800 rounded-xl shadow hover:scale-105 hover:bg-cyan-500 hover:text-black transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
