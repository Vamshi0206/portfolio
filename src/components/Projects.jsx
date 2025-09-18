const projects = [
  {
    title: "Learniverse: A Tailored Learning Platform for UTA",
    date: "Dec 2023",
    description:
      "Engineered a full-stack learning platform for UTA to streamline student-educator interaction, improving accessibility and engagement.",
    tech: ["ReactJS", "Spring Boot", "UTA Cloud"],
    highlights: [
      "Designed a user-friendly UI in ReactJS.",
      "Coordinated Spring Boot APIs for backend functionality.",
      "Launched application supporting 1000+ users with session persistence."
    ],
    link: "#", // Replace with GitHub/demo link if available
  },
  {
    title: "Walmart Sales Prediction using Machine Learning",
    date: "Dec 2023",
    description:
      "Built a Random Forest model to predict sales across 45 Walmart stores, analyzing holidays, fuel prices, and weather data.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    highlights: [
      "Achieved over 85% accuracy in sales forecasting.",
      "Identified high-impact sales periods and pricing factors.",
      "Created interactive Streamlit dashboard for real-time visualization."
    ],
    link: "#",
  },
  {
    title: "Real-time Mask Detection using Deep Learning",
    date: "Jan 2023",
    description:
      "Developed a deep learning system to detect whether a person is wearing a mask in real-time video feeds.",
    tech: ["Python", "MobileNetV2", "OpenCV"],
    highlights: [
      "Trained on a custom dataset with 95% accuracy.",
      "Integrated OpenCV for live camera feed analysis.",
      "Enabled instant mask compliance detection in public spaces."
    ],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 text-center">Projects</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow hover:scale-105 hover:shadow-cyan-500/50 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-400">{proj.date}</p>
            <p className="mt-4 text-gray-300">{proj.description}</p>
            <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1">
              {proj.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-cyan-500 text-black rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 bg-cyan-500 text-black rounded-lg hover:scale-105 transition"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
