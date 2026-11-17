import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { L10nPage, l10nMetadata, l10nStaticParams, type L10nParams } from "@/components/landing-pages/localized/route";

// Brand fonts have no Arabic glyphs, so Arabic pages use IBM Plex Sans Arabic.
const font = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["300", "400", "500", "600", "700"], variable: "--font-plex-arabic", display: "swap" });

export const dynamicParams = false;
export const generateStaticParams = () => l10nStaticParams("ar");
export const generateMetadata = ({ params }: { params: L10nParams }) => l10nMetadata("ar", params);
export default function Page({ params }: { params: L10nParams }) {
  return <L10nPage lang="ar" params={params} fontClass={font.variable} />;
}
