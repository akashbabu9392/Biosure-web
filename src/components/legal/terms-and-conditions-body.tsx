import type { ReactNode } from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";

const T = {
  s1: "section-1-agreement-to-terms",
  s2: "section-2-description-of-service",
  s3: "section-3-user-accounts",
  s4: "section-4-subscription-plans-and-billing",
  s5: "section-5-acceptable-use",
  s6: "section-6-data-ownership-and-intellectual-property",
  s7: "section-7-report-generation-and-electronic-signatures",
  s8: "section-8-service-availability-and-support",
  s9: "section-9-third-party-services",
  s10: "section-10-limitation-of-liability",
  s11: "section-11-indemnification",
  s12: "section-12-termination",
  s13: "section-13-data-protection-and-security",
  s14: "section-14-general-provisions",
  s15: "section-15-contact-us",
} as const;

export const termsAndConditionsToc = [
  { id: T.s1, label: "1. Agreement to Terms" },
  { id: T.s2, label: "2. Description of Service" },
  { id: T.s3, label: "3. User Accounts" },
  { id: T.s4, label: "4. Subscription Plans and Billing" },
  { id: T.s5, label: "5. Acceptable Use" },
  { id: T.s6, label: "6. Data Ownership and Intellectual Property" },
  { id: T.s7, label: "7. Report Generation and Electronic Signatures" },
  { id: T.s8, label: "8. Service Availability and Support" },
  { id: T.s9, label: "9. Third-Party Services" },
  { id: T.s10, label: "10. Limitation of Liability" },
  { id: T.s11, label: "11. Indemnification" },
  { id: T.s12, label: "12. Termination" },
  { id: T.s13, label: "13. Data Protection and Security" },
  { id: T.s14, label: "14. General Provisions" },
  { id: T.s15, label: "15. Contact Us" },
] as const;

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12 border-b border-[color:var(--border)] pb-12 last:mb-0 last:border-b-0 last:pb-0">
      <h2
        id={id}
        className="scroll-mt-24 font-[var(--font-serif)] text-2xl font-normal tracking-tight text-[color:var(--text)] md:text-[1.75rem]"
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function Sub({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[color:var(--text)]">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-[color:var(--border-bright)] border-l-4 border-l-[color:var(--accent)] bg-[color:var(--surface)] p-5 text-[0.8125rem] font-semibold uppercase leading-relaxed tracking-wide text-[color:var(--text)]">
      {children}
    </div>
  );
}

export function TermsAndConditionsBody() {
  return (
    <>
      <Section id={T.s1} title="1. Agreement to Terms">
        <p>
          These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding
          agreement between you (&quot;User,&quot; &quot;you,&quot; or
          &quot;your&quot;) and RainerTek (&quot;Company,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;), governing your access to and use of
          the BioSure Lab Portal platform, including the website at biosurelab.com
          and associated subdomains, application programming interfaces (APIs),
          report generation services, client portal, and any related services
          (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By creating an account, accessing, or using the Service, you acknowledge
          that you have read, understood, and agree to be bound by these Terms and
          our{" "}
          <Link
            href={routes.marketing.privacyPolicy}
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          . If you are accepting these Terms on behalf of an organization
          (laboratory, company, pharmacy, or other entity), you represent and
          warrant that you have the authority to bind that organization to these
          Terms.
        </p>
        <p>
          If you do not agree to these Terms, you must not access or use the
          Service.
        </p>
      </Section>

      <Section id={T.s2} title="2. Description of Service">
        <p>
          BioSure Lab Portal is a cloud-based Laboratory Information Management
          System (LIMS) designed to digitize and streamline the end-to-end workflow
          of environmental monitoring laboratories, with an initial focus on USP
          797 compliance testing for compounding pharmacy cleanrooms.
        </p>
        <p>The Service includes, but is not limited to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Laboratory management: Multi-tenant lab configuration, employee
            management, equipment tracking, organism databases, and signature
            management
          </li>
          <li>
            Client company management: Client organization onboarding, facility
            location management with floor plan uploads, sample location mapping,
            and employee access management
          </li>
          <li>
            Chain of custody (CoC) management: Digital creation, submission, and
            tracking of chain-of-custody forms for sample intake
          </li>
          <li>
            Sample result entry: CFU count recording, organism identification, plate
            image upload, incubation tracking, and alert/action level evaluation
          </li>
          <li>
            Report generation: Automated PDF lab report generation with historical
            trending analysis, electronic signatures, and version control
          </li>
          <li>
            Report management: Review and approval workflows, version history,
            client visibility controls, and bulk download capabilities
          </li>
          <li>
            Scheduling: Recurring sample submission scheduling with calendar views
            and occurrence tracking
          </li>
          <li>
            Client portal: Self-service portal for client companies to access
            reports, submit CoC forms, comment on reports, and manage their
            employees
          </li>
          <li>
            Notifications: Real-time in-app notifications and email alerts for key
            platform events
          </li>
          <li>
            Analytics and audit trails: Dashboard analytics, activity logging, and
            global search
          </li>
        </ul>
      </Section>

      <Section id={T.s3} title="3. User Accounts">
        <Sub title="3.1 Account Creation">
          <p>Accounts on BioSure Lab Portal are created through one of the following methods:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Lab tenant creation: A Super Administrator provisions a new laboratory
              tenant and creates the initial Lab Administrator account
            </li>
            <li>
              Lab employee invitation: A Lab Administrator creates employee accounts,
              which triggers an invitation email to the new user
            </li>
            <li>
              Client company onboarding: A Lab Administrator creates a Company
              Administrator account during client onboarding, which triggers an
              invitation email
            </li>
            <li>
              Client employee creation: A Company Administrator creates employee
              accounts for their organization
            </li>
          </ul>
          <p>
            You may not create an account using false or misleading information.
            Each user must have a unique, valid email address.
          </p>
        </Sub>
        <Sub title="3.2 Account Security">
          <p>You are responsible for:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Maintaining the confidentiality of your login credentials</li>
            <li>
              Changing your password upon first login when required by the system
            </li>
            <li>All activities that occur under your account</li>
            <li>
              Immediately notifying us of any unauthorized use of your account
            </li>
          </ul>
          <p>We implement the following security measures to protect your account:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Passwords are hashed using bcrypt and are never stored in plaintext
            </li>
            <li>
              Account lockout is automatically activated after a configurable number
              of failed login attempts
            </li>
            <li>
              Sessions are managed through JWT-based access tokens (30-minute
              expiry) and refresh tokens (1-day expiry)
            </li>
            <li>Rate limiting is applied to prevent brute-force attacks</li>
          </ul>
        </Sub>
        <Sub title="3.3 User Roles and Permissions">
          <p>
            The Service operates with a hierarchical permission model consisting of
            five user roles:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Super Admin: Platform-level administrators (RainerTek) with oversight
              across all lab tenants
            </li>
            <li>
              Lab Admin: Laboratory owners/directors with full control over their lab
              tenant, including employee management, company onboarding, and report
              approval
            </li>
            <li>
              Lab Employee: Laboratory technicians and staff with access to sample
              processing, result entry, and report generation as permitted by their
              assigned role
            </li>
            <li>
              Company Admin: Client organization managers with access to reports,
              CoC submission, employee management, and scheduling for their company
            </li>
            <li>
              Company Employee: Client organization staff with access to view
              reports and notifications for their company
            </li>
          </ul>
          <p>
            Access is further controlled through granular role-based access control
            (RBAC), which allows per-module and per-action permission configuration,
            as well as per-user permission overrides. You agree to use the Service
            only within the scope of the permissions assigned to your account.
          </p>
        </Sub>
      </Section>

      <Section id={T.s4} title="4. Subscription Plans and Billing">
        <Sub title="4.1 Plans">
          <p>
            BioSure Lab Portal is offered as a Software-as-a-Service (SaaS)
            subscription with the following plan tiers:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Free Tier: Limited to 1 lab user, 1 client company, 10 reports/month,
              and 1 GB storage
            </li>
            <li>
              Starter Plan: Up to 5 lab users, 15 client companies, unlimited
              reports, and 25 GB storage
            </li>
            <li>
              Professional Plan: Up to 25 lab users, unlimited client companies,
              advanced features including Template Builder, API access, webhooks,
              and 100 GB storage
            </li>
            <li>
              Enterprise Plan: Custom pricing for organizations requiring unlimited
              users, custom integrations, white-label branding, dedicated support,
              and compliance packages
            </li>
          </ul>
          <p>
            Client portal users (Company Admins and Company Employees) are provided
            free access on all plans and are never charged.
          </p>
        </Sub>
        <Sub title="4.2 Pricing and Payment">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Subscription fees are charged on a per-lab-user, per-month basis
            </li>
            <li>Annual billing is available at a discounted rate</li>
            <li>Payment is due at the beginning of each billing cycle</li>
            <li>All fees are quoted in United States Dollars (USD)</li>
            <li>
              Prices are exclusive of applicable taxes, which will be added where
              required by law
            </li>
          </ul>
        </Sub>
        <Sub title="4.3 Plan Changes">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You may upgrade your plan at any time; upgrades take effect immediately,
              and fees are prorated for the remainder of the current billing cycle
            </li>
            <li>
              You may downgrade your plan at the end of the current billing cycle,
              provided your usage falls within the limits of the target plan
            </li>
            <li>
              If your usage exceeds the limits of your current plan (e.g., user
              count, storage, or report volume), you may be required to upgrade or
              reduce usage
            </li>
          </ul>
        </Sub>
        <Sub title="4.4 Free Trial">
          <ul className="list-disc space-y-2 pl-5">
            <li>We may offer free trial periods at our discretion</li>
            <li>
              During a free trial, you will have access to the Service&apos;s features
              as specified in the trial offer
            </li>
            <li>
              At the end of the trial period, your account will convert to the Free
              Tier or you may select a paid plan to continue with full access
            </li>
            <li>
              We reserve the right to modify or discontinue trial offers at any time
            </li>
          </ul>
        </Sub>
        <Sub title="4.5 Refunds">
          <ul className="list-disc space-y-2 pl-5">
            <li>Subscription fees are generally non-refundable</li>
            <li>
              If you cancel a paid subscription before the end of a billing cycle,
              you will retain access until the end of that cycle; no partial refunds
              will be issued
            </li>
            <li>
              Refund exceptions may be granted at our sole discretion for billing
              errors or service disruptions covered under our uptime commitments
            </li>
          </ul>
        </Sub>
      </Section>

      <Section id={T.s5} title="5. Acceptable Use">
        <Sub title="5.1 Permitted Use">
          <p>
            You may use the Service solely for its intended purpose: managing
            laboratory information, environmental monitoring workflows, sample
            tracking, report generation, and client communication within a
            professional laboratory context.
          </p>
        </Sub>
        <Sub title="5.2 Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Use the Service for any unlawful purpose or in violation of any
              applicable local, state, national, or international law or regulation
            </li>
            <li>
              Access or attempt to access any other user&apos;s account, or any lab
              tenant&apos;s data that you are not authorized to view
            </li>
            <li>
              Circumvent, disable, or interfere with security features of the Service,
              including the role-based access control system, rate limiting, or
              tenant isolation mechanisms
            </li>
            <li>
              Attempt to reverse engineer, decompile, or disassemble any portion of
              the Service
            </li>
            <li>
              Upload, transmit, or distribute any malicious code, viruses, or harmful
              software through the Service
            </li>
            <li>
              Use the Service to store or transmit content that infringes the
              intellectual property rights of any third party
            </li>
            <li>
              Scrape, crawl, or use automated tools to extract data from the Service
              without our written consent
            </li>
            <li>
              Resell, sublicense, or commercially distribute the Service or any
              portion thereof without our express written permission
            </li>
            <li>
              Intentionally enter false, misleading, or fabricated laboratory data,
              sample results, or reports
            </li>
            <li>
              Use the Service in any manner that could damage, disable, overburden,
              or impair our servers or interfere with any other party&apos;s use of
              the Service
            </li>
            <li>
              Share login credentials or allow unauthorized individuals to access your
              account
            </li>
          </ul>
        </Sub>
        <Sub title="5.3 Data Accuracy">
          <p>
            Given the regulated nature of laboratory testing and environmental
            monitoring (USP 797 compliance), you acknowledge your responsibility to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Enter accurate and truthful data for all sample results, organism
              identifications, and CoC forms
            </li>
            <li>
              Ensure that generated reports accurately reflect the underlying test
              data
            </li>
            <li>Maintain proper chain-of-custody documentation standards</li>
            <li>
              Review and verify report content before approving and publishing to
              client companies
            </li>
          </ul>
          <p>
            The Service provides tools to facilitate accuracy (alert/action level
            calculations, historical trending, ISO class evaluations), but the
            accuracy and validity of the underlying data remains your responsibility.
          </p>
        </Sub>
      </Section>

      <Section id={T.s6} title="6. Data Ownership and Intellectual Property">
        <Sub title="6.1 Your Data">
          <p>
            You retain full ownership of all data you enter, upload, or generate
            through the Service, including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Laboratory configurations and settings</li>
            <li>Client company and employee information</li>
            <li>Chain-of-custody form data</li>
            <li>Sample results, organism identifications, and plate images</li>
            <li>Generated PDF reports and their contents</li>
            <li>Floor plan images and sample location mappings</li>
            <li>Comments and communications</li>
            <li>Scheduling configurations</li>
          </ul>
          <p>
            We claim no ownership rights over your data. We access and process your
            data solely to provide, maintain, and improve the Service as described
            in our{" "}
            <Link
              href={routes.marketing.privacyPolicy}
              className="text-[color:var(--accent)] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Sub>
        <Sub title="6.2 License to Us">
          <p>
            By uploading or entering data into the Service, you grant us a
            non-exclusive, worldwide, royalty-free license to host, store, process,
            and transmit your data solely for the purpose of providing the Service to
            you. This license terminates when you delete your data or close your
            account, subject to any legal retention obligations.
          </p>
        </Sub>
        <Sub title="6.3 Our Intellectual Property">
          <p>
            The Service — including its software, architecture, design, user
            interface, documentation, branding, logos, and all related intellectual
            property — is and remains the exclusive property of RainerTek. These Terms
            do not grant you any rights to our intellectual property except the
            limited right to use the Service as permitted herein.
          </p>
          <p>You may not:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Copy, modify, or create derivative works of the Service</li>
            <li>
              Use our trademarks, logos, or branding without our written consent
            </li>
            <li>
              Remove or alter any copyright, trademark, or proprietary notices from
              the Service
            </li>
          </ul>
        </Sub>
        <Sub title="6.4 Feedback">
          <p>
            If you provide us with suggestions, ideas, or feedback regarding the
            Service, you grant us an unrestricted, perpetual, irrevocable,
            royalty-free license to use such feedback for any purpose without
            compensation or attribution to you.
          </p>
        </Sub>
      </Section>

      <Section id={T.s7} title="7. Report Generation and Electronic Signatures">
        <Sub title="7.1 Report Generation">
          <p>
            The Service includes an automated Report Generator that produces PDF lab
            reports from your CoC and sample result data. You acknowledge that:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The Report Generator processes the data you have entered and produces
              reports based on that data
            </li>
            <li>
              The accuracy of generated reports is dependent on the accuracy of the
              input data
            </li>
            <li>
              Reports include historical trending analysis (mean, standard deviation,
              z-scores) calculated from previously entered data; the correctness of
              trending depends on the completeness and accuracy of historical
              records
            </li>
            <li>
              You are responsible for reviewing all generated reports before
              approving and publishing them to client companies
            </li>
          </ul>
        </Sub>
        <Sub title="7.2 Electronic Signatures">
          <p>
            The Service supports electronic signatures on lab reports (lab director,
            QC manager). By uploading and using electronic signatures:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You represent that you are authorized to use the signature and that
              the signature is a valid representation of your or the signatory&apos;s
              intent to approve the report
            </li>
            <li>
              You acknowledge that electronic signatures on reports constitute
              approval of the report&apos;s content
            </li>
            <li>
              You understand that the Service maintains version history and audit
              trails of all report approvals for compliance purposes
            </li>
          </ul>
        </Sub>
        <Sub title="7.3 Regulatory Compliance Readiness">
          <p>
            While the Service is designed with regulatory compliance in mind (USP
            797 workflows, audit trails, electronic signature support, 21 CFR Part 11
            readiness), the Service does not itself constitute regulatory compliance.
            You remain solely responsible for ensuring that your laboratory
            operations, testing procedures, and reporting practices comply with all
            applicable regulations, standards, and guidelines, including USP 797,
            USP 800, ISO 17025, 21 CFR Part 11, and any state or federal
            requirements.
          </p>
        </Sub>
      </Section>

      <Section id={T.s8} title="8. Service Availability and Support">
        <Sub title="8.1 Uptime">
          <p>
            We will use commercially reasonable efforts to maintain the availability
            of the Service. Our target uptime is 99.9% measured on a monthly basis,
            excluding scheduled maintenance windows. Enterprise plan customers may
            negotiate custom Service Level Agreements (SLAs) with higher uptime
            commitments.
          </p>
          <p>
            Planned maintenance will be scheduled during low-usage periods where
            possible, and we will provide advance notice of significant maintenance
            windows.
          </p>
        </Sub>
        <Sub title="8.2 Support">
          <p>Support levels vary by plan:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Free Tier: Community documentation</li>
            <li>
              Starter Plan: Email support with a 48-hour response target
            </li>
            <li>
              Professional Plan: Priority email support with a 24-hour response
              target, plus live chat
            </li>
            <li>
              Enterprise Plan: Phone support, dedicated Slack channel, and dedicated
              account manager
            </li>
          </ul>
        </Sub>
        <Sub title="8.3 Modifications to the Service">
          <p>
            We reserve the right to modify, update, or discontinue any feature or
            aspect of the Service at any time. For material changes that reduce
            functionality available on your current plan, we will provide at least
            30 days&apos; advance notice and, where possible, offer alternatives or
            migration paths.
          </p>
        </Sub>
      </Section>

      <Section id={T.s9} title="9. Third-Party Services">
        <p>
          The Service integrates with or relies upon the following categories of
          third-party services:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cloud infrastructure providers for hosting and compute</li>
          <li>
            Amazon Web Services (AWS) S3 for file storage (reports, images, floor
            plans)
          </li>
          <li>
            Cloudinary as an alternative file storage option in development/QA
            environments
          </li>
          <li>SMTP email providers for transactional email delivery</li>
          <li>Redis for message queue management</li>
        </ul>
        <p>
          Your use of the Service is also subject to the terms and policies of these
          third-party providers where applicable. We are not responsible for the
          practices, availability, or security of third-party services beyond our
          contractual obligations with them.
        </p>
      </Section>

      <Section id={T.s10} title="10. Limitation of Liability">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">
              10.1 Disclaimer of Warranties
            </h3>
            <LegalCallout>
              <div className="space-y-3">
                <p>
                  THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER
                  EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE MAXIMUM EXTENT
                  PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT
                  LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.
                </p>
                <p>WE DO NOT WARRANT THAT:</p>
                <ul className="list-disc space-y-2 pl-5 font-semibold normal-case tracking-normal">
                  <li>
                    THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY
                    SECURE
                  </li>
                  <li>
                    THE RESULTS OBTAINED FROM THE SERVICE WILL BE ACCURATE OR
                    RELIABLE
                  </li>
                  <li>
                    THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS OR REGULATORY
                    OBLIGATIONS
                  </li>
                  <li>ANY DEFECTS IN THE SERVICE WILL BE CORRECTED</li>
                </ul>
              </div>
            </LegalCallout>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">
              10.2 Limitation of Liability
            </h3>
            <LegalCallout>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                RAINERTEK, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES
                BE LIABLE FOR:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
                </li>
                <li>
                  ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS
                  OPPORTUNITY
                </li>
                <li>
                  DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE
                </li>
                <li>
                  DAMAGES ARISING FROM ERRORS, INACCURACIES, OR OMISSIONS IN REPORT
                  GENERATION OR DATA PROCESSING
                </li>
                <li>
                  DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
                  DATA
                </li>
                <li>
                  ANY AMOUNT EXCEEDING THE TOTAL FEES PAID BY YOU TO US IN THE TWELVE
                  (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE
                  CLAIM
                </li>
              </ul>
            </LegalCallout>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">
              10.3 Acknowledgment of Risk
            </h3>
            <p>You acknowledge that:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Laboratory testing, environmental monitoring, and regulatory
                compliance involve inherent risks and professional judgment that the
                Service cannot replace
              </li>
              <li>
                The Service is a tool to facilitate your laboratory workflows; it is
                not a substitute for qualified laboratory personnel, professional
                judgment, or regulatory compliance expertise
              </li>
              <li>
                You are solely responsible for the accuracy, legality, and
                appropriateness of all data entered into and reports generated from
                the Service
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id={T.s11} title="11. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless RainerTek, its officers,
          directors, employees, agents, and affiliates from and against any claims,
          damages, losses, liabilities, costs, and expenses (including reasonable
          attorney&apos;s fees) arising from:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your use of the Service in violation of these Terms</li>
          <li>Your violation of any applicable law, regulation, or third-party rights</li>
          <li>
            The content, accuracy, or legality of the data you enter into the Service
          </li>
          <li>Laboratory reports generated from your data</li>
          <li>
            Any dispute between you and your laboratory clients, employees, or
            regulators
          </li>
          <li>Your failure to maintain adequate account security</li>
        </ul>
      </Section>

      <Section id={T.s12} title="12. Termination">
        <Sub title="12.1 Termination by You">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You may cancel your subscription at any time through your account
              settings or by contacting us
            </li>
            <li>
              Cancellation takes effect at the end of the current billing cycle
            </li>
            <li>
              Upon cancellation, you will retain access to the Service until the end
              of the paid period, after which your account will revert to the Free
              Tier or be deactivated
            </li>
          </ul>
        </Sub>
        <Sub title="12.2 Termination by Us">
          <p>
            We may suspend or terminate your access to the Service, with or without
            notice, if:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You breach any provision of these Terms</li>
            <li>
              Your subscription payment fails and is not resolved within a reasonable
              grace period
            </li>
            <li>
              You engage in conduct that we reasonably believe is harmful to the
              Service, other users, or our business interests
            </li>
            <li>We are required to do so by law or regulatory authority</li>
            <li>We discontinue the Service entirely (with at least 90 days&apos; notice)</li>
          </ul>
        </Sub>
        <Sub title="12.3 Effect of Termination">
          <p>Upon termination:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Your right to access the Service ceases immediately (or at the end of
              your paid period, in the case of voluntary cancellation)
            </li>
            <li>
              We will retain your data for a period of 30 days following termination
              to allow for data export or reactivation
            </li>
            <li>
              After the 30-day retention period, we will delete or de-identify your
              data, except where retention is required by law or for audit trail
              purposes
            </li>
            <li>
              You may request an export of your data during the retention period by
              contacting us
            </li>
            <li>
              Provisions of these Terms that by their nature should survive
              termination (including Sections 6, 10, 11, and 14) will continue to apply
            </li>
          </ul>
        </Sub>
      </Section>

      <Section id={T.s13} title="13. Data Protection and Security">
        <p>
          Please refer to our{" "}
          <Link
            href={routes.marketing.privacyPolicy}
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for comprehensive details on how we collect, use, store, and protect your
          data.
        </p>
        <p>Key security commitments include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            All data encrypted in transit (TLS 1.2+) and at rest (AES-256 for stored
            files)
          </li>
          <li>Password hashing with bcrypt</li>
          <li>Role-based access control with per-user permission overrides</li>
          <li>Multi-tenant data isolation at the database query level</li>
          <li>Complete audit trails for all data mutations</li>
          <li>Automated database backups</li>
          <li>Rate limiting and input validation on all API endpoints</li>
          <li>SQL injection and XSS protection</li>
          <li>CORS restrictions to allowed origins</li>
        </ul>
      </Section>

      <Section id={T.s14} title="14. General Provisions">
        <Sub title="14.1 Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the United States and the State of Delaware, without regard to
            its conflict of law provisions. Any disputes arising from these Terms or
            the Service shall be subject to the exclusive jurisdiction of the state
            and federal courts located in Delaware.
          </p>
        </Sub>
        <Sub title="14.2 Entire Agreement">
          <p>
            These Terms, together with our{" "}
            <Link
              href={routes.marketing.privacyPolicy}
              className="text-[color:var(--accent)] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and any plan-specific terms or order forms, constitute the entire
            agreement between you and RainerTek regarding the Service and supersede
            all prior agreements, communications, and understandings.
          </p>
        </Sub>
        <Sub title="14.3 Severability">
          <p>
            If any provision of these Terms is held to be invalid or unenforceable,
            the remaining provisions shall continue in full force and effect. The
            invalid or unenforceable provision shall be modified to the minimum
            extent necessary to make it valid and enforceable.
          </p>
        </Sub>
        <Sub title="14.4 Waiver">
          <p>
            Our failure to enforce any right or provision of these Terms shall not
            constitute a waiver of that right or provision. Any waiver must be in
            writing and signed by an authorized representative of RainerTek.
          </p>
        </Sub>
        <Sub title="14.5 Assignment">
          <p>
            You may not assign or transfer your rights or obligations under these
            Terms without our prior written consent. We may assign our rights and
            obligations without restriction.
          </p>
        </Sub>
        <Sub title="14.6 Force Majeure">
          <p>
            We shall not be liable for any failure or delay in performing our
            obligations under these Terms due to causes beyond our reasonable
            control, including natural disasters, acts of government, internet or
            infrastructure failures, pandemics, or third-party service outages.
          </p>
        </Sub>
        <Sub title="14.7 Notices">
          <p>
            Notices to you may be sent to the email address associated with your
            account. Notices to us should be sent to the contact information listed
            below. Notices are deemed received upon delivery for email communications.
          </p>
        </Sub>
      </Section>

      <Section id={T.s15} title="15. Contact Us">
        <p>If you have questions about these Terms, please contact us:</p>
        <p className="font-medium text-[color:var(--text)]">RainerTek</p>
        <p>
          Email:{" "}
          <a
            href="mailto:legal@biosurelab.com"
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            legal@biosurelab.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://biosurelab.com"
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://biosurelab.com
          </a>
        </p>
      </Section>
    </>
  );
}
