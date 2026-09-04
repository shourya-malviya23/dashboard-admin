import React, { useState } from 'react'
import { Smile, Image, Send } from 'lucide-react'

function MessageInput({ onSend, disabled }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim() || disabled) return
    onSend(text.trim())
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full px-4 py-2.5 shadow-sm dark:shadow-none"
    >
      <button type="button" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
        <Smile size={20} />
      </button>
      <button type="button" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
        <Image size={20} />
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Inject a message into the system..."
        className="flex-1 bg-transparent text-sm font-medium text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none"
      />

      <button
        type="submit"
        disabled={!text.trim() || disabled}
        className="flex items-center gap-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Send
        <Send size={14} />
      </button>
    </form>
  )
}

export default MessageInput