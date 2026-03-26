"use client";

import { useState } from "react";
import { BentoGrid, BentoItem } from "./BentoGrid";
import { 
  Users, 
  Share2, 
  TrendingUp, 
  PlusCircle, 
} from "lucide-react";
import { cn } from "@/lib/utils";
import AnalyticsChart from "./AnalyticsChart";
import ComposerModal from "./ComposerModal";

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function DashboardContent() {
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  return (
    <div className="pl-64 p-8 min-h-screen">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Welcome back, Creator
          </h1>
          <p className="text-slate-400 mt-2">Here's what's happening today.</p>
        </div>
        <button 
          onClick={() => setIsComposerOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          <PlusCircle className="w-5 h-5" />
          Create Post
        </button>
      </header>

      <BentoGrid>
        {/* Quick Stats */}
        <BentoItem
          title="Total Engagement"
          className="md:col-span-2"
          icon={<TrendingUp className="w-6 h-6 text-indigo-400" />}
        >
          <AnalyticsChart />
        </BentoItem>

        <BentoItem
          title="Active Platforms"
          icon={<Share2 className="w-6 h-6 text-emerald-400" />}
        >
          <div className="flex flex-col gap-3 mt-4">
            {[
              { icon: TwitterIcon, color: "text-twitter", label: "Twitter", status: "Active" },
              { icon: LinkedinIcon, color: "text-linkedin", label: "LinkedIn", status: "Active" },
              { icon: InstagramIcon, color: "text-pink-500", label: "Instagram", status: "Pending" },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <p.icon className={cn("w-5 h-5", p.color)} />
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
                <span className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider",
                  p.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                )}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </BentoItem>

        {/* Recent Posts */}
        <BentoItem
          title="Recent Posts"
          icon={<PlusCircle className="w-6 h-6 text-violet-400" />}
        >
          <div className="space-y-3 mt-4">
             <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-1">Scheduled for 2h ago</p>
                <p className="text-sm line-clamp-2 text-slate-200">Just launched our new product on ProductHunt! Check it out 🚀</p>
             </div>
             <div className="p-3 rounded-xl bg-white/5 border border-white/5 opacity-60">
                <p className="text-xs text-slate-400 mb-1">Scheduled for tomorrow</p>
                <p className="text-sm line-clamp-2 text-slate-200">The future of SaaS is here. Join our waitlist now.</p>
             </div>
          </div>
        </BentoItem>

        <BentoItem
          title="Audience Reach"
          className="md:col-span-2"
          icon={<Users className="w-6 h-6 text-amber-400" />}
        >
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { label: "Followers", value: "12.5k", change: "+12%" },
              { label: "Impressions", value: "85k", change: "+24k" },
              { label: "Growth", value: "8.2%", change: "+2%" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-[10px] text-emerald-400 font-medium">{stat.change}</p>
              </div>
            ))}
          </div>
        </BentoItem>
      </BentoGrid>

      <ComposerModal 
        isOpen={isComposerOpen} 
        onClose={() => setIsComposerOpen(false)} 
      />
    </div>
  );
}
