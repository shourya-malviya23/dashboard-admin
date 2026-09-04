import React from 'react'
import { ShieldCheck, MoreHorizontal, Zap } from 'lucide-react'

const colorStyles = {
  cyan: {
    avatar: 'from-cyan-500 to-blue-600',
    badge: 'bg-cyan-500',
  },
  purple: {
    avatar: 'from-purple-500 to-fuchsia-600',
    badge: 'bg-purple-500',
  },
}

function AdminCard({ admin }) {
  const colors = colorStyles[admin.color]

  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 flex items-start gap-6 shadow-sm dark:shadow-none">
      <div className="relative shrink-0">
        <div className={`w-24 h-32 rounded-2xl bg-gradient-to-b ${colors.avatar} flex items-center justify-center text-white text-2xl font-black shadow-lg`}>
          {admin.initials}
        </div>
        <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${colors.badge} flex items-center justify-center ring-4 ring-white dark:ring-slate-900`}>
          <ShieldCheck size={16} className="text-white" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">{admin.title}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{admin.subtitle}</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-xl px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Auth Level</p>
            <p className="flex items-center gap-1 text-slate-900 dark:text-white font-bold text-sm mt-1">
              <Zap size={12} className="text-amber-400 fill-amber-400" /> Level {admin.authLevel}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-xl px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sync Status</p>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-1">Encrypted</p>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-all">
            View Logs
          </button>
          <button className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Revoke Access
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminCard