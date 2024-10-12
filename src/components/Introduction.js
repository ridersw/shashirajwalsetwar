import React from "react";
import { User, Coffee, BookOpen, Briefcase, Linkedin } from "lucide-react";

function Introduction() {
  return (
    <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 flex items-center">
          <User className="mr-2" /> About Me
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Full Stack Software Engineer with over 3 years of experience in
            developing high-performance, scalable applications using
            microservices architecture in cloud environments. Proficient in
            Python, Java, C#, and JavaScript, with a strong background in DevOps
            practices and continuous integration/delivery. Skilled in
            problem-solving, Agile methodologies, and implementing emerging
            technologies. Demonstrates a commitment to building resilient
            applications that enhance customer experience while adhering to
            industry best practices.
          </p>
          <div className="flex items-center text-indigo-600 font-medium">
            <Coffee className="mr-2" />
            <p>
              I love to build new projects that test my programming logic while
              sipping my coffee.
            </p>
          </div>
          <div className="flex items-center text-indigo-600 font-medium">
            <BookOpen className="mr-2" />
            <p>
              While programming and teaching keep me busy most of the time, I do
              take time off to learn new and exciting things.
            </p>
          </div>
          <div className="flex items-center text-indigo-600 font-medium">
            <Briefcase className="mr-2" />
            <p>
              Currently, I am exploring new job opportunities and I am ready for
              the next big challenge as a Software Engineer!
            </p>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg shadow-inner">
            <p className="text-gray-700 italic">
              If you have read till here, please do send me a request on my
              LinkedIn profile, as I would love to be in your network!
            </p>
            <a
              href="https://www.linkedin.com/in/shashiraj-walsetwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <Linkedin className="mr-1" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
