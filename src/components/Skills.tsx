// Sample skills data - replace with your own skills
const skillsData = {
  frontend: [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Redux", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Django", level: "Basic" },
    { name: "RESTful APIs", level: "Advanced" },
    { name: "GraphQL", level: "Basic" },
  ],
  database: [
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MySQL", level: "Basic" },
    { name: "Firebase", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Docker", level: "Basic" },
    { name: "Webpack", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
  ],
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="font-medium">{skill.name}</div>
            {skill.level && (
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {skill.level}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftSkills = ({ skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-light dark:bg-dark/90">
      <div className="container mx-auto p-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Here are the technologies and tools I work with, as well as some of my soft skills.
        </p>

        <div className="bg-light/50 dark:bg-dark/50 p-6 rounded-xl shadow-sm">
          <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
          <SkillCategory title="Backend Development" skills={skillsData.backend} />
          <SkillCategory title="Databases" skills={skillsData.database} />
          <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
          <SoftSkills skills={skillsData.softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
