import { type LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavUser = {
  name: string;
  email: string;
  avatar: string;
};
