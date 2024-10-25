import { LayoutDashboardIcon, User } from "lucide-react";

export const routes = [
    {
      href: "/",
      label:"Dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      href: "/users",
      label:"Users",
      icon: <User />,
    },
  ];