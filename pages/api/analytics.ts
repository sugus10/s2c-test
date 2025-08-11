import type { NextApiRequest, NextApiResponse } from "next";

type AnalyticsData = {
  page: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  screenResolution: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data: AnalyticsData = req.body;
    
    // Validate required fields
    if (!data.page || !data.timestamp) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // In a real application, you would:
    // 1. Store this data in a database
    // 2. Send to analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Process for insights

    console.log("Analytics data received:", {
      page: data.page,
      timestamp: data.timestamp,
      userAgent: data.userAgent?.substring(0, 100), // Truncate for logging
      referrer: data.referrer,
      screenResolution: data.screenResolution,
    });

    res.status(200).json({ message: "Analytics data recorded" });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}