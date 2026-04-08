import { redirect } from "next/navigation";
import { routes } from "@/constants/routes";

export default function OrganizationsPage() {
  redirect(routes.marketing.company);
}

