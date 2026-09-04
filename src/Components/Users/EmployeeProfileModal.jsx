import React from 'react'
import { X, Award, CheckCircle2 } from 'lucide-react'

const colorStyles = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
  teal: 'bg-teal-500',
}

function EmployeeProfileModal({ member, onClose }) {
  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 max-w-lg w-full flex gap-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
        >
          <X size={18} />
        </button>

        <div className={`w-28 h-28 shrink-0 rounded-2xl flex items-center justify-center text-white text-3xl font-black ${colorStyles[member.color]}`}>
          {member.initials}
        </div>

        <div className="flex-1 pr-8">
          <h2 className="text-2xl font-black text-white">{member.name}</h2>

          <div className="flex gap-2 mt-3">
            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300">
              <Award size={12} /> Elite Talent
            </span>
            <span className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 size={12} /> Verified
            </span>
          </div>

          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            {member.bio}
          </p>

          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-full shadow-lg shadow-indigo-600/40 transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeProfileModal