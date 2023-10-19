// pages/api/contentfulTest.js

import client from "@/utils/contentful";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const entries = await client.getEntries();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Contentful entries." });
  }
}
