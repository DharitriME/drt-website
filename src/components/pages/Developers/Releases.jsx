import React from "react";

const Releases = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dharitri Releases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest updates and improvements to the Dharitri
            ecosystem. Each release brings us closer to our vision of a more
            accessible and efficient blockchain platform.
          </p>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Rewa 2.0</h2>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Latest Release
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              A major upgrade bringing enhanced scalability, improved security
              features, and better developer tools to the Dharitri network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Performance
                </h3>
                <p className="text-gray-600">
                  50% increase in transaction processing speed
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">
                  Advanced cryptographic protocols implementation
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Development
                </h3>
                <p className="text-gray-600">
                  New SDK features and improved documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Releases Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Previous Releases
          </h2>
          <div className="space-y-6">
            {/* Release 1.5 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Rewa 1.5</h3>
                <span className="text-sm text-gray-500">December 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                Network stability improvements and smart contract optimization
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enhanced validator node performance</li>
                <li>Improved smart contract execution efficiency</li>
                <li>New developer tools and APIs</li>
              </ul>
            </div>

            {/* Release 1.0 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Rewa 1.0</h3>
                <span className="text-sm text-gray-500">September 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                Initial mainnet launch with core functionality
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Core blockchain implementation</li>
                <li>Basic smart contract support</li>
                <li>Wallet integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Future Roadmap
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Q2 2025</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Enhanced cross-chain compatibility</li>
                  <li>• Advanced staking mechanisms</li>
                  <li>• Improved governance features</li>
                </ul>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Q3 2025</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Layer 2 scaling solutions</li>
                  <li>• DeFi protocol improvements</li>
                  <li>• Extended SDK capabilities</li>
                </ul>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Q4 2025</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Enterprise solutions</li>
                  <li>• Advanced privacy features</li>
                  <li>• Ecosystem expansion tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Releases;
