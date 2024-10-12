import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const EducationItem = ({ degree, institution, duration, gpa, coursework }) => (
  <div className="mb-12 relative">
    <div className="absolute left-0 top-0 w-1 h-full bg-indigo-200 rounded-full"></div>
    <div className="pl-8">
      <div className="absolute left-0 top-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
        <GraduationCap className="w-4 h-4 text-white" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:bg-indigo-50">
        <h3 className="text-xl font-semibold text-indigo-700">{degree}</h3>
        <p className="text-lg text-gray-600">{institution}</p>
        <p className="text-md text-gray-500 mb-4 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {duration}{" "}
          {gpa && (
            <span className="ml-2 bg-indigo-100 text-indigo-800 py-1 px-2 rounded-full text-sm">
              GPA: {gpa}
            </span>
          )}
        </p>
        <div className="text-gray-700 flex items-start">
          <BookOpen className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-1" />
          <p>
            <strong className="font-medium">Coursework:</strong> {coursework}
          </p>
        </div>
      </div>
    </div>
  </div>
);

function Education() {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "California State University- East Bay",
      duration: "Aug 2021 - May 2023",
      gpa: "3.44",
      coursework:
        "Advanced Algorithms, Operating Systems Design, Cyber Security, DBMS, Machine Learning, Computer Vision.",
    },
    {
      degree: "Bachelor of Engineering, Information Technology",
      institution: "PES Modern College of Engineering, India",
      duration: "June 2015 - June 2019",
      coursework:
        "Application Development, Testing, and operational stability, Database querying languages, App Security",
    },
  ];

  return (
    <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        Education
      </h2>
      <div className="relative">
        {educationData.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
}

export default Education;
