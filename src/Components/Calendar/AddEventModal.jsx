import React, { useState } from 'react'
import { X } from 'lucide-react'

const typeColors = {
  Work: 'bg-purple-500',
  Marketing: 'bg-blue-500',
  Development: 'bg-pink-500',
  Personal: 'bg-emerald-500',
}

function AddEventModal({ date, onClose, onAdd }) {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [type, setType] = useState('Work')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !time.trim()) return
    onAdd({
      id: Date.now(),
      title: title.trim(),
      time,
      type,
      color: typeColors[type],
      attendees: 1,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 max-w-md w-full relative shadow-2xl"
      >
        <button type="button" onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <X size={20} />
        </button>

        <h2 className="text-slate-900 dark:text-white font-black text-xl">New Event</h2>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{date}</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Design Review"
              className="w-full mt-1.5 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoFocus
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mt-1.5 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</label>
            <div className="flex gap-2 mt-1.5">
              {Object.keys(typeColors).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    type === t
                      ? `${typeColors[t]} text-white`
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
        >
          Add to Schedule
        </button>
      </form>
    </div>
  )
}

export default AddEventModal