const experiences = [
  {
    company: "Accenture",
    role: "Software Engineer",
    period: "Dec 2021 - Dec 2022 | Hyderabad, India",
    details: [
      "Developed secure RESTful APIs for a credit card management system handling 10,000+ transactions/day.",
      "Optimized queries in PostgreSQL reducing latency by 40%.",
      "Deployed microservices with Docker & Kubernetes ensuring 99.9% availability.",
      "Reduced response time by 30% with caching & Kafka integration.",
    ],
  },
  {
    company: "Infosys",
    role: "System Engineer",
    period: "Jan 2021 - Nov 2021 | Hyderabad, India",
    details: [
      "Designed Account Service using Spring Boot REST APIs reducing response time by 25%.",
      "Optimized MySQL queries improving retrieval by 20%.",
      "Built responsive UI using HTML, CSS, JavaScript.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 text-center">Work Experience</h2>
      <div className="mt-8 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-cyan-300">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.period}</p>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
