import React from "react";
import { Code, CheckSquare, TrendingUp } from "lucide-react";

const ProjectItem = ({ title, description, keyAspects }) => (
  <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="bg-indigo-600 p-4">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-6">{description}</p>
      {keyAspects.map((aspect, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-lg font-semibold mb-2 flex items-center text-indigo-700">
            {aspect.title === "Tech Stack" && <Code className="mr-2" />}
            {aspect.title === "Key Features" && (
              <CheckSquare className="mr-2" />
            )}
            {(aspect.title === "Achievements" ||
              aspect.title === "Impact" ||
              aspect.title === "Outcomes") && <TrendingUp className="mr-2" />}
            {aspect.title}
          </h4>
          {aspect.type === "list" ? (
            <ul className="list-disc pl-5 space-y-1">
              {aspect.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">{aspect.content}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

function Projects() {
  const projects = [
    {
      title: "AI-Powered Content Recommendation Engine",
      description:
        "Developed an AI-powered content recommendation engine for a healthcare platform to personalize user experience and increase engagement.",
      keyAspects: [
        {
          title: "Tech Stack",
          type: "list",
          items: [
            "Backend: Python (Flask) for API development",
            "Frontend: React for the user interface",
            "Database: MongoDB for storing user data and content",
            "Machine Learning: TensorFlow for the recommendation algorithm",
            "Cloud Infrastructure: AWS for deployment and scaling",
          ],
        },
        {
          title: "Key Features",
          type: "list",
          items: [
            "Real-time content recommendations based on user behavior",
            "A/B testing framework for continuous improvement",
            "RESTful API for mobile app integration",
            "Admin dashboard for content management and analytics",
          ],
        },
        {
          title: "Achievements",
          type: "list",
          items: [
            "Increased user engagement by 40% within three months",
            "Improved content discovery by 25%",
            "Reduced bounce rates by 30% on main pages",
          ],
        },
      ],
    },
    {
      title: "Ticketing & Bug Tracking System for IT Support",
      description:
        "Designed and built a support system for IT Support to improve organization, focus, efficiency, and effectiveness in handling support requests and bug tracking.",
      keyAspects: [
        {
          title: "Tech Stack",
          type: "list",
          items: [
            "Backend: Python-Django",
            "Frontend: HTML, CSS, JavaScript",
            "Database: SQLite",
          ],
        },
        {
          title: "Key Features",
          type: "list",
          items: [
            "Ticket creation and management system",
            "Bug tracking and prioritization",
            "User authentication and role-based access control",
            "Reporting and analytics dashboard",
          ],
        },
        {
          title: "Outcomes",
          type: "list",
          items: [
            "Streamlined IT support processes",
            "Improved response times and issue resolution rates",
            "Enhanced visibility into common issues and trends",
          ],
        },
      ],
    },
    {
      title: "Scalable E-commerce Backend with Microservices",
      description:
        "Developed a robust and scalable backend system for an e-commerce platform using microservices architecture and .NET technologies.",
      keyAspects: [
        {
          title: "Tech Stack",
          type: "list",
          items: [
            "C# with .NET 6 for microservices development",
            "ASP.NET Core Web API for RESTful services",
            "Entity Framework Core for ORM",
            "SQL Server for primary data storage",
            "MongoDB for product catalog and user preferences",
            "Azure Service Bus for inter-service communication",
            "Docker for containerization",
            "Azure DevOps for CI/CD pipeline",
          ],
        },
        {
          title: "Key Features",
          type: "list",
          items: [
            "Modular microservices architecture",
            "Product catalog service with fast query performance",
            "User authentication and authorization service using Identity Server",
            "Order processing service with transaction management",
            "Inventory management service with real-time updates",
            "API Gateway using Ocelot for routing and load balancing",
            "Distributed caching for improved performance",
            "Asynchronous communication between services for better scalability",
          ],
        },
        {
          title: "Achievements",
          type: "list",
          items: [
            "Successfully handled 5,000+ concurrent users in load testing",
            "Reduced service deployment time by 60% using containerization",
            "Improved system resilience with circuit breaker and retry patterns",
            "Achieved 99.9% uptime through robust error handling and logging",
            "Implemented CQRS pattern for better read/write performance in high-traffic services",
          ],
        },
      ],
    },
    {
      title: "Interactive Data Visualization Dashboard",
      description:
        "Created a responsive, interactive dashboard for visualizing complex datasets, allowing users to explore data through various charts and graphs.",
      keyAspects: [
        {
          title: "Tech Stack",
          type: "list",
          items: [
            "Frontend: React.js with Redux for state management",
            "Visualization: D3.js for custom charts",
            "Styling: Tailwind CSS for responsive design",
            "Backend: Node.js with Express for API",
            "Database: PostgreSQL for data storage",
          ],
        },
        {
          title: "Key Features",
          type: "list",
          items: [
            "Real-time data updates",
            "Custom filtering and sorting options",
            "Interactive charts with drill-down capabilities",
            "Responsive design for mobile and desktop",
            "Data export functionality",
          ],
        },
        {
          title: "Impact",
          type: "list",
          items: [
            "Reduced data analysis time by 50% for users",
            "Increased data-driven decision making in the organization",
            "Received positive feedback for intuitive UI/UX design",
          ],
        },
      ],
    },
  ];

  return (
    <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
