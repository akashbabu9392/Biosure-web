import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import {
  PrivacyPolicyBody,
  privacyPolicyToc,
} from "@/components/legal/privacy-policy-body";

export const metadata: Metadata = {
  title: "Privacy Policy | BioSure Lab Portal",
  description:
    "Learn how BioSure Lab Portal collects, uses, and protects your laboratory data. Our commitment to privacy and security in laboratory information management.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | BioSure Lab Portal",
    description:
      "Learn how BioSure Lab Portal collects, uses, and protects your laboratory data. Our commitment to privacy and security in laboratory information management.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BioSure Lab Portal",
    description:
      "Learn how BioSure Lab Portal collects, uses, and protects your laboratory data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitleLine="BioSure Lab Portal"
      operatedByLine={
        <>
          Operated by <strong className="text-[color:var(--text)]">RainerTek</strong>
        </>
      }
      effectiveDate="April 13, 2026"
      lastUpdated="April 13, 2026"
      toc={privacyPolicyToc}
    >
      <PrivacyPolicyBody />
    </LegalPageLayout>
  );
}
