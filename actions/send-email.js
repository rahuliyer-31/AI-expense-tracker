"use server";

import { Resend } from "resend";
import emailTemplate from "../emails/template.jsx"
 
// export async function sendEmail({ to, subject, react }) {
export async function sendEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['raiyer.3.1@gmail.com'],
    subject: 'Hello world',
    react: emailTemplate({ firstName: 'John' }),
    });

    console.log("Email sent successfully:", data.data);
    console.log("Email sent successfully:", data.error);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

// // import { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../emails/template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendEmail({ to, subject, react }) {
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['lalithsagartr42@gmail.com'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   };

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };