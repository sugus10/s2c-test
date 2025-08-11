import type { NextApiRequest, NextApiResponse } from "next";

type ContactData = {
  name: string;
  email: string;
  company?: string;
  message: string;
  budget?: string;
  timeline?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data: ContactData = req.body;
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-response to user

    // Simulate email sending
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Company: ${data.company || "Not provided"}
      Budget: ${data.budget || "Not specified"}
      Timeline: ${data.timeline || "Not specified"}
      
      Message:
      ${data.message}
    `;

    console.log("Contact form submission:", emailContent);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({ 
      message: "Contact form submitted successfully",
      id: `contact_${Date.now()}`
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}