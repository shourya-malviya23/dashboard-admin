import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function overview() {
  return (
    <div className= "p-6 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-6">
      {/*Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight tracking-tight uppercase">
            Data <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500 font-outline-2">Insights</span>
          </h1>
          <p className="text-slate-500 font-medium italic">Real-time system intelligence.</p>
        </div>
        <button className="px-6 py-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-bold text-slate-700 dark:text-slate-200 hover:scale-105 transition-all active:scale-95">Download Report</button>
      </div>

      {/* Top Bentor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full">
        {/* Main Chart */}
        <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                Weekly Revenue
              </p>
              <h2 className="text-4xl font-black text-slate-800 dark:text-white mt-1">
                $42,850
              </h2>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 p-2 rounded-xl">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default overview