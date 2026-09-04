import React from 'react'

function ChatBubble({ message }) {
  const isMe = message.sender === 'me'

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-3xl px-6 py-4 ${
          isMe
            ? 'bg-indigo-600 text-white rounded-br-md'
            : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-bl-md shadow-sm dark:shadow-none'
        }`}
      >
        <p className="text-sm font-bold">{message.text}</p>
        <p className={`text-[10px] mt-1.5 font-medium ${isMe ? 'text-indigo-200' : 'text-slate-400'}`}>
          {message.time}
        </p>
      </div>
    </div>
  )
}

export default ChatBubble