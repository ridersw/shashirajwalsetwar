import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const JobExperience = ({
  title,
  company,
  duration,
  responsibilities,
  logo,
}) => (
  <div className="mb-12 relative">
    <div className="absolute left-0 top-0 w-1 h-full bg-indigo-200 rounded-full"></div>
    <div className="pl-8">
      <div className="absolute left-0 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
        <Briefcase className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center mb-4">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-20 h-20 mr-4 object-contain"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
            <p className="text-lg text-gray-600">{company}</p>
            <p className="text-md text-gray-500 flex items-center mt-1">
              <Calendar className="w-4 h-4 mr-2" />
              {duration}
            </p>
          </div>
        </div>
        <ul className="space-y-2 mt-4">
          {responsibilities.map((resp, index) => (
            <li key={index} className="text-gray-700 flex items-start">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

function WorkExperience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Sikka.ai, San Jose, USA",
      duration: "Feb 2023 - Present",
      logo: "/sikka-ai-logo.png",
      responsibilities: [
        "Developed and optimized microservices-based applications, resulting in a 30% increase in analytics efficiency and improved customer experience.",
        "Implemented CI/CD pipelines using GitHub, enhancing the software delivery process.",
        "Designed and developed Web API applications using C# and Python, reducing errors by 25% and streamlining database management.",
        "Led core application revamp, focusing on troubleshooting, debugging, and performance optimization, projecting a 25% reduction in yearly system issues.",
        "Conducted regular code reviews to maintain high-quality, secure code and reinforce best practices across the development team.",
      ],
    },
    {
      title: "Software Engineer (Full Stack) Intern",
      company: "Cohere Health, Boston, USA",
      duration: "May 2022 - Aug 2022",
      logo: "/cohere-health-logo.png",
      responsibilities: [
        "Designed and developed a Rules Engine using machine learning techniques to analyze incoming data and automate case approvals or rejections, resulting in a 40% reduction in case processing time.",
        "Improved the user interface by redesigning React-based components, decreasing page loading time by 3 seconds, and enhancing overall user engagement.",
        "Optimized front-end performance through efficient coding practices and thorough testing, ensuring a consistent and responsive user experience.",
        "Automated various Python jobs using Shell Scripts, saving approximately 90 hours of manual work annually and boosting team productivity.",
      ],
    },
    {
      title: "Graduate Student Assistant, AI/Innovation Team",
      company: "California State University, East Bay",
      duration: "Sept 2021 - Feb 2023",
      logo: "/csueb-logo.png",
      responsibilities: [
        "Managed the deployment of a web service in a production environment using Docker containers on AWS EC2, resulting in increased scalability and reliability for users.",
        "Developed and implemented a machine learning model that achieved a 20% faster response time and 79% accuracy in responding to user queries, enhancing overall user experience and satisfaction.",
        "Led a team of 4 student assistants in migrating a chatbot from Dialogflow to a local engine, ensuring smooth operation and uninterrupted service for end-users.",
      ],
    },
    {
      title: "Software Engineer- Analyst",
      company: "KPMG Global Services Pvt. Ltd, Pune, India",
      duration: "Jun 2019 - Aug 2021",
      logo: "/kpmg-logo.png",
      responsibilities: [
        "Led the design and configuration of Cloud Splunk Reports automation, reducing manual work by over 120 hours annually while respecting government security protocols.",
        "Implemented 14+ workflows for connected and disconnected applications, increasing productivity by 35% through analysis and optimization of existing processes.",
        "Developed 6 platform-independent utilities using Python and Bash scripting, automating tasks and reducing manual work by over 50%.",
        "Created a password reset utility resolving 60,000+ user requests annually, with a 95% resolution rate, showcasing an empathetic approach to customer needs and support.",
      ],
    },
  ];

  return (
    <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        Work Experience
      </h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <JobExperience key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
