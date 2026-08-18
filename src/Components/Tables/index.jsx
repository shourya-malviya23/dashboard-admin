import React from 'react'

function GlobalTable({users}) {
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
                    {users.map((user, idx) => (
                        <tr key = {idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-5 flex items-center space-x-3">
                                <div className="relative">
                                    <img src={user.avatar} className="w-10 h-10 rounded-full bg-slate-200 " alt={user.name}/>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-800 dark:text-white">{user.name}</div>
                                    <div className="text-xs text-slate-400 font-medium">{user.status}</div>
                                </div>
                            </td>
                            <td className="px-6 py-5 text-xl">{user.flag}</td>
                            <td className="px-6 py-5 ">
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 max-w-[120px]">
                                    <div className="bg-cyan-500 h-2 rounded-full dark:shadow-[0_0_8px_rgba(34,211,238,0.6)]" style={{width: `${user.usage}%`}}></div>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 mt-1 block tracking-tighter">{user.usage}% RESOURCE LOAD</span>
                            </td>
                            <td className="px-6 py-5">
                                <span className="text-sm font-semibold text-slate-600 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                                    {user.activity}
                                </span>
                            </td>
                            <td className="px-6 py-5">
                                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white"></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GlobalTable