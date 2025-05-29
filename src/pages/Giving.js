import React from "react";

const accounts = [
  { bank: "Eco Bank", account: "3840033268", name: "Christ Goshen City", description: "Tithe and Offering" },
  { bank: "Eco Bank", account: "3840033275", name: "Christ Goshen City", description: "Generator Account" },
  { bank: "Eco Bank", account: "3840068123", name: "Christ Goshen City", description: "Welfare Account" },
  { bank: "Eco Bank", account: "3840042529", name: "Christ Goshen City", description: "Project Account" },
];

const scripture = (
  <>
    <p className="text-xl text-yellow-400 font-semibold mb-2">
      “Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.” 
    </p>
    <p className="text-lg text-gray-300">— Luke 6:38 (NIV)</p>
  </>
);

const Giving = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
    <h1 className="text-3xl text-white font-bold mt-20 mb-8">Giving & Support</h1>
    <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-xl mb-8">
      <h2 className="text-2xl text-yellow-400 font-semibold mb-6">Account Numbers</h2>
      <ul className="space-y-4">
        {accounts.map((acc, id) => (
          <li key={id} className="bg-gray-800 rounded-md p-4 ">
                <h1 className="text-white font-bold text-lg text-center">{acc.description}</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="block text-white font-bold">{acc.bank}</span>
              <span className="block text-gray-300">{acc.name}</span>
            </div>
            <span className="text-yellow-400 text-lg font-mono mt-2 md:mt-0">{acc.account}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-gray-800 rounded-lg p-6 max-w-xl text-center">
      {scripture}
    </div>
  </div>
);

export default Giving;