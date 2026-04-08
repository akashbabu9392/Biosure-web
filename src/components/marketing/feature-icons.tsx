import type * as React from "react";
import type { ComponentProps } from "react";

export type FeatureIconId =
  | "chainOfCustody"
  | "pdfReports"
  | "clientPortal"
  | "analytics"
  | "notifications"
  | "rbac";

export type RoiIconId = "timeSaved" | "noCalls" | "compliance";

export type MarketingIconId = "earlyAdopter" | "roi" | "pricing" | "customers";

type SvgProps = Omit<ComponentProps<"svg">, "children">;

function baseSvgProps(props?: SvgProps): SvgProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

function ChainOfCustodyIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      {/* Orders/package-style icon (matches dashboard Orders) */}
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
      <path d="m7.5 4.27 9 5.15" />
    </svg>
  );
}

function PdfReportsIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function ClientPortalIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      {/* Simple user/portal icon */}
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function AnalyticsIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M4 19V5" />
      <path d="M20 19H4" />
      <path d="M7 15l3-3 3 2 5-6" />
      <path d="M18 8v4h-4" />
    </svg>
  );
}

function NotificationsIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function RbacIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6Z" />
      <path d="M9.5 12l1.8 1.8 3.7-3.7" />
    </svg>
  );
}

const featureIcons: Record<FeatureIconId, (props: SvgProps) => React.JSX.Element> = {
  chainOfCustody: ChainOfCustodyIcon,
  pdfReports: PdfReportsIcon,
  clientPortal: ClientPortalIcon,
  analytics: AnalyticsIcon,
  notifications: NotificationsIcon,
  rbac: RbacIcon,
};

export function FeatureIcon({
  id,
  ...props
}: { id: FeatureIconId } & SvgProps) {
  const Icon = featureIcons[id];
  return <Icon {...props} />;
}

function TimeSavedIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M12 8v4l2 2" />
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
    </svg>
  );
}

function NoCallsIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.51a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.57-1.09a2 2 0 0 1 2.11-.45c.81.26 1.65.45 2.51.57A2 2 0 0 1 22 16.92Z" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

function ComplianceIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6Z" />
      <path d="M9.5 12l1.8 1.8 3.7-3.7" />
    </svg>
  );
}

const roiIcons: Record<RoiIconId, (props: SvgProps) => React.JSX.Element> = {
  timeSaved: TimeSavedIcon,
  noCalls: NoCallsIcon,
  compliance: ComplianceIcon,
};

export function RoiIcon({ id, ...props }: { id: RoiIconId } & SvgProps) {
  const Icon = roiIcons[id];
  return <Icon {...props} />;
}

function EarlyAdopterIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6a6 6 0 1 0 6 6" />
      <path d="M12 10a2 2 0 1 0 2 2" />
      <path d="M22 2l-4 4" />
    </svg>
  );
}

function RoiMoneyIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6Z" />
      <path d="M9.5 12h5" />
      <path d="M12 9.5v5" />
    </svg>
  );
}

function PricingTagIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M20.59 13.41 12 22 2 12 10.59 3.41A2 2 0 0 1 12 3h6a2 2 0 0 1 2 2v6a2 2 0 0 1-.41 1.41Z" />
      <path d="M16 7h.01" />
    </svg>
  );
}

function CustomersChatIcon(props: SvgProps) {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M7.5 9.5h7" />
      <path d="M7.5 12.5h5" />
    </svg>
  );
}

const marketingIcons: Record<MarketingIconId, (props: SvgProps) => React.JSX.Element> =
  {
    earlyAdopter: EarlyAdopterIcon,
    roi: RoiMoneyIcon,
    pricing: PricingTagIcon,
    customers: CustomersChatIcon,
  };

export function MarketingIcon({
  id,
  ...props
}: { id: MarketingIconId } & SvgProps) {
  const Icon = marketingIcons[id];
  return <Icon {...props} />;
}

