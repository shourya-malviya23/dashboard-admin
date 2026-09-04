import React from 'react'
import { Zap, MapPin } from 'lucide-react'

const colorStyles = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
  teal: 'bg-teal-500',
}

function TeamMemberCard({ member, onOpenProfile }) {
  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-sm dark:shadow-none hover:border-slate-200 dark:hover:border-slate-700 transition-all">
      <div className="w-full flex items-center justify-between mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-900 dark:bg-black/40 text-white dark:text-slate-200 px-3 py-1.5 rounded-full">
          {member.status}
        </span>
        <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400 text-sm font-bold">
          <Zap size={14} className="fill-amber-500 dark:fill-amber-400" />
          {member.score}
        </span>
      </div>

      <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 ${colorStyles[member.color]}`}>
        {member.initials}
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold">{member.name}</h3>
      <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
      <p className="flex items-center gap-1 text-slate-400 text-xs mt-2">
        <MapPin size={12} />
        {member.location}
      </p>

      <button
        onClick={() => onOpenProfile(member)}
        className="mt-6 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-all"
      >
        Open Profile
      </button>
    </div>
  )
}

export default TeamMemberCard