import React from 'react'
import { MessageSquare, ArrowRight, MoreHorizontal, Circle } from 'lucide-react'

const colorStyles = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  orange: 'bg-orange-500',
}

function UserCard({ user }) {
  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="relative">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-lg font-black ${colorStyles[user.color]}`}>
            {user.initials}
          </div>
          <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${user.online ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <h3 className="text-slate-900 dark:text-white font-bold text-lg mt-4">{user.name}</h3>
      <p className="flex items-center gap-1.5 text-slate-400 text-xs mt-1">
        <Circle size={6} className={user.online ? 'fill-emerald-500 text-emerald-500' : 'fill-slate-300 text-slate-300'} />
        {user.name}
      </p>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">#{user.department}</span>
        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
          ⚡ {user.tier}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-5">
        <button className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
          <MessageSquare size={14} />
          Chat
        </button>
        <button className="flex-1 flex items-center justify-center gap-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Profile
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

export default UserCard