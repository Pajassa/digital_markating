"use client";

import { usePathname } from "next/navigation";
import { isLang, langMeta, type Lang } from "@/data/pages/i18n";
import type { CityKey, LandingServiceKey } from "@/data/pages/types";

export type UILang = Lang | "en";

/** Text for the navbar, mobile menu and footer in each site language. */
export interface ChromeText {
  /** Brand name in this language's script */
  brand: string;
  nav: Record<"/" | "/services" | "/about" | "/case-studies" | "/industries" | "/blog" | "/contact", string>;
  letsTalk: string;
  viewAllServices: string;
  allServices: string;
  whatsappChat: string;
  skip: string;
  openMenu: string;
  closeMenu: string;
  showServices: string;
  footer: { services: string; company: string; contact: string; locations: string; whatsapp: string; hours: string; tagline: string; rights: string; privacy: string; terms: string };
  /** Core service titles by slug (/services/[slug]) */
  coreServices: Record<string, string>;
  cities: Record<CityKey, string>;
  landingServices: Record<LandingServiceKey, string>;
}

const en: ChromeText = {
  brand: "Tesoap Lab",
  nav: { "/": "Home", "/services": "Services", "/about": "About", "/case-studies": "Case Studies", "/industries": "Industries", "/blog": "Insights", "/contact": "Contact" },
  letsTalk: "Let's Talk",
  viewAllServices: "View all services →",
  allServices: "All services",
  whatsappChat: "Chat on WhatsApp",
  skip: "Skip to content",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  showServices: "Show services",
  footer: {
    services: "Services", company: "Company", contact: "Contact", locations: "Locations", whatsapp: "WhatsApp us",
    hours: "Mon – Sat · working across time zones", tagline: "", rights: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms & Conditions",
  },
  coreServices: {},
  cities: { singapore: "Singapore", dubai: "Dubai", mumbai: "Mumbai", bangalore: "Bangalore" },
  landingServices: { seo: "SEO", "digital-marketing-agency": "Digital Marketing", "social-media-marketing": "Social Media Marketing", "email-marketing": "Email Marketing" },
};

const ar: ChromeText = {
  brand: "تيسوب لاب",
  nav: { "/": "الرئيسية", "/services": "الخدمات", "/about": "من نحن", "/case-studies": "دراسات الحالة", "/industries": "القطاعات", "/blog": "المقالات", "/contact": "تواصل معنا" },
  letsTalk: "تحدّث إلينا",
  viewAllServices: "عرض جميع الخدمات ←",
  allServices: "جميع الخدمات",
  whatsappChat: "تحدّث عبر واتساب",
  skip: "انتقل إلى المحتوى",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  showServices: "عرض الخدمات",
  footer: {
    services: "الخدمات", company: "الشركة", contact: "التواصل", locations: "المواقع", whatsapp: "راسلنا عبر واتساب",
    hours: "الاثنين – السبت · نعمل عبر مختلف المناطق الزمنية", tagline: "شريكك في النمو الرقمي: تسويق قائم على البيانات ونتائج قابلة للقياس.",
    rights: "جميع الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "الشروط والأحكام",
  },
  coreServices: { seo: "تحسين محركات البحث", "google-ads": "إعلانات Google", "performance-marketing": "التسويق بالأداء", "local-seo": "السيو المحلي", "content-marketing": "تسويق المحتوى", "conversion-optimization": "تحسين معدل التحويل" },
  cities: { singapore: "سنغافورة", dubai: "دبي", mumbai: "مومباي", bangalore: "بنغالور" },
  landingServices: { seo: "تحسين محركات البحث", "digital-marketing-agency": "التسويق الرقمي", "social-media-marketing": "التسويق عبر وسائل التواصل", "email-marketing": "التسويق عبر البريد الإلكتروني" },
};

