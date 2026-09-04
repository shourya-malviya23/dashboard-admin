import React from 'react'
import { Zap, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react'

const iconStyles = {
  revenue: { icon: Zap, bg: 'bg-pink-100 dark:bg-pink-500/20', color: 'text-pink-500' },
  security: { icon: ShieldAlert, bg: 'bg-amber-100 dark:bg-amber-500/20', color: 'text-amber-500' },
  sync: { icon: CheckCircle2, bg: 'bg-emerald-100 dark:bg-emerald-500/20', color: 'text-emerald-500' },
  message: { icon: MessageSquare, bg: 'bg-indigo-100 dark:bg-indigo-500/20', color: 'text-indigo-500' },
}

function NotificationItem({ notification, onRead }) {
  const { icon: Icon, bg, color } = iconStyles[notification.type]

  return (
    <button
      onClick={() => onRead(notification.id)}
      className={`w-full flex items-start gap-4 text-left p-5 rounded-3xl transition-all ${
        notification.unread
          ? 'bg-white dark:bg-slate-800 shadow-sm dark:shadow-none'
          : 'bg-slate-50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/60'
      }`}
    >
      <div className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center ${bg}`}>
        <Icon size={18} className={color} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-slate-900 dark:text-white font-bold text-sm">{notification.title}</h4>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{notification.description}</p>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        {notification.unread && <span className="w-2 h-2 rounded-full bg-indigo-500"></span>}
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{notification.time}</span>
      </div>
    </button>
  )
}

export default NotificationItem