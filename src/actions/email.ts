// import nodemailer from 'nodemailer';
// import { z } from 'zod';
//
// // Define schema for validation
// const emailSchema = z.object({
//   email: z.string().email(),
//   name: z.string().min(1, 'Name is required'),
//   message: z.string().min(1, 'Message is required'),
// });
//
// // Server actions to handle form submission
// export async function handleContactForm({ payload }) {
//   try {
//     const { email, name, message } = emailSchema.parse(payload);
//
//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.APP_PASSWORD,
//       },
//     });
//
//     await transporter.sendMail({
//       from: process.env.MY_EMAIL,
//       to: process.env.MY_EMAIL,
//       subject: `Message from ${name} <${email}>`,
//       text: message,
//     });
//
//     return { success: 'Email sent successfully!' };
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return { error: error.errors };
//     }
//     return { error: error.message || 'Unknown error occurred.' };
//   }
// }