const ja: ChromeText = {
  brand: "テソープ・ラボ",
  nav: { "/": "ホーム", "/services": "サービス", "/about": "会社概要", "/case-studies": "事例", "/industries": "業界", "/blog": "コラム", "/contact": "お問い合わせ" },
  letsTalk: "相談する",
  viewAllServices: "すべてのサービスを見る →",
  allServices: "すべてのサービス",
  whatsappChat: "WhatsAppで相談",
  skip: "本文へスキップ",
  openMenu: "メニューを開く",
  closeMenu: "メニューを閉じる",
  showServices: "サービスを表示",
  footer: {
    services: "サービス", company: "会社情報", contact: "お問い合わせ", locations: "対応地域", whatsapp: "WhatsAppで連絡",
    hours: "月〜土 · 世界各地のタイムゾーンに対応", tagline: "データに基づくマーケティングで、測定できる成長を実現するパートナーです。",
    rights: "All rights reserved.", privacy: "プライバシーポリシー", terms: "利用規約",
  },
  coreServices: { seo: "SEO対策", "google-ads": "Google広告", "performance-marketing": "パフォーマンスマーケティング", "local-seo": "ローカルSEO", "content-marketing": "コンテンツマーケティング", "conversion-optimization": "コンバージョン最適化" },
  cities: { singapore: "シンガポール", dubai: "ドバイ", mumbai: "ムンバイ", bangalore: "バンガロール" },
  landingServices: { seo: "SEO対策", "digital-marketing-agency": "デジタルマーケティング", "social-media-marketing": "SNSマーケティング", "email-marketing": "メールマーケティング" },
};

const es: ChromeText = {
  brand: "Tesoap Lab",
  nav: { "/": "Inicio", "/services": "Servicios", "/about": "Nosotros", "/case-studies": "Casos de éxito", "/industries": "Sectores", "/blog": "Blog", "/contact": "Contacto" },
  letsTalk: "Hablemos",
  viewAllServices: "Ver todos los servicios →",
  allServices: "Todos los servicios",
  whatsappChat: "Escríbenos por WhatsApp",
  skip: "Saltar al contenido",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  showServices: "Mostrar servicios",
  footer: {
    services: "Servicios", company: "Empresa", contact: "Contacto", locations: "Ubicaciones", whatsapp: "Escríbenos por WhatsApp",
    hours: "Lun – Sáb · trabajamos en todas las zonas horarias", tagline: "Tu socio de crecimiento digital: marketing basado en datos y resultados medibles.",
    rights: "Todos los derechos reservados.", privacy: "Política de privacidad", terms: "Términos y condiciones",
  },
  coreServices: { seo: "Posicionamiento SEO", "google-ads": "Google Ads y PPC", "performance-marketing": "Marketing de resultados", "local-seo": "SEO local", "content-marketing": "Marketing de contenidos", "conversion-optimization": "Optimización de la conversión" },
  cities: { singapore: "Singapur", dubai: "Dubái", mumbai: "Bombay", bangalore: "Bangalore" },
  landingServices: { seo: "SEO", "digital-marketing-agency": "Marketing digital", "social-media-marketing": "Redes sociales", "email-marketing": "Email marketing" },
};

const fr: ChromeText = {
  brand: "Tesoap Lab",
  nav: { "/": "Accueil", "/services": "Services", "/about": "À propos", "/case-studies": "Études de cas", "/industries": "Secteurs", "/blog": "Blog", "/contact": "Contact" },
  letsTalk: "Parlons-en",
  viewAllServices: "Voir tous les services →",
  allServices: "Tous les services",
  whatsappChat: "Discuter sur WhatsApp",
  skip: "Aller au contenu",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  showServices: "Afficher les services",
  footer: {
    services: "Services", company: "Entreprise", contact: "Contact", locations: "Implantations", whatsapp: "Écrivez-nous sur WhatsApp",
    hours: "Lun – sam · disponibles sur tous les fuseaux horaires", tagline: "Votre partenaire de croissance digitale : un marketing fondé sur les données et des résultats mesurables.",
    rights: "Tous droits réservés.", privacy: "Politique de confidentialité", terms: "Conditions générales",
  },
  coreServices: { seo: "Référencement SEO", "google-ads": "Google Ads et SEA", "performance-marketing": "Marketing à la performance", "local-seo": "SEO local", "content-marketing": "Marketing de contenu", "conversion-optimization": "Optimisation de la conversion" },
  cities: { singapore: "Singapour", dubai: "Dubaï", mumbai: "Bombay", bangalore: "Bangalore" },
  landingServices: { seo: "SEO", "digital-marketing-agency": "Marketing digital", "social-media-marketing": "Réseaux sociaux", "email-marketing": "Emailing" },
};

export const chromeText: Record<UILang, ChromeText> = { en, ar, ja, es, fr };

/** Site language from the URL: /ja/singapore/seo → "ja"; anything else → "en". */
export function useSiteLang(): { lang: UILang; t: ChromeText; dir: "ltr" | "rtl" } {
  const seg = usePathname().split("/")[1] ?? "";
  const lang: UILang = isLang(seg) ? seg : "en";
  return { lang, t: chromeText[lang], dir: langMeta[lang].dir };
}
