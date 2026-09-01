import { CheckCircle2, ChevronRight, Clock, Download, FileBarChart, FileSpreadsheet, Filter, MoreHorizontal, Plus, Search, Share2 } from 'lucide-react'
import React from 'react'

function Reports() {

  const [activeTab, setActiveTab] = React.useState('All Reports');
  const reportData = [
  {
    id: 'REP-2026-001',
    title: 'Annual Financial Statement',
    category: 'Finance',
    author: 'John Doe',
    data: '2026-01-05',
    status: 'completed',
    size: '2.4 MB',
  },
  {
    id: 'REP-2026-002',
    title: 'User Retention Analytics',
    category: 'Analytics',
    author: 'Sara smith',
    data: '2026-01-07',
    status: 'progressing',
    size: '2.4 MB',
  },
  {
    id: 'REP-2026-003',
    title: 'Q1 Marketing Performance',
    category: 'Marketing',
    author: 'Moke Ross',
    data: '2026-01-08',
    status: 'completed',
    size: '4.1 MB',
  },
  {
    id: 'REP-2026-004',
    title: 'Infrastructure Uptime Log',
    category: 'System',
    author: 'Admin',
    data: '2026-01-09',
    status: 'completed',
    size: '1.2 MB',
  },
]

  return (
    <div classsName="p-6 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
        {/* Header Section*/}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reports Management</h1>
            <p className="text-sm text-slate-500 mt-1">Generate, schedule and export system wide data reports.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all font-semibold text-sm">
            <Plus />Create New Report
        </button>
    </div>
    {/* Utility Bar (Search & Filter) */}
    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="relative flex-1"> 
                <Search className = "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 " size={18} />
                <input 
                type="text"
                placeholder="Search by report ID, title or author...."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 ring-blue-500/50 outline transition-all dark:text-white"
                /> 
            </div>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium ">
                    <Filter size={16} /> Advanced Filters
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium">
                    <Download size={16} /> Export All
                </button>
            </div>

        </div>
    </div>
    <div className="grid grid-cols-1 lg-grid-cols-5 gap-5 ">
        {/* Sidebar Categories */}
        <div className="lg:col-span-1 space-y-1">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-4 mb-4">Categories</h3>
            {['All Reports','Financials', 'Analytics' ,'Marketing', 'System Logs', 'Archive'].map((cat) => (
                <button
                key={cat}
                onClick={()=>setActiveTab(cat)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-sm font-medium
                ${activeTab === cat
                    ?'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-sm'
                    :'text-slate-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm'
                }`}>
                    {cat}
                    <ChevronRight size={14} className={`transition-transform ${activeTab === cat ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`} />
                </button>
            ))}
        </div>

        {/* Data Table section */}
        <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            <tr className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                                <th className="px-6 py-4">Report Details</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Author</th>
                                <th className="px-6 py-4">Size</th>
                                <th className="px-6 py-4 text-right">Actions</th> 
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {reportData.map(report => (
                              <tr key={report.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-blue-500 rounded-xl transition-colors">
                                            {report.category === "Finance" ? <FileSpreadsheet size={20}/> : <FileBarChart size={20} />}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 dark:text-slate-200 ">{report.title}</div>
                                            <div className="text-[11px] text-slate-400 font-mono uppercase tracking-tighter">{report.id} - {report.category}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {report.status === "completed" ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 text-[11px] font-bold"><CheckCircle2 size={12}/> Ready</span>  
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/10 text-[11px] font-bold"><Clock size={12} /> Processing</span>
                                    )

                                    }
                                </td>

                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                                   {report.author}
                                   <div className="text-[10px] text-slate-400 font-normal">{report.date}</div> 
                                </td>

                                <td className="px-6 py-4 text-sm text-slate-400 font-mono">
                                    {report.size}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover-bg-blue-500/10 rounded-lg transition-all">
                                            <Download size={18}/>
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover-bg-slate-200 rounded-lg transition-all">
                                            <Share2 size={18} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 darh:hover:bg-slate-800 rounded-lg transition-all">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </div>
                                </td>
                              </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className='p-4 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500'>
                <p >Showing 1-4 of 45 reports </p>
                <div className='flex gap-1'>
                    <button className='px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors'>Prev</button>
                    <button className='px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold'>1</button>
                    <button 
                    className='px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors'>2</button>
                    <button 
                    className='px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors'
                    >Next</button>
                </div>
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Reports