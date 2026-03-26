import { Sidebar } from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1">
        <DashboardContent />
      </div>
    </main>
  );
}
