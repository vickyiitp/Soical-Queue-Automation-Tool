"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  PenSquare, 
  Settings, 
  ChevronRight 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: PenSquare, label: "Composer", href: "/composer" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 glass border-r border-white/10 z-50 flex flex-col p-6">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="text-xl font-bold">SQ</span>
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          SocialQueue
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-indigo-400" : "group-hover:text-indigo-400"
                )} />
                <span className="font-medium">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-white/40" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5 px-2">
        <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors w-full group">
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}
