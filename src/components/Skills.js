import React from "react";
import { Code, Monitor, Brain, Database, Cog, Users } from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-indigo-600" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: Code,
      skills: ["Python (Flask, Django)", "Java", "C#", "C++"],
    },
    {
      title: "Frontend Technologies",
      icon: Monitor,
      skills: ["HTML5", "CSS", "JavaScript", "React-JS"],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        "OpenCV",
        "Beautiful Soup",
        "Numpy",
        "Pandas",
        "Sklearn",
        "Tensorflow",
        "Data Engineering",
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "MySQL",
        "MongoDB",
        "NoSQL",
        "SQLite",
        "SQL",
        "Microsoft SQL Server",
        "Postgres",
      ],
    },
    {
      title: "Other",
      icon: Cog,
      skills: [
        "Microsoft Azure",
        "JIRA",
        "Git",
        "REST API",
        "SOAP",
        "AWS",
        "AI & ML",
        "Version Control",
        "Versioning",
        "ElasticSearch",
        "Management System",
        "Emerging Technology",
        "Web Applications",
        "Containerization",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Empathetic communication",
        "Organizational skills",
        "Integrity",
        "Responsibility",
        "Innovation",
      ],
    },
  ];

  return (
    <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
