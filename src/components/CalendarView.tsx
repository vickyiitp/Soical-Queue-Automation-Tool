"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const calendarDays = getDaysInMonth(currentDate);

  return (
    <div className="pl-64 p-8 min-h-screen">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Content Calendar
          </h1>
          <p className="text-slate-400 mt-2">Manage and visualize your social strategy.</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-bold min-w-[120px] text-center">{monthName} {year}</span>
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <div className="grid grid-cols-7 border-b border-white/5 bg-white/5">
          {days.map(day => (
            <div key={day} className="py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-widest border-r border-white/5 last:border-0">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 auto-rows-[120px]">
          {calendarDays.map((day, i) => (
            <div 
              key={i} 
              className={cn(
                "p-4 border-r border-b border-white/5 group relative",
                day === null ? "bg-slate-900/20" : "hover:bg-white/[0.02]"
              )}
            >
              {day !== null && (
                <>
                  <span className="text-sm font-medium text-slate-400">{day}</span>
                  {day === 15 && (
                    <div className="mt-2 p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                      <p className="text-[10px] text-indigo-400 font-bold truncate">Product Launch</p>
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 p-1.5 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:text-white">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
