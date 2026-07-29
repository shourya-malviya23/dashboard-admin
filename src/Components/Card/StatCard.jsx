import React from 'react'

function StatCard({ title, value, trend, trendType, Icon, neonColor }) {

  const colors = {
    cyan: "dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] dark:border-cyan-500/50 text-cyan-600 dark:text-cyan-400",
    fuchsia: "dark:shadow-[0_0_15px_rgba(232,121,249,0.2)] dark:border-fuchsia-500/50 text-fuchsia-600 dark:text-fuchsia-400",
    lime: "dark:shadow-[0_0_15px_rgba(163,230,53,0.2)] dark:border-lime-500/50 text-lime-600 dark:text-lime-400 ",
    amber: "dark:shadow-[0_0_15px_rgba(251,191,36,0.2)] dark:border-cyan-500/50 text-amber-600 dark:text-amber-400 "

  } 

  return (
    <div className = {`bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:scale-[1.02] ${colors[neonColor]}`}>
        <div className = "flex justify-between items-center">
            <div>
                <p className = "text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">{title}</p>
                <h3 className = "text-3xl font-black mt-2 text-slate-800 dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{value}</h3>
            </div>
            <div className = "p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Icon className = "w-7 h-7"/>
            </div>
        </div>

        <div className = "mt-4 flex items-center space-x-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trendType === 'up' ? "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400" : "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 "}`}>{trend}</span>
            <span className="text-xs text-slate-400 font-medium">vs last month</span>
        </div>
    </div>
  )
}

export default StatCard