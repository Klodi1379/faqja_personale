// Define types for our data
type ExperienceItem = {
  id: number;
  title: string;
  company?: string;
  institution?: string;
  degree?: string;
  location: string;
  period: string;
  responsibilities?: string[];
  details?: string[];
};

// Sample experience data - replace with your own experience
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    responsibilities: [
      "Lead the development of the company's flagship web application using React and TypeScript",
      "Implemented responsive designs and improved website performance by 40%",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "Remote",
    period: "Mar 2020 - Dec 2021",
    responsibilities: [
      "Developed and maintained multiple client websites using React, Node.js, and MongoDB",
      "Created RESTful APIs and integrated third-party services",
      "Implemented authentication systems and security measures",
      "Participated in agile development processes and sprint planning",
    ],
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "StartUp Hub",
    location: "Boston, MA",
    period: "Jun 2019 - Feb 2020",
    responsibilities: [
      "Assisted in the development of web applications using JavaScript and PHP",
      "Designed and implemented responsive UI components",
      "Participated in code reviews and team meetings",
      "Learned industry best practices and improved coding skills",
    ],
  },
];

// Sample education data - replace with your own education
const educationData: ExperienceItem[] = [
  {
    id: 1,
    title: "Master of Science in Computer Science",
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    period: "2017 - 2019",
    details: [
      "Specialized in Web Technologies and Software Engineering",
      "GPA: 3.8/4.0",
      "Relevant coursework: Advanced Algorithms, Web Development, Database Systems, Cloud Computing",
    ],
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science",
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    location: "Boston, MA",
    period: "2013 - 2017",
    details: [
      "Minor in Mathematics",
      "GPA: 3.7/4.0",
      "Relevant coursework: Data Structures, Object-Oriented Programming, Web Development Fundamentals",
    ],
  },
];

const ExperienceItem = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-primary before:rounded-full before:z-10 after:content-[''] after:absolute after:left-2 after:top-2 after:h-full after:w-0.5 after:bg-gray-200 dark:after:bg-gray-700 last:after:hidden">
      <div className="bg-white dark:bg-dark/80 p-5 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <div className="flex flex-wrap justify-between items-center mb-2">
          <p className="text-primary font-medium">{item.company || item.institution}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{item.period}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.location}</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          {(() => {
            const points = item.responsibilities || item.details || [];
            return points.map((point, index) => (
              <li key={index}>{point}</li>
            ));
          })()}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-dark">
      <div className="container mx-auto p-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          My professional journey and educational background.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Work Experience</h3>
            <div className="mt-8">
              {experienceData.map((exp) => (
                <ExperienceItem key={exp.id} item={exp} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            <div className="mt-8">
              {educationData.map((edu) => (
                <ExperienceItem key={edu.id} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
