import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "submissions");

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    // ignore
  }
}

async function readJsonFile<T>(filePath: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function appendToFile(filePath: string, entry: unknown) {
  await ensureDir(path.dirname(filePath));
  const items = await readJsonFile(filePath);
  items.push({ ...entry, id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}` });
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), "utf-8");
}

export type ContactEntry = {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export async function saveContact(entry: Omit<ContactEntry, "createdAt">): Promise<void> {
  const filePath = path.join(DATA_DIR, "contacts.json");
  await appendToFile(filePath, { ...entry, createdAt: new Date().toISOString() });
}

export type NewsletterEntry = {
  email: string;
  firstName: string;
  consent: boolean;
  createdAt: string;
};

export async function isNewsletterSubscribed(email: string): Promise<boolean> {
  const filePath = path.join(DATA_DIR, "newsletter.json");
  const items = await readJsonFile<NewsletterEntry & { id?: string }>(filePath);
  const normalized = email.trim().toLowerCase();
  return items.some((e) => e.email?.toLowerCase() === normalized);
}

export async function saveNewsletter(entry: Omit<NewsletterEntry, "createdAt">): Promise<"created" | "already"> {
  const filePath = path.join(DATA_DIR, "newsletter.json");
  const already = await isNewsletterSubscribed(entry.email);
  if (already) return "already";
  await appendToFile(filePath, { ...entry, createdAt: new Date().toISOString() });
  return "created";
}

export type DonIntentionEntry = {
  amount: string;
  amountCustom?: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export async function saveDonIntention(entry: Omit<DonIntentionEntry, "createdAt">): Promise<void> {
  const filePath = path.join(DATA_DIR, "don-intentions.json");
  await appendToFile(filePath, { ...entry, createdAt: new Date().toISOString() });
}

export type DonationEntry = {
  stripeSessionId: string;
  amountFcfa: number;
  email?: string;
  donorName?: string;
  paidAt: string;
};

export async function saveDonation(entry: Omit<DonationEntry, "paidAt">): Promise<void> {
  const filePath = path.join(DATA_DIR, "donations.json");
  await appendToFile(filePath, { ...entry, paidAt: new Date().toISOString() });
}
