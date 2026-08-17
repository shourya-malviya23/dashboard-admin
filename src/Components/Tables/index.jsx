import React from 'react'

function GlobalTable() {
  return (
    <div className="bg-white dark:bg-slate-900/50 rounded-3xl shadow-sm border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 dark:text-white text-lg">Active Users</h3>
            <button className="text-sm font-semibold bg-blue-50 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 px-4 py-2 rounded-xl hover:opacity-80 transition-all">View All</button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className='bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest'>
                    <tr>
                        <th className="px-6 py-4 font-bold">UserProfile</th>
                        <th className="px-6 py-4 font-bold">Country</th>
                        <th className="px-6 py-4 font-bold">System Usage</th>
                        <th className="px-6 py-4 font-bold">Last Active</th>
                        <th className="px-6 py-4 font-bold"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GlobalTable