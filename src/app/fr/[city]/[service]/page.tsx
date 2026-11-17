import { L10nPage, l10nMetadata, l10nStaticParams, type L10nParams } from "@/components/landing-pages/localized/route";

export const dynamicParams = false;
export const generateStaticParams = () => l10nStaticParams("fr");
export const generateMetadata = ({ params }: { params: L10nParams }) => l10nMetadata("fr", params);
export default function Page({ params }: { params: L10nParams }) {
  return <L10nPage lang="fr" params={params} />;
}
