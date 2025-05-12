
import { NavLink } from "react-router-dom";
import { 
  Calculator, 
  Percent, 
  DollarSign,
  TrendingUp,
  ListCheck,
  HelpCircle
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const calculators = [
  { 
    id: "gst", 
    name: "GST Calculator", 
    path: "/", 
    icon: <Calculator className="h-5 w-5" />
  },
  { 
    id: "profit-loss", 
    name: "Profit & Loss", 
    path: "/profit-loss", 
    icon: <DollarSign className="h-5 w-5" />
  },
  { 
    id: "percentage", 
    name: "Percentage", 
    path: "/percentage", 
    icon: <Percent className="h-5 w-5" />
  },
  { 
    id: "roi", 
    name: "ROI Calculator", 
    path: "/roi", 
    icon: <TrendingUp className="h-5 w-5" />
  },
  { 
    id: "break-even", 
    name: "Break-even Point", 
    path: "/break-even", 
    icon: <ListCheck className="h-5 w-5" />
  },
  { 
    id: "discount", 
    name: "Discount Calculator", 
    path: "/discount", 
    icon: <DollarSign className="h-5 w-5" />
  }
];

export function AppSidebar() {
  const { open: sidebarOpen } = useSidebar();
  const collapsed = !sidebarOpen;

  const navLinkClass = ({ isActive }: { isActive: boolean }) => {
    return cn(
      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
      isActive 
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
        : "text-sidebar-foreground/90 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    );
  };

  return (
    <Sidebar
      className={cn(
        "h-screen border-r bg-sidebar",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
      collapsible="icon"
    >
      <div className="flex h-14 items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <h2 className="text-lg font-semibold text-sidebar-foreground">
            Calculators
          </h2>
        )}
        <SidebarTrigger />
      </div>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {calculators.map((calculator) => (
            <SidebarMenuItem key={calculator.id}>
              <SidebarMenuButton asChild>
                <NavLink to={calculator.path} className={navLinkClass} end={calculator.path === "/"}>
                  {calculator.icon}
                  {!collapsed && <span>{calculator.name}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
