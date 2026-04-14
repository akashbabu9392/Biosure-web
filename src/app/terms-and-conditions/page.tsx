import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import {
  TermsAndConditionsBody,
  termsAndConditionsToc,
} from "@/components/legal/terms-and-conditions-body";

export const metadata: Metadata = {
  title: "Terms and Conditions | BioSure Lab Portal",
  description:
    "Terms and Conditions for using BioSure Lab Portal — the cloud LIMS for environmental monitoring laboratories.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms and Conditions | BioSure Lab Portal",
    description:
      "Terms and Conditions for using BioSure Lab Portal — the cloud LIMS for environmental monitoring laboratories.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | BioSure Lab Portal",
    description:
      "Terms and Conditions for using BioSure Lab Portal — the cloud LIMS for environmental monitoring laboratories.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitleLine="BioSure Lab Portal"
      operatedByLine={
        <>
          Operated by <strong className="text-[color:var(--text)]">RainerTek</strong>
        </>
      }
      effectiveDate="April 13, 2026"
      lastUpdated="April 13, 2026"
      toc={termsAndConditionsToc}
    >
      <TermsAndConditionsBody />
    </LegalPageLayout>
  );
}
