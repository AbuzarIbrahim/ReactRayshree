"use client";

import { ChevronRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  NewCollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url?: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="bg-gray-50">
      <SidebarGroupLabel></SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            {item.title.toLowerCase() === "search" ||
            item.title === "Enquiries" ||
            item.title === "Dashboard" ? (
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.title}>
                  {/* some of elements in sidebar do not have url hence # */}
                  <Link to={item.url || "#"}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <Link to={item.url || "#"}>
                      <SidebarMenuAction className="">
                        <ArrowUpRight />
                      </SidebarMenuAction>
                    </Link>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                key={subItem.title}
                                to={subItem.url}
                                className="your-styling-classes"
                              >
                                {subItem.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            ) : (
              <NewCollapsibleTrigger className="group/collapsible">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <div>
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <>
                      <SidebarMenuAction className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90">
                        <ChevronRight />
                      </SidebarMenuAction>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  key={subItem.title}
                                  to={subItem.url}
                                  className="your-styling-classes"
                                >
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </NewCollapsibleTrigger>
            )}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
