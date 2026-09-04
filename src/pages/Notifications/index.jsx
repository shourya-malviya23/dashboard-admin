import React, { useState } from 'react'
import { CheckCheck, Trash2 } from 'lucide-react'
import NotificationItem from '../../Components/Notifications/NotificationItem'

const initialNotifications = [
  { id: 1, type: 'revenue', title: 'Revenue Spike Detected', description: 'System intelligence reported $42,850 in weekly revenue, exceeding target by 14%', time: '2m ago', unread: true },
  { id: 2, type: 'security', title: 'Security Protocol Alpha', description: 'New login attempt from unrecognized device in Berlin, Germany', time: '1h ago', unread: true },
  { id: 3, type: 'sync', title: 'Cloud Sync Complete', description: 'All employee database and reports are now fully synchronized with the main server', time: '3h ago', unread: false },
  { id: 4, type: 'message', title: 'New Admin Directive', description: 'Alexander Smith sent a new priority message reading the Q1 report', time: '5h ago', unread: false },
]

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const handleRead = (id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, unread: false } : n)))
  }
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }
  const handleClearAll = () => {
    setNotifications([])
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-6 md:p-10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-slate-900 dark:text-white font-black italic text-3xl">Notifications</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Manage system-wide alerts</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleMarkAllRead}
              title="Mark all as read"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm dark:shadow-none text-slate-500 hover:text-indigo-500 transition-colors"
            >
              <CheckCheck size={18} />
            </button>
            <button
              onClick={handleClearAll}
              title="Clear all"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm dark:shadow-none text-slate-500 hover:text-red-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {notifications.length === 0 ? (
            <p className="text-center text-slate-400 text-sm py-16">You're all caught up.</p>
          ) : (
            notifications.map((n) => (
              <NotificationItem key={n.id} notification={n} onRead={handleRead} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Notifications