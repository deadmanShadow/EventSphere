"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface DashboardPieChartProps {
  data: any[];
  nameKey: string;
  dataKey: string;
  colors?: string[];
  title?: string;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const DashboardPieChart = ({
  data,
  nameKey,
  dataKey,
  colors = COLORS,
  title,
}: DashboardPieChartProps) => {
  return (
    <div className="w-full h-[300px] p-4 bg-white rounded-xl border shadow-sm flex flex-col items-center justify-center">
      {title && <h3 className="w-full text-lg font-semibold mb-4 text-left">{title}</h3>}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPieChart;
