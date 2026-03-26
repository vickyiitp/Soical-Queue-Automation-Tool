"use client";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const data = [
  { name: "Mon", engagement: 4000 },
  { name: "Tue", engagement: 3000 },
  { name: "Wed", engagement: 2000 },
  { name: "Thu", engagement: 2780 },
  { name: "Fri", engagement: 1890 },
  { name: "Sat", engagement: 2390 },
  { name: "Sun", engagement: 3490 },
  { name: "Mon", engagement: 5000 },
  { name: "Tue", engagement: 4500 },
  { name: "Wed", engagement: 6000 },
];

export default function AnalyticsChart() {
  return (
    <div className="w-full h-[250px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            stroke="#64748b" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
          />
          <YAxis 
            stroke="#64748b" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(15, 23, 42, 0.9)", 
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              color: "#fff"
            }}
            itemStyle={{ color: "#818cf8" }}
          />
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#6366f1"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorEngagement)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
