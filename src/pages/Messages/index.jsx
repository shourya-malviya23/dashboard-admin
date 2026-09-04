import React, { useState, useEffect, useRef } from 'react'
import { Search, MoreHorizontal } from 'lucide-react'
import ContactChip from '../../Components/Messages/ContactChip'
import ChatBubble from '../../Components/Messages/ChatBubble'
import MessageInput from '../../Components/Messages/MessageInput'

const initialContacts = [
  { id: 'alex', initials: 'AS', name: 'Alex Smith', status: 'online', color: 'purple' },
  { id: 'jordan', initials: 'JD', name: 'Jordan Database', status: 'active', color: 'pink' },
  { id: 'ai', initials: 'AI', name: 'System AI', status: 'active', color: 'cyan' },
  { id: 'sarah', initials: 'SM', name: 'Sarah Miller', status: 'away', color: 'amber' },
]

const initialConversations = {
  alex: [
    { id: 1, sender: 'them', text: 'Deploy is green on staging.', time: '09:12 AM' },
    { id: 2, sender: 'me', text: 'Nice, promoting to prod shortly.', time: '09:14 AM' },
  ],
  jordan: [
    { id: 1, sender: 'them', text: 'The system intelligence report is synced!', time: '10:45 AM' },
    { id: 2, sender: 'me', text: 'Confirmed. Initialize the protocol.', time: '10:45 AM' },
  ],
  ai: [
    { id: 1, sender: 'them', text: 'Anomaly scan complete. 0 threats found.', time: '08:02 AM' },
  ],
  sarah: [
    { id: 1, sender: 'them', text: 'Back in an hour, ping if urgent.', time: '07:30 AM' },
  ],
}

// canned auto-replies so it feels alive without a real backend
const autoReplies = [
  "Got it — logging that now.",
  "Acknowledged. Syncing with the system.",
  "On it. I'll confirm once it's done.",
  "Noted. Anything else you need?",
  "Copy that. Standing by.",
]

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function Messages() {
  const [contacts, setContacts] = useState(initialContacts)
  const [activeId, setActiveId] = useState('jordan')
  const [conversations, setConversations] = useState(initialConversations)
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  const activeContact = contacts.find((c) => c.id === activeId)
  const messages = conversations[activeId] || []

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (text) => {
    const newMessage = { id: Date.now(), sender: 'me', text, time: formatTime() }
    setConversations((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), newMessage],
    }))

    // simulate the other side "typing" then replying
    setContacts((prev) => prev.map((c) => (c.id === activeId ? { ...c, status: 'typing' } : c)))
    setIsTyping(true)

    setTimeout(() => {
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)]
      const replyMessage = { id: Date.now() + 1, sender: 'them', text: reply, time: formatTime() }
      setConversations((prev) => ({
        ...prev,
        [activeId]: [...(prev[activeId] || []), replyMessage],
      }))
      setContacts((prev) => prev.map((c) => (c.id === activeId ? { ...c, status: 'online' } : c)))
      setIsTyping(false)
    }, 1400 + Math.random() * 800)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-6 md:p-10 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* contact strip */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {contacts.map((contact) => (
            <ContactChip
              key={contact.id}
              contact={contact}
              isActive={contact.id === activeId}
              onClick={() => setActiveId(contact.id)}
            />
          ))}
        </div>

        {/* chat window */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-sm dark:shadow-none flex flex-col h-[70vh]">
          <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-black ${
                activeContact.color === 'purple' ? 'bg-purple-500' :
                activeContact.color === 'pink' ? 'bg-pink-500' :
                activeContact.color === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'
              }`}>
                {activeContact.initials}
              </div>
              <h2 className="text-slate-900 dark:text-white font-black italic text-lg">{activeContact.name}</h2>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <Search size={18} className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
              <MoreHorizontal size={18} className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 rounded-3xl rounded-bl-md px-5 py-3.5 shadow-sm dark:shadow-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800">
            <MessageInput onSend={handleSend} disabled={isTyping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages