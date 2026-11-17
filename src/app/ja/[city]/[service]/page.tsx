import { L10nPage, l10nMetadata, l10nStaticParams, type L10nParams } from "@/components/landing-pages/localized/route";

// Japanese uses the system Japanese UI fonts (see --font-jp in globals.css): no multi-MB web font download.
export const dynamicParams = false;
export const generateStaticParams = () => l10nStaticParams("ja");
export const generateMetadata = ({ params }: { params: L10nParams }) => l10nMetadata("ja", params);
export default function Page({ params }: { params: L10nParams }) {
  return <L10nPage lang="ja" params={params} />;
}
