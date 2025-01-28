import React from "react";
import { CheckCircle2, Lock, ShieldCheck, Zap } from "lucide-react";

const Chain = () => {
  return (
    <div className="bg-white text-black py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          On-Chain Two-Factor Authentication
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Secure your digital assets with Dharitri's cutting-edge 2FA solution,
          providing an unparalleled layer of protection for your blockchain
          transactions.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6">Enhanced Security</h2>
          <p className="text-lg mb-4">
            Dharitri's on-chain 2FA creates an additional cryptographic barrier,
            ensuring that only authorized users can execute critical
            transactions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Lock className="mr-3 text-blue-600" />
              Cryptographically Secure Authorization
            </li>
            <li className="flex items-center">
              <ShieldCheck className="mr-3 text-green-600" />
              Immutable Transaction Verification
            </li>
            <li className="flex items-center">
              <Zap className="mr-3 text-yellow-600" />
              Instant Security Confirmation
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <ol className="space-y-4 list-decimal pl-5">
            <li>User initiates a transaction</li>
            <li>System triggers 2FA verification</li>
            <li>Secondary authentication required</li>
            <li>Transaction confirmed on-chain</li>
          </ol>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technical Architecture
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Rewa Protocol</h3>
            <p>
              A custom blockchain protocol that enables seamless, secure
              multi-factor authentication directly on-chain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cryptographic Layers</h3>
            <p>
              Multiple cryptographic signatures and verifications ensure
              transaction integrity and user identity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Smart Contract Integration
            </h3>
            <p>
              Seamlessly integrated with smart contracts to provide automatic,
              tamper-proof authentication mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Dharitri's 2FA
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <CheckCircle2 />,
              title: "Fraud Prevention",
              desc: "Significantly reduces unauthorized access risks",
            },
            {
              icon: <Lock />,
              title: "Regulatory Compliance",
              desc: "Meets stringent security standards",
            },
            {
              icon: <ShieldCheck />,
              title: "User Trust",
              desc: "Builds confidence in blockchain transactions",
            },
            {
              icon: <Zap />,
              title: "Performance",
              desc: "Minimal latency in authentication process",
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-100 rounded-lg">
              <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center text-blue-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Chain;
