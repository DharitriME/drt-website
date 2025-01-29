import React from "react";
import { Card } from "../../ui/card";

const Roadmap = () => {
  const roadmapSections = [
    {
      year: "2024",
      quarters: [
        {
          title: "Q1 2024",
          items: [
            "Dharitri Virtual Machine Upgrades",
            "REWA Token Economics 2.0",
            "Advanced Staking Mechanisms",
            "Enhanced Developer Tools",
          ],
        },
        {
          title: "Q2 2024",
          items: [
            "Cross-Chain Bridge Implementation",
            "Smart Contract Optimization",
            "Governance Framework Enhancement",
            "Community Development Programs",
          ],
        },
      ],
    },
    {
      year: "2023",
      quarters: [
        {
          title: "Q3-Q4 2023",
          items: [
            "Layer 2 Scaling Solutions",
            "DeFi Protocol Integration",
            "Network Security Hardening",
            "Ecosystem Growth Initiatives",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 mt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Building the Future of Blockchain
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dharitri's roadmap outlines our journey towards creating a more
          accessible, efficient, and innovative blockchain ecosystem powered by
          REWA.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="max-w-6xl mx-auto">
        {roadmapSections.map((section, sectionIndex) => (
          <div key={section.year} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {section.year}
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {section.quarters.map((quarter, quarterIndex) => (
                <Card
                  key={quarter.title}
                  className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {quarter.title}
                  </h3>
                  <ul className="space-y-4">
                    {quarter.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-600 mb-8">
          Dharitri aims to revolutionize blockchain technology by creating a
          more sustainable, scalable, and user-friendly ecosystem. With REWA at
          its core, we're building the foundation for the next generation of
          decentralized applications.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Scalability",
              description:
                "Advanced infrastructure supporting millions of users",
            },
            {
              title: "Security",
              description:
                "Enterprise-grade security for all network participants",
            },
            {
              title: "Accessibility",
              description:
                "User-friendly platform for developers and users alike",
            },
          ].map((pillar, index) => (
            <Card key={index} className="p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
