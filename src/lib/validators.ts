import { z } from "zod";

export const userLeadSchema = z.object({
  email: z.string().email("Email invalid"),
  city: z.string().min(1, "Te rugăm să alegi orașul").optional().or(z.literal("")),
  marketing_consent: z.literal(true, {
    errorMap: () => ({ message: "Consimțământul este obligatoriu" }),
  }),
  website: z.string().optional(), // honeypot field
});

export const venueLeadSchema = z.object({
  contact_name: z.string().min(2, "Numele este prea scurt"),
  email: z.string().email("Email invalid"),
  phone: z.string().min(6, "Telefon invalid").optional().or(z.literal("")),
  city: z.string().min(1, "Te rugăm să alegi orașul").optional().or(z.literal("")),
  marketing_consent: z.literal(true, {
    errorMap: () => ({ message: "Consimțământul este obligatoriu" }),
  }),
  website: z.string().optional(), // honeypot field
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Numele este prea scurt"),
  email: z.string().email("Email invalid"),
  subject: z.string().min(3, "Subiectul este prea scurt"),
  message: z.string().min(10, "Mesajul este prea scurt").max(1000, "Mesaj prea lung"),
  marketing_consent: z.literal(true, {
    errorMap: () => ({ message: "Consimțământul este obligatoriu" }),
  }),
  website: z.string().optional(), // honeypot field
});

