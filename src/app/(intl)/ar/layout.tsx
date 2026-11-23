import "../../globals.css";
import { RootShell } from "@/components/layout/RootShell";
export { metadata, viewport } from "@/app/shared-metadata";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="ar">{children}</RootShell>;
}
