import React from 'react'

const colorStyles = {
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  cyan: 'bg-cyan-500',
  amber: 'bg-amber-500',
}

const statusStyles = {
  online: 'text-emerald-500',
  typing: 'text-indigo-500',
  active: 'text-slate-400',
  away: 'text-slate-400',
}

function ContactChip({ contact, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border transition-all shrink-0 ${
        isActive
          ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm'
          : 'bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-slate-800/60'
      }`}
    >
      <div className="relative">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-black ${colorStyles[contact.color]}`}>
          {contact.initials}
        </div>
        {contact.status === 'online' && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900"></span>
        )}
      </div>
      <div className="text-left">
        <p className="text-slate-900 dark:text-white text-sm font-black italic leading-tight">{contact.name}</p>
        <p className={`text-[10px] font-bold uppercase tracking-wider ${statusStyles[contact.status]}`}>
          {contact.status === 'typing' ? 'Typing...' : contact.status}
        </p>
      </div>
    </button>
  )
}

export default ContactChip