"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email); // Replace this with backend later
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-600 text-white text-center px-6">
      <h1 className="text-6xl font-extrabold tracking-widest mb-4 animate-glow">
        Z I V E K
      </h1>
      <p className="text-2xl mb-8 animate-pulse">Coming Soon</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-lg text-black w-72"
            required
          />
          <button
            type="submit"
            className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <p className="mt-4 text-lg">Thanks! We’ll notify you when we launch.</p>
      )}

      <p className="mt-6 text-sm opacity-80">We respect your privacy. No spam ever.</p>
    </div>
  );
}
