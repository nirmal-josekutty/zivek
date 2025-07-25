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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-800 via-teal-600 to-teal-400 p-4 sm:p-6">
      {/* Glowing ZIVEK */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[0.3em] sm:tracking-[0.5em] text-white drop-shadow-lg mb-2 animate-pulse">
        Z I V E K
      </h1>
      <p className="text-base sm:text-lg text-teal-100 mb-6 sm:mb-10 text-center">
        Your trusted service partner is coming soon
      </p>

      {/* Glassy Card */}
      <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full border border-white/30">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-white mb-6">
          Get Notified
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/80 text-teal-800 placeholder-teal-400 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-base sm:text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 text-base sm:text-lg"
          >
            {loading ? "Submitting..." : "Notify Me"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-white font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
