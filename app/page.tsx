"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const target = new Date("2025-09-01").getTime(); // Set launch date
    const countdownEl = document.getElementById("countdown");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (countdownEl)
        countdownEl.innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

      if (distance < 0) {
        clearInterval(interval);
        if (countdownEl) countdownEl.innerText = "Launched!";
      }
    }, 1000);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>ZIVEK</h1>
      <h2 style={{ fontSize: "1.8rem", marginTop: "10px" }}>Coming Soon</h2>
      <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
        Your trusted home services, reimagined
      </p>

      {/* Countdown */}
      <div style={{ fontSize: "2rem", margin: "20px 0" }} id="countdown">
        00d : 00h : 00m : 00s
      </div>

      {/* Email Notify */}
      <input type="email" placeholder="Enter your email" />
      <br />
      <button>Notify Me</button>
    </div>
  );
}
