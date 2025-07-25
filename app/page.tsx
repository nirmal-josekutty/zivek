"use client";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz078_aaUPfl6pF8oDlQ7IsDjy0sDy2qavhpQFGi-cychOtkM9ophXZjLOz9PKPHjHdmQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }).toString(),
      });
      if (response.ok) {
        setMessage("Thank you! You'll be notified.");
        setEmail("");
      } else {
        setMessage("Error! Try again later.");
      }
    } catch (error) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-600 text-white text-center px-4">
      <h1 className="text-6xl font-bold tracking-wider mb-4">ZIVEK</h1>
      <h2 className="text-3xl font-semibold mb-6 animate-pulse">Coming Soon</h2>
      <p className="mb-8 text-lg">Your trusted home services, reimagined.</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-md text-black flex-1"
          required
        />
        <button
          type="submit"
          className="bg-white text-teal-600 px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Notify Me
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
