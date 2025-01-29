import React, { useState } from "react";
import { Search } from "lucide-react";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tutorials = [
    {
      category: "Getting Started",
      items: [
        {
          title: "Introduction to Dharitri Blockchain",
          description:
            "Learn the fundamentals of Dharitri blockchain and its core concepts",
          duration: "15 min",
          difficulty: "Beginner",
        },
        {
          title: "Setting Up Your First Rewa Wallet",
          description:
            "Create and secure your Rewa wallet to start your blockchain journey",
          duration: "10 min",
          difficulty: "Beginner",
        },
      ],
    },
    {
      category: "Smart Contracts",
      items: [
        {
          title: "Smart Contract Development on Dharitri",
          description:
            "Build your first smart contract using Dharitri's development framework",
          duration: "30 min",
          difficulty: "Intermediate",
        },
        {
          title: "Advanced Smart Contract Patterns",
          description:
            "Learn advanced patterns and best practices for Dharitri smart contracts",
          duration: "45 min",
          difficulty: "Advanced",
        },
      ],
    },
    {
      category: "dApp Development",
      items: [
        {
          title: "Building Your First dApp",
          description:
            "Create a decentralized application on the Dharitri network",
          duration: "60 min",
          difficulty: "Intermediate",
        },
        {
          title: "Integrating Rewa Tokens",
          description: "Learn how to integrate Rewa tokens into your dApp",
          duration: "40 min",
          difficulty: "Intermediate",
        },
      ],
    },
  ];

  const filteredTutorials = tutorials
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 mt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Dharitri Developer Tutorials
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn how to build on Dharitri blockchain with our comprehensive
          tutorials
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredTutorials.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {tutorial.duration}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                        tutorial.difficulty
                      )}`}
                    >
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
