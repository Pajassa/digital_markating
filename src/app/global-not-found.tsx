import "./globals.css";
import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import NotFound from "./(site)/not-found";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function GlobalNotFound() {
  return <RootShell lang="en-IN"><NotFound /></RootShell>;
}
