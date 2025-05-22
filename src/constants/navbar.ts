import { NavItem, NavUser } from "@/types/navbar";
import { LayoutDashboardIcon, UsersIcon } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboardIcon },
  { label: "Users", href: "/users", icon: UsersIcon },
];

export const NAV_USER: NavUser = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};
