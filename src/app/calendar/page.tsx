import { Sidebar } from "@/components/Sidebar";
import CalendarView from "@/components/CalendarView";

export default function CalendarPage() {
  return (
    <main className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1">
        <CalendarView />
      </div>
    </main>
  );
}
