import { ArrowUpRight, BarChart3, ShoppingBag, Users, Zap } from 'lucide-react'
import React from 'react'
import StatCard from '../../Components/Card/StatCard'
import NeonChart from '../../Components/Charts/NeonChart'

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-4 md:p-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className = "text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Main <span className="text-blue-600 dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                Dashboard
              </span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-3 font-medium">Monitoring your system performance in real-time</p>
          </div>

          <button className="flex items-center justify-center space-x-3 bg-slate-950 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all dark:shadow-[6, 18,212,0.4]">
            <Zap className="w-5 h-5 fill-current" />
            <span>Sync Data</span>
          </button>
        </div>

        {/* StatCard*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <StatCard title = "Total Sales"
                    value = "$12,450.00"
                    trend = "+14.2%"
                    trendType = "up"
                    Icon = {ShoppingBag}
                    neonColor = "cyan"
          />
          <StatCard title = "Total Users"
                    value = "$1,250"
                    trend = "+5.1%"
                    trendType = "up"
                    Icon = {Users}
                    neonColor = "fuchsia"
          />
          <StatCard title = "Daily Orders"
                    value = "$48"
                    trend = "-2.4%"
                    trendType = "down"
                    Icon = {BarChart3}
                    neonColor = "lime"
          />
          <StatCard title = "Growth Rate"
                    value = "22.4%"
                    trend = "+18%"
                    trendType = "up"
                    Icon = {ArrowUpRight}
                    neonColor = "amber"
          />
        </div>
        {/* Chart*/}
        <div className= "grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NeonChart />
          </div>
        </div>
        {/* User Table*/}

      </div>
    </div>
  )
}

export default Dashboard