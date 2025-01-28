import React from "react";

const Tools = () => {
  const tools = [
    {
      category: "Developer Tools",
      items: [
        {
          title: "Dharitri IDE",
          description:
            "Write, test, debug and deploy smart contracts easily with our web-based IDE",
          link: "#",
        },
        {
          title: "Rewa SDK",
          description:
            "Build applications with our comprehensive software development kit",
          link: "#",
        },
        {
          title: "Smart Contract Tools",
          description:
            "Tools and libraries for smart contract development on Dharitri",
          link: "#",
        },
      ],
    },
    {
      category: "Development Resources",
      items: [
        {
          title: "Developer Documentation",
          description:
            "Comprehensive guides and documentation for building on Dharitri",
          link: "#",
        },
        {
          title: "API Reference",
          description:
            "Detailed API documentation for Dharitri network integration",
          link: "#",
        },
        {
          title: "Code Examples",
          description:
            "Sample code and templates to jumpstart your development",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Builder Tools & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build powerful applications on the Dharitri
            blockchain
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        {tools.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Community Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Join Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Developer Discord
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other developers and get support from our team
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Join Discord →
              </a>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Developer Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Discuss technical topics and share your knowledge
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Forum →
              </a>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GitHub
              </h3>
              <p className="text-gray-600 mb-4">
                Explore our open-source repositories and contribute
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
