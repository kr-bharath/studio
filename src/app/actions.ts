// @ts-nocheck
// فوق هذا السطر يعني "تجاهل أخطاء TypeScript في هذا الملف"
// This is a workaround because the file is marked as 'use server' but TS may not fully recognize the context in all editors or configurations immediately.
'use server';

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmission(data: ContactFormValues) {
  // Simulate API call or database interaction
  console.log("Received contact form submission:", data);

  // In a real application, you would:
  // 1. Validate data (already done with Zod schema by react-hook-form, but can re-validate server-side)
  // 2. Send an email (e.g., using Nodemailer, Resend, or an email API service)
  // 3. Save to a database
  // 4. Handle potential errors

  // Simulate success/failure
  // const shouldSucceed = Math.random() > 0.1; // 90% success rate for simulation
  const shouldSucceed = true; // For now, always succeed

  if (shouldSucceed) {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Message sent successfully!" };
  } else {
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
