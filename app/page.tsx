"use client";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter a valid email.");

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("🎉 Thank you! We’ll notify you soon.");
        setEmail("");
      } else {
        setMessage("⚠️ Failed: " + data.message);
      }
    } catch {
      setMessage("⚠️ Error submitting. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 to-teal-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        
        

        <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
          Coming Soon 🚀
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign up to get notified when we launch!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-teal-400 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-teal-700 placeholder-teal-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Notify Me"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-gray-700 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
