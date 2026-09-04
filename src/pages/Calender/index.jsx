import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MoreHorizontal, Plus } from 'lucide-react'
import React, { useState } from 'react'
import AddEventModal from '../../Components/Calendar/AddEventModal'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function Calender() {
  const today = new Date()
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [modalOpen, setModalOpen] = useState(false)

  const [eventsByDate, setEventsByDate] = useState({
    [toKey(today.getFullYear(), today.getMonth(), today.getDate())]: [
      { id: 1, time: '10:00 AM', title: 'Design Review', type: 'Work', attendees: 3, color: 'bg-purple-500' },
      { id: 2, time: '01:30 PM', title: 'Client Review', type: 'Marketing', attendees: 5, color: 'bg-blue-500' },
      { id: 3, time: '04:00 PM', title: 'Project Review', type: 'Development', attendees: 2, color: 'bg-pink-500' },
    ],
  })

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const isToday = (day) => day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  const isSelected = (day) => day === selectedDay

  const selectedKey = toKey(year, month, selectedDay)
  const selectedEvents = eventsByDate[selectedKey] || []

  const goToMonth = (offset) => {
    const next = new Date(year, month + offset, 1)
    setViewDate(next)
    setSelectedDay(1)
  }

  const handleAddEvent = (event) => {
    setEventsByDate((prev) => ({
      ...prev,
      [selectedKey]: [...(prev[selectedKey] || []), event],
    }))
  }

  const selectedDateLabel = new Date(year, month, selectedDay).toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric',
  })

  return (
    <div className='p-6 bg-slate-50 dark:bg-slate-950 min-h-screen space-y-6'>

      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h1 className='text-3xl font-black text-slate-800 dark:text-white tracking-tight'>MY
            <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500'>SCHEDULE</span>
          </h1>
          <p className='text-slate-500 font-medium italic'>Manage your time and events efficiently</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='flex bg-white dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800'>
            <button className='px-4 py-2 text-sm font-bold bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-white transition-all'>Month</button>
            <button className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all'>Week</button>
            <button className='px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all'>Day</button>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all active:scale-95"
          >
            <Plus size={18} />New Event
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

        {/* Main Calendar Grid (Bento Box) */}
        <div className='lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800'>
          <div className='flex items-center justify-between mb-8'>
            <h2 className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
              <CalendarIcon size={18} className='text-purple-600'/> {monthNames[month]} {year}
            </h2>
            <div className='flex gap-2'>
              <button onClick={() => goToMonth(-1)} className='p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-400 '><ChevronLeft/></button>
              <button onClick={() => goToMonth(1)} className='p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-400 '><ChevronRight/></button>
            </div>
          </div>

          <div className='grid grid-cols-7 gap-4 mb-4'>
            {days.map(day=>(
              <div key={day} className='text-center text-xs font-black text-slate-400 uppercase tracking-widest'>{day}</div>
            ))}
          </div>

          <div className='grid grid-cols-7 gap-2'>
            {Array.from({ length: firstWeekday }).map((_, i) => <div key={`pad-${i}`} className='h-24 opacity-0'></div>)}

            {calendarDays.map(day => {
              const key = toKey(year, month, day)
              const dayEvents = eventsByDate[key] || []
              return (
                <div
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`h-24 p-3 rounded-2xl border transition-all cursor-pointer group ${
                    isSelected(day)
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/40 scale-105 z-10'
                      : isToday(day)
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/40 text-slate-700 dark:text-slate-300'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-indigo-300 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className='text-sm font-black'>{day}</span>
                  {dayEvents.length > 0 && (
                    <div className={`mt-2 text-[10px] font-bold p-1 rounded ${isSelected(day) ? 'bg-white/20' : 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300'}`}>
                      {dayEvents.length} {dayEvents.length === 1 ? 'Event' : 'Events'}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

         {/* Daily Events & Tasks (Bento Box) */}
          <div className='space-y-6'>
            {/* Today's Overview */}
            <div className='bg-linear-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-500/30 '>
                <h3 className='text-lg font-bold mb-1'>Selected Day</h3>
                <p className='text-indigo-100 text-sm opacity-80 mb-6'>{selectedDateLabel}</p>
                <div className='space-y-4'>
                  <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10'>
                    <div className='flex justify-between items-center'>
                      <span className='text-xs font-bold uppercase opacity-60'>Scheduled</span>
                      <span className='text-2xl font-black'>{selectedEvents.length}</span>
                    </div>
                  </div>
                </div>
            </div>

              {/* Upcoming Events List */}
              <div className='bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden relative'>
                <div className='flex justify-between items-center mb-6'>
                  <h3 className='font-black text-slate-800 dark:text-white text-lg tracking-tight'>UPCOMING</h3>
                  <button className='text-slate-400 hover:text-slate-600 transition-colors'><MoreHorizontal /></button>
                </div>

                {selectedEvents.length === 0 ? (
                  <p className='text-slate-400 text-sm'>No events scheduled for this day.</p>
                ) : (
                  <div className='space-y-6'>
                    {selectedEvents.map((event) => (
                      <div key={event.id} className='flex gap-4 group'>
                        <div className='flex flex-col items-center'>
                          <div className={`w-3 h-3 rounded-full ${event.color} ring-4 ring-slate-100 dark:ring-slate-800 group-hover:scale-125 transition-transform`}></div>
                          <div className='w-[2px] h-full bg-slate-100 dark:bg-slate-800 mt-2'></div>
                        </div>
                        <div className='flex-1 pb-6'>
                          <div className='flex items-center gap-2 text-slate-400 text-xs font-bold mb-1 uppercase tracking-tighter'>
                            <Clock size={12} />{event.time}
                          </div>
                          <p className='text-slate-800 dark:text-white font-bold text-sm'>{event.title}</p>
                          <p className='text-slate-400 text-xs mt-0.5'>{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
          </div>
      </div>

      {modalOpen && (
        <AddEventModal
          date={selectedDateLabel}
          onClose={() => setModalOpen(false)}
          onAdd={handleAddEvent}
        />
      )}

    </div>
  )
}

export default Calender