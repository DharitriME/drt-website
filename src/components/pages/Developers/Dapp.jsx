import React from "react";
import { Clock, Book, Code, ChevronRight } from "lucide-react";

const Dapp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Build Your First Dharitri dApp in 30 Minutes
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center">
              <Book className="w-5 h-5 mr-2" />
              <span>Beginner</span>
            </div>
            <div className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              <span>Development</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Learn how to build your first decentralized application on the
            Dharitri blockchain. This tutorial will guide you through creating a
            simple dApp using the REWA token.
          </p>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Prerequisites
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Basic Programming Knowledge
                  </h3>
                  <p className="text-gray-600">
                    Familiarity with JavaScript and React basics
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Development Environment
                  </h3>
                  <p className="text-gray-600">
                    Node.js installed on your computer
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-500 mt-1 mr-2" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Dharitri Wallet
                  </h3>
                  <p className="text-gray-600">
                    A Dharitri wallet with some test REWA tokens
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Dharitri Basics
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Understanding the Dharitri blockchain</li>
                <li>• Working with REWA tokens</li>
                <li>• Smart contract interaction</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Development Skills
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Setting up a Dharitri development environment</li>
                <li>• Building a basic dApp interface</li>
                <li>• Connecting to the Dharitri network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Getting Started
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Dharitri is a high-throughput blockchain platform designed for
              scalability and security. It uses the REWA token as its native
              cryptocurrency and supports smart contracts written in multiple
              programming languages.
            </p>
            <div className="bg-white rounded-lg shadow-sm p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Step 1: Setup Your Development Environment
              </h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <code className="text-sm">
                  npm create dharitri-dapp@latest my-first-dapp
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dapp;
