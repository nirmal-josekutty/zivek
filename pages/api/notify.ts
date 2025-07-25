import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyGEHH0n3akMSStU2eoxxc7MV70Kdlqawt61Jlmd5D8KD7Lqwbo_r9kE7Ee3rPrIBDvhw/exec";

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error submitting email:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
