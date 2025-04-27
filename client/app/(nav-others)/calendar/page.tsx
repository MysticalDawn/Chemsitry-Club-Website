'use client';

// Imports
import React, { useState } from 'react';
import Footer from "@/app/components/desktop/footer";
import Image from "next/image";
import background from "../../../public/resources/background.svg";
import { CalendarIcon, X } from "lucide-react";
import dayjs from "dayjs";

// Event data
const events = [
  {
    date: '2024-11-01',
    title: 'Study plan',
    details: 'Review thermodynamics and reaction engineering topics.',
  },
  {
    date: '2024-11-01',
    title: 'Final Exam',
    details: 'CHEM 201 Final Exam in room 103, 8:00 AM.',
  },
  {
    date: '2025-04-25',
    title: 'Group Meeting',
    details: 'Discuss project tasks and delegate responsibilities.',
  },
  {
    date: '2025-04-26',
    title: 'Hi Meeting',
    details: 'Discuss project tasks and delegate responsibilities.',
  },
  {
    date: '2025-04-25',
    title: 'Group Meeting',
    details: 'Discuss project tasks and delegate responsibilities.',
  }
];

export default function Calendar() {
  // States
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today.startOf('month'));
  const [selectedEvent, setSelectedEvent] = useState<null | typeof events[0]>(null);


  // Build visible calendar days (including days from previous/next month for padding)

  const startDay = currentMonth.startOf('week');
  const endDay = currentMonth.endOf('month').endOf('week');
  const calendarDays = [];
  let day = startDay;
  while (day.isBefore(endDay, 'day')) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // Navigation handlers
  const handlePrev = () => setCurrentMonth(prev => prev.subtract(1, 'month'));
  const handleNext = () => setCurrentMonth(prev => prev.add(1, 'month'));
  const handleToday = () => setCurrentMonth(dayjs().startOf('month'));

  // Format for consistent comparison
  const formatDate = (d: dayjs.Dayjs) => d.format('YYYY-MM-DD');

  return (
    <>
      {/* Page wrapper with background */}
      <div
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top 10rem center",
          backgroundSize: "contain",
        }}
        className="min-h-screen w-full px-4 pt-8 pb-24"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Calendar</h2>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Main Calendar */}
          <div className="flex-1 bg-white rounded-xl shadow p-4">
            {/* Header controls */}
            <div className="flex justify-between items-center mb-4">
              <button onClick={handleToday} className="btn">Today</button>
              <h3 className="font-semibold text-lg">{currentMonth.format('MMMM YYYY')}</h3>
              <div className="space-x-2">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
              </div>
            </div>

            {/* Weekday header */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600 font-semibold border-b pb-2">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 pt-4 text-sm text-center">
              {calendarDays.map((d, i) => {
                const fullDate = formatDate(d);
                const dayEvents = events.filter(e => formatDate(dayjs(e.date.trim())) === fullDate);
                const isToday = d.isSame(dayjs(), 'day');
                const isCurrentMonth = d.month() === currentMonth.month();

                return (
                  <div
                    key={i}
                    className={`relative border rounded-lg p-1 h-24 overflow-hidden text-left ${
                      isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-400'
                    } ${isToday ? 'bg-orange-50 border-orange-300' : ''}`}
                  >
                    <div className="absolute top-1 right-2 text-xs font-semibold">{d.date()}</div>

                    {/* Display first event */}
                    {dayEvents[0] && (
                      <button
                        className="mt-6 bg-orange-200 text-orange-800 px-3 py-1 text-xs rounded-full font-medium cursor-pointer"
                        onClick={() => setSelectedEvent(dayEvents[0])}
                      >
                        {dayEvents[0].title}
                      </button>
                    )}

                    {/* Show more link if more than one event */}
                    {dayEvents.length > 1 && (
                      <div
                        className="mt-1 text-xs text-orange-600 underline cursor-pointer"
                        onClick={() => setSelectedEvent({
                          title: `${dayEvents.length} Events`,
                          details: dayEvents.map(e => `• ${e.title}`).join('\n'),
                          date: fullDate
                        })}
                      >
                        +{dayEvents.length - 1} more
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Mini Calendar */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-2 text-orange-500 font-medium">
                <CalendarIcon size={18} />
                <span>Calendar</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <button onClick={handlePrev}>&lt;</button>
                <h4 className="text-sm font-semibold">{currentMonth.format('MMMM YYYY')}</h4>
                <button onClick={handleNext}>&gt;</button>
              </div>
              <div className="grid grid-cols-7 text-xs text-center text-gray-500">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 text-center text-sm mt-2">
                {[...Array(currentMonth.daysInMonth())].map((_, i) => {
                  const d = currentMonth.date(i + 1);
                  const fullDate = formatDate(d);
                  const isToday = d.isSame(dayjs(), 'day');
                  const dots = events.filter(e => formatDate(dayjs(e.date.trim())) === fullDate).slice(0, 3);

                  return (
                    <div key={i} className="flex flex-col items-center text-xs">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full ${
                          isToday ? 'bg-orange-100 text-orange-600 font-bold' : ''
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex gap-0.5 mt-0.5">
                        {dots.map((_, j) => (
                          <span key={j} className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-2 text-orange-500 font-medium">
                <CalendarIcon size={18} />
                <span>Upcoming</span>
              </div>
              {events.map((e, i) => (
                <div
                  key={i}
                  className="flex justify-between py-1 text-sm border-b last:border-0 cursor-pointer"
                  onClick={() => setSelectedEvent(e)}
                >
                  <span className="text-blue-600 font-medium">
                    {dayjs(e.date).format('D MMM')}
                  </span>
                  <span className="text-gray-700">{e.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/50"
            onClick={() => setSelectedEvent(null)}
          ></div>
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative z-10">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedEvent(null)}
            >
              <X />
            </button>
            <h3 className="text-lg font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{selectedEvent.details}</p>
            <p className="text-xs text-gray-500 mt-4">
              {dayjs(selectedEvent.date).format('dddd, MMMM D, YYYY')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}