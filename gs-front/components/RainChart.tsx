'use client';
//bliblioteca para a criação do grafico na pagina dashboard//
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const rainData = [
  { day: '01/05', value: 14 },
  { day: '02/05', value: 10 },
  { day: '03/05', value: 2 },
  { day: '04/05', value: 16 },
  { day: '05/05', value: 22 },
  { day: '06/05', value: 7 },
  { day: '07/05', value: 18 },
  { day: '08/05', value: 0 },
  { day: '09/05', value: 9 },
  { day: '10/05', value: 32 },
];

export default function RainChart() {
  return (
    <div className="rounded-xl bg-[#1e293b] p-4 shadow-md w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rainData}>
          <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
          <XAxis
            dataKey="day"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            label={{ value: 'Volume (mm)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
            labelStyle={{ color: '#f1f5f9' }}
            itemStyle={{ color: '#f1f5f9' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, stroke: '#3b82f6', strokeWidth: 2, fill: '#1e293b' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
