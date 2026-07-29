import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const data = [
    {name:"Jan", sales:4000},
    {name:"Feb", sales:3000},
    {name:"Mar", sales:2500},
    {name:"Apr", sales:4000},
    {name:"May", sales:1890},
    {name:"Jun", sales:3490},
    {name:"Jul", sales:2390},

]

function NeonChart() {
  return (
    <div className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6 dark:text-white">Sales Analytics</h3>
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data = {data}>
                    <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor='#22d3ee' stopOpacity={0.3} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default NeonChart