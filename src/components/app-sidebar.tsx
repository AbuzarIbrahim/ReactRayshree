import * as React from "react";
import {
  LayoutDashboard,
  Search,
  ToggleLeft,
  Users,
  BriefcaseMedical,
  Stethoscope,
  Eye,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../assets/images.png";

const data = {
  user: {
    name: "Admin",
    email: "Admin@rayshree.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      items: [
        {
          title: "By Notes",
          url: "/search/notes",
        },
      ],
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
      items: [
        {
          title: "By Notes",
          url: "/search/notes",
        },
      ],
    },
    {
      title: "Enquiries",
      url: "/Enquiries",
      icon: ToggleLeft,
      items: [
        {
          title: "All",
          url: "/Enquiries/all",
        },
        {
          title: "Open",
          url: "/Enquiries/open",
        },
        {
          title: "Close",
          url: "/Enquiries/close",
        },
        {
          title: "Critical",
          url: "/Enquiries/critical",
        },
        {
          title: "Rejected",
          url: "/Enquiries/rejected",
        },
      ],
    },
    {
      title: "Patients",
      icon: Users,
      items: [
        {
          title: "Patients",
          url: "/patients",
        },
        {
          title: "All Patients",
          url: "/patients/all",
        },
      ],
    },
    {
      title: "OPD Patients",
      icon: BriefcaseMedical,
      items: [
        {
          title: "Spine Appointments",
          url: "/opd-patients/todays-spine-appointment",
        },
        {
          title: "Piles Appointments",
          url: "/opd-patients/todays-piles-appointment",
        },
        {
          title: "Previous OPDs",
          url: "/opd-patients/previous-opds",
        },
      ],
    },
    {
      title: "Pharmacy",
      icon: Stethoscope,
      items: [
        {
          title: "Medicine Manufacturer",
          url: "/pharmacy/medicine-manufacturer",
        },
        {
          title: "Medicine Create",
          url: "/pharmacy/medicine-create",
        },
        {
          title: "Medicine Purchase",
          url: "/pharmacy/medicine-purchase",
        },
        {
          title: "Medicine Sale",
          url: "/pharmacy/medicine-sale",
        },
        {
          title: "Medicine Stock",
          url: "/pharmacy/medicine-stock",
        },
      ],
    },
    {
      title: "CheckUp",
      icon: Eye,
      items: [
        {
          title: "Check Up List",
          url: "/checkup/check-up-list",
        },
        {
          title: "Diagnostic Center",
          url: "/checkup/diagnostic-center",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "HOME",
      url: "https://www.rayshreeayurveda.com",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="bg-gray-50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link
                to="https://rayshreeayurveda.com"
                className="flex items-center scale-100"
              >
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg">
                  {/* Increased from size-4 */}
                  <img src={logo} alt="RayShree Logo" className="h-10 w-10" />
                  {/* Increased from h-8 w-8 */}
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold text-base">
                    {/* Increased from text-sm */}
                    RayShree
                  </span>
                  <span className="truncate text-sm">
                    {/* Increased from text-xs */}
                    Ayurveda
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-gray-50 flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
        <NavMain items={data.navMain} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter className="bg-gray-50">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
