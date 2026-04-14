import type { ReactNode } from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";

const P = {
  s1: "section-1-introduction",
  s2: "section-2-information-we-collect",
  s3: "section-3-how-we-use-your-information",
  s4: "section-4-how-we-store-and-protect-your-information",
  s5: "section-5-data-sharing-and-disclosure",
  s6: "section-6-data-retention",
  s7: "section-7-your-rights-and-choices",
  s8: "section-8-cookies-and-tracking-technologies",
  s9: "section-9-childrens-privacy",
  s10: "section-10-international-data-transfers",
  s11: "section-11-changes-to-this-privacy-policy",
  s12: "section-12-contact-us",
} as const;

export const privacyPolicyToc = [
  { id: P.s1, label: "1. Introduction" },
  { id: P.s2, label: "2. Information We Collect" },
  { id: P.s3, label: "3. How We Use Your Information" },
  { id: P.s4, label: "4. How We Store & Protect Your Information" },
  { id: P.s5, label: "5. Data Sharing & Disclosure" },
  { id: P.s6, label: "6. Data Retention" },
  { id: P.s7, label: "7. Your Rights & Choices" },
  { id: P.s8, label: "8. Cookies & Tracking Technologies" },
  { id: P.s9, label: "9. Children's Privacy" },
  { id: P.s10, label: "10. International Data Transfers" },
  { id: P.s11, label: "11. Changes to This Privacy Policy" },
  { id: P.s12, label: "12. Contact Us" },
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

export function PrivacyPolicyBody() {
  return (
    <>
      <Section id={P.s1} title="1. Introduction">
        <p>
          BioSure Lab Portal (&quot;BioSure,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) is a cloud-based Laboratory Information Management
          System (LIMS) operated by RainerTek. We are committed to protecting the
          privacy of our users — including laboratory administrators, lab
          technicians, client company administrators, client company employees,
          and platform visitors.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you access or use the BioSure Lab Portal platform
          (available at biosurelab.com and associated subdomains), our application
          programming interfaces (APIs), and any related services (collectively,
          the &quot;Service&quot;).
        </p>
        <p>
          By accessing or using the Service, you agree to the terms of this Privacy
          Policy. Use of the Service is also governed by our{" "}
          <Link
            href={routes.marketing.termsAndConditions}
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            Terms &amp; Conditions
          </Link>
          . If you do not agree, please discontinue use of the Service immediately.
        </p>
      </Section>

      <Section id={P.s2} title="2. Information We Collect">
        <Sub title="2.1 Account & Identity Information">
          <p>When you register for or are invited to the Service, we collect:</p>
          <ul className="list-disc space-y-2 pl-5 text-[color:var(--text)]">
            <li>
              Personal identifiers: Full name (first and last), email address,
              phone number
            </li>
            <li>
              Professional information: Job title/designation, role within the
              organization (Lab Admin, Lab Employee, Company Admin, Company
              Employee)
            </li>
            <li>
              Authentication credentials: Password (stored as a bcrypt hash — we
              never store plaintext passwords), login attempt records, and session
              tokens
            </li>
            <li>Profile media: Avatar/profile images you choose to upload</li>
          </ul>
        </Sub>
        <Sub title="2.2 Laboratory & Organization Data">
          <p>If you are a laboratory user, we collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Lab information: Lab name, email, phone number, physical address, lab
              code
            </li>
            <li>
              Lab configuration: Report code sequences, lab settings, electronic
              signature images (lab director, QC manager)
            </li>
            <li>
              Equipment records: Air sampler serial numbers, calibration dates, and
              manufacturer details
            </li>
            <li>
              Organism database entries: Bacterial, yeast, mold, and indicator
              organism records maintained by the lab
            </li>
            <li>
              Lookup data: ISO classification records, media types, sample types, and
              environmental conditions
            </li>
          </ul>
        </Sub>
        <Sub title="2.3 Client Company Data">
          <p>
            If your laboratory manages client companies through the Service, we
            process:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Company details: Company name, email, company code, company type,
              status, and logo
            </li>
            <li>
              Contact information: Principal contacts, sampling contacts, and billing
              contacts (names, phone numbers, email addresses, physical addresses)
            </li>
            <li>
              Location data: Facility addresses, floor plan images, and sample
              location mapping configurations
            </li>
            <li>
              Employee records: Names, email addresses, phone numbers,
              designations, and notification preferences of company employees
              registered on the portal
            </li>
          </ul>
        </Sub>
        <Sub title="2.4 Chain of Custody & Testing Data">
          <p>
            When you create, submit, or process chain-of-custody (CoC) forms and
            sample results, we collect:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Customer information: Name, phone, email, and address on CoC forms
            </li>
            <li>
              Order details: Analysis methods, identification criteria, collection
              information, and notes
            </li>
            <li>
              Media lot tracking data: Manufacturer, lot number, and expiry dates
            </li>
            <li>
              Sample results: Colony-forming unit (CFU) counts, organism
              identifications, incubation parameters (temperature, start/end times,
              duration), alert/action level evaluations, and ISO class compliance
              results
            </li>
            <li>
              Laboratory images: Bacterial and fungal plate photographs uploaded
              during sample result entry
            </li>
            <li>
              Air sampler data: Sampler associations, serial numbers, and calibration
              records per sample
            </li>
          </ul>
        </Sub>
        <Sub title="2.5 Reports & Documents">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Generated PDF reports: Environmental monitoring reports containing
              sample results, historical trending data (mean, standard deviation,
              z-scores), floor plan pages, organism identification descriptions, and
              electronic signatures
            </li>
            <li>
              Report metadata: Report codes, version history, approval/rejection
              status, reviewer remarks, and visibility settings
            </li>
            <li>
              Floor plan uploads: Facility floor plan images uploaded by lab or
              company users
            </li>
          </ul>
        </Sub>
        <Sub title="2.6 Communication & Collaboration Data">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Comments and replies: Threaded comments on reports between lab and
              client company users
            </li>
            <li>
              Notification preferences: Your email and in-app notification settings per
              notification category
            </li>
            <li>
              Email communications: Transactional emails sent by the system (report
              notifications, account invitations, password resets, comment alerts)
            </li>
          </ul>
        </Sub>
        <Sub title="2.7 Usage & Activity Data">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Activity logs: We maintain a detailed audit trail of all user actions
              within the platform, including module accessed, action performed,
              timestamp, and user attribution
            </li>
            <li>
              Authentication events: Login timestamps, failed login attempts,
              account lockout events, password change events, and session refresh
              events
            </li>
            <li>
              Dashboard analytics: Aggregated usage metrics such as report counts,
              company statistics, and operational trends
            </li>
          </ul>
        </Sub>
        <Sub title="2.8 Technical & Device Data">
          <p>When you access the Service, we automatically collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Device information: Browser type and version, operating system
            </li>
            <li>Network data: IP address, referring URL</li>
            <li>
              Usage patterns: Pages viewed, features accessed, and time spent on the
              platform
            </li>
            <li>
              Real-time connection data: WebSocket connection metadata for real-time
              notification delivery
            </li>
          </ul>
        </Sub>
      </Section>

      <Section id={P.s3} title="3. How We Use Your Information">
        <Sub title="3.1 Service Delivery & Operations">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Providing and operating the LIMS platform, including multi-tenant lab
              management, sample tracking, result entry, and PDF report generation
            </li>
            <li>
              Processing chain-of-custody forms and managing the complete
              environmental monitoring workflow
            </li>
            <li>
              Generating, storing, and delivering PDF lab reports through our Report
              Generator microservice
            </li>
            <li>
              Facilitating real-time notifications and email alerts for reports,
              comments, scheduling events, and account changes
            </li>
            <li>
              Managing user accounts, authentication, and role-based access control
              (RBAC) with granular per-module permissions
            </li>
          </ul>
        </Sub>
        <Sub title="3.2 Security & Compliance">
          <ul className="list-disc space-y-2 pl-5">
            <li>Authenticating users via JWT-based token verification</li>
            <li>
              Enforcing account lockout policies after failed login attempts
            </li>
            <li>
              Maintaining complete audit trails for regulatory compliance readiness
              (USP 797, 21 CFR Part 11)
            </li>
            <li>
              Detecting and preventing unauthorized access, fraud, and security
              threats through rate limiting, input validation, and SQL injection/XSS
              protection
            </li>
            <li>Performing data backups for disaster recovery</li>
          </ul>
        </Sub>
        <Sub title="3.3 Improvement & Analytics">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Analyzing platform usage patterns to improve features and user
              experience
            </li>
            <li>
              Generating aggregated, de-identified analytics for internal business
              insights
            </li>
            <li>Monitoring system performance and infrastructure health</li>
          </ul>
        </Sub>
        <Sub title="3.4 Communications">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Sending transactional emails (account invitations, password resets,
              report notifications, comment alerts, scheduling reminders)
            </li>
            <li>
              Delivering in-app real-time notifications via our WebSocket-based
              notification system
            </li>
            <li>Responding to support inquiries and user feedback</li>
          </ul>
        </Sub>
      </Section>

      <Section id={P.s4} title="4. How We Store & Protect Your Information">
        <Sub title="4.1 Infrastructure & Storage">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Database: Your data is stored in PostgreSQL databases hosted on secure
              cloud infrastructure
            </li>
            <li>
              File storage: Reports (PDFs), plate images, floor plans, avatars, and
              logos are stored in Amazon Web Services S3 with encryption at rest
            </li>
            <li>
              Queue system: Email delivery is processed through Redis-backed message
              queues (BullMQ) for reliable asynchronous delivery
            </li>
            <li>
              Real-time: WebSocket connections are managed through Socket.IO for
              in-app notification delivery
            </li>
          </ul>
        </Sub>
        <Sub title="4.2 Security Measures">
          <p>We implement a defense-in-depth security architecture:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Encryption in transit: All data transmitted between your browser and
              our servers is encrypted using TLS 1.2 or higher
            </li>
            <li>
              Encryption at rest: Data stored in AWS S3 is encrypted using AES-256
              encryption
            </li>
            <li>
              Password security: All passwords are hashed using bcrypt with
              configurable salt rounds — we never store or have access to your
              plaintext password
            </li>
            <li>
              Access control: Granular role-based access control (RBAC) ensures users
              can only access data within their authorized scope; every database
              query is filtered by tenant (lab) isolation
            </li>
            <li>
              Network security: CORS is configured for allowed origins only; HTTP
              security headers are enforced via Helmet; API rate limiting is applied
              at 100 requests per 15-minute window per IP
            </li>
            <li>
              Input protection: All user inputs are validated via schema validation
              (Joi), and protected against SQL injection and cross-site scripting
              (XSS) attacks
            </li>
            <li>
              File access: Files stored in S3 are accessed through presigned URLs with
              time-limited access
            </li>
            <li>
              Soft deletion: Primary entities are logically deleted (soft delete)
              rather than permanently removed, preserving audit trail integrity
            </li>
          </ul>
        </Sub>
        <Sub title="4.3 Multi-Tenant Isolation">
          <p>
            BioSure Lab Portal operates a logical multi-tenant architecture. Each
            laboratory is an isolated tenant — data belonging to one lab is never
            accessible to users of another lab. Every query is filtered by the
            lab&apos;s unique identifier at the service layer. Super Administrators
            (RainerTek platform operators) may access lab data solely for platform
            management, support, and monitoring purposes.
          </p>
        </Sub>
      </Section>

      <Section id={P.s5} title="5. Data Sharing & Disclosure">
        <Sub title="5.1 Within the Platform">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Lab-to-client sharing: Reports, scheduling data, and CoC form data are
              shared between lab users and their associated client company users
              according to the visibility settings configured by the lab
            </li>
            <li>
              Role-based visibility: Users see only the data their role and
              permissions authorize; company employees see data scoped to their
              company; lab employees see data scoped to their lab
            </li>
          </ul>
        </Sub>
        <Sub title="5.2 Third-Party Service Providers">
          <p>
            We share limited data with the following categories of service providers
            who assist in operating the Service:
          </p>
          <div className="overflow-x-auto rounded-lg border border-[color:var(--border)]">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[color:var(--border)] bg-[color:var(--bg2)]">
                  <th className="border-r border-[color:var(--border)] px-4 py-3 font-semibold text-[color:var(--text)]">
                    Provider Category
                  </th>
                  <th className="border-r border-[color:var(--border)] px-4 py-3 font-semibold text-[color:var(--text)]">
                    Purpose
                  </th>
                  <th className="px-4 py-3 font-semibold text-[color:var(--text)]">
                    Data Shared
                  </th>
                </tr>
              </thead>
              <tbody className="text-[color:var(--text)]">
                <tr className="border-b border-[color:var(--border)]">
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    Cloud hosting provider
                  </td>
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    Infrastructure and compute
                  </td>
                  <td className="px-4 py-3 align-top">
                    All platform data (encrypted)
                  </td>
                </tr>
                <tr className="border-b border-[color:var(--border)]">
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    AWS S3 / Cloudinary
                  </td>
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    File storage
                  </td>
                  <td className="px-4 py-3 align-top">
                    Reports, images, floor plans
                  </td>
                </tr>
                <tr className="border-b border-[color:var(--border)]">
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    SMTP email provider
                  </td>
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    Transactional email delivery
                  </td>
                  <td className="px-4 py-3 align-top">
                    Recipient email addresses, notification content
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    Domain and DNS providers
                  </td>
                  <td className="border-r border-[color:var(--border)] px-4 py-3 align-top">
                    Website delivery and SSL
                  </td>
                  <td className="px-4 py-3 align-top">None (infrastructure only)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            All third-party providers are bound by contractual obligations to protect
            your data and use it only for the specific purposes we engage them for.
          </p>
        </Sub>
        <Sub title="5.3 Legal & Compliance Disclosures">
          <p>
            We may disclose your information if required to do so by law,
            regulation, legal process, or governmental request, or when we believe
            disclosure is necessary to protect our rights, your safety, or the safety
            of others.
          </p>
        </Sub>
        <Sub title="5.4 Business Transfers">
          <p>
            In the event of a merger, acquisition, reorganization, or sale of
            assets, your information may be transferred to the successor entity. We
            will notify you of any such change and any choices you may have
            regarding your information.
          </p>
        </Sub>
        <Sub title="5.5 What We Do NOT Do">
          <ul className="list-disc space-y-2 pl-5">
            <li>We do not sell your personal information to third parties</li>
            <li>
              We do not use your data for advertising or behavioral profiling
            </li>
            <li>
              We do not share your laboratory testing data, sample results, or
              client company data with other labs or external parties unless
              required by law
            </li>
          </ul>
        </Sub>
      </Section>

      <Section id={P.s6} title="6. Data Retention">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Active account data: We retain your personal information and platform data
            for as long as your account is active and the Service is in use by your
            organization
          </li>
          <li>
            Deleted data: When entities are deleted within the platform, they undergo
            soft deletion (logical delete with a timestamp). Soft-deleted data may
            be retained for a period to support audit trail integrity and potential
            recovery, after which it may be permanently purged
          </li>
          <li>
            Activity logs: Activity log retention varies by subscription plan —
            Starter plan retains 90 days, Professional plan retains 1 year, and
            Enterprise plans offer unlimited retention
          </li>
          <li>
            Authentication tokens: Refresh tokens expire after 1 day; access tokens
            expire after 30 minutes. Expired tokens are not retained
          </li>
          <li>
            Post-termination: Upon account termination or subscription cancellation,
            we will retain your data for a reasonable period (typically 30 days) to
            allow for reactivation or data export. After that period, we will delete
            or de-identify your data, except where retention is required by law or for
            legitimate audit purposes
          </li>
        </ul>
      </Section>

      <Section id={P.s7} title="7. Your Rights & Choices">
        <Sub title="7.1 Access & Portability">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can access your profile information, notification preferences, and
              activity history through the platform interface at any time
            </li>
            <li>
              Lab Administrators can export report data in CSV/Excel format
            </li>
            <li>
              You may request a copy of your personal data by contacting us at the
              email address listed below
            </li>
          </ul>
        </Sub>
        <Sub title="7.2 Correction">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can update your name, phone number, designation, and notification
              preferences directly in the platform
            </li>
            <li>Lab Administrators can update company and employee information</li>
            <li>
              For corrections to data you cannot modify yourself, contact us
            </li>
          </ul>
        </Sub>
        <Sub title="7.3 Deletion">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Lab Administrators can deactivate or archive companies and user
              accounts
            </li>
            <li>
              You may request deletion of your personal data by contacting us; we
              will comply subject to any legal retention obligations or audit trail
              requirements
            </li>
            <li>
              Note: Due to the regulatory nature of laboratory data (USP 797
              compliance, 21 CFR Part 11), certain records may need to be retained for
              audit purposes even after a deletion request
            </li>
          </ul>
        </Sub>
        <Sub title="7.4 Notification Preferences">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You can control your email and in-app notification preferences per
              category through your account settings
            </li>
            <li>
              You may opt out of non-essential email notifications at any time;
              transactional emails related to account security (password resets,
              lockout alerts) cannot be opted out of
            </li>
          </ul>
        </Sub>
        <Sub title="7.5 Account Closure">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Contact your Lab Administrator or Company Administrator to request
              account deactivation
            </li>
            <li>Contact us directly to request complete account deletion</li>
          </ul>
        </Sub>
      </Section>

      <Section id={P.s8} title="8. Cookies & Tracking Technologies">
        <p>
          BioSure Lab Portal uses minimal cookies and local storage strictly
          necessary for the operation of the Service:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Authentication tokens: Access and refresh tokens stored in secure,
            HTTP-only cookies or browser storage for session management
          </li>
          <li>
            Session preferences: UI preferences such as sidebar state and theme
            selection
          </li>
          <li>
            We do not use third-party advertising cookies, social media tracking
            pixels, or behavioral analytics cookies
          </li>
        </ul>
      </Section>

      <Section id={P.s9} title="9. Children's Privacy">
        <p>
          BioSure Lab Portal is a professional laboratory information management tool
          designed for use by laboratory professionals, pharmacy quality managers,
          and healthcare personnel. The Service is not intended for use by individuals
          under the age of 18 (or the applicable age of majority in your
          jurisdiction). We do not knowingly collect personal information from
          children. If you believe a child has provided us with personal data,
          please contact us and we will delete such information promptly.
        </p>
      </Section>

      <Section id={P.s10} title="10. International Data Transfers">
        <p>
          BioSure Lab Portal infrastructure is currently hosted in the United States.
          If you access the Service from outside the United States, your information
          may be transferred to, stored in, and processed in the United States. By
          using the Service, you consent to the transfer of your information to the
          United States, which may have data protection laws that differ from those
          in your country.
        </p>
      </Section>

      <Section id={P.s11} title="11. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in
          our practices, technologies, legal requirements, or other factors. When
          we make material changes:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            We will update the &quot;Last Updated&quot; date at the top of this policy
          </li>
          <li>
            We will notify registered users via email or in-app notification for
            significant changes
          </li>
          <li>
            Continued use of the Service after the effective date of changes
            constitutes your acceptance of the revised policy
          </li>
        </ul>
      </Section>

      <Section id={P.s12} title="12. Contact Us">
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy
          or our data practices, please contact us:
        </p>
        <p className="font-medium text-[color:var(--text)]">RainerTek</p>
        <p>
          Email:{" "}
          <a
            href="mailto:privacy@biosurelab.com"
            className="text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            privacy@biosurelab.com
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
        <p>
          For data access, correction, or deletion requests, please email us with
          the subject line &quot;Privacy Request&quot; and include your full name,
          email address associated with your account, and a description of your
          request.
        </p>
      </Section>
    </>
  );
}
