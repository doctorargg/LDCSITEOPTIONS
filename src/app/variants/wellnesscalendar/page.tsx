'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUser, FiUsers, FiSun, FiDroplet, FiActivity, FiHeart, FiCheckCircle, FiChevronLeft, FiChevronRight, FiPlus, FiBell } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function WellnessCalendarVariant() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonthName = monthNames[currentMonth.getMonth()];
  const currentYear = currentMonth.getFullYear();

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const calendarDays = getDaysInMonth(currentMonth);

  const availableTimeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const wellnessEvents = [
    {
      date: 5,
      title: 'Wellness Workshop',
      time: '10:00 AM',
      type: 'group',
      icon: FiUsers,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      date: 12,
      title: 'Nutrition Seminar',
      time: '2:00 PM',
      type: 'group',
      icon: FiActivity,
      color: 'bg-green-100 text-green-700'
    },
    {
      date: 19,
      title: 'Mindfulness Session',
      time: '4:00 PM',
      type: 'group',
      icon: FiHeart,
      color: 'bg-pink-100 text-pink-700'
    },
    {
      date: 26,
      title: 'Health Screening Day',
      time: 'All Day',
      type: 'special',
      icon: FiCheckCircle,
      color: 'bg-blue-100 text-blue-700'
    }
  ];

  const seasonalTips = {
    winter: {
      icon: FiDroplet,
      color: 'text-blue-600',
      tips: [
        'Stay hydrated even in cold weather',
        'Get vitamin D supplements',
        'Maintain indoor exercise routine',
        'Focus on immune-boosting foods'
      ]
    },
    spring: {
      icon: FiSun,
      color: 'text-green-600',
      tips: [
        'Start outdoor activities gradually',
        'Address seasonal allergies early',
        'Spring clean for mental clarity',
        'Increase fresh produce intake'
      ]
    },
    summer: {
      icon: FiSun,
      color: 'text-yellow-600',
      tips: [
        'Stay protected from UV rays',
        'Hydrate frequently',
        'Exercise during cooler hours',
        'Enjoy seasonal fruits'
      ]
    },
    fall: {
      icon: FiDroplet,
      color: 'text-orange-600',
      tips: [
        'Get your flu vaccination',
        'Prepare for shorter days',
        'Boost immunity naturally',
        'Stay active despite weather'
      ]
    }
  };

  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  };

  const currentSeason = getCurrentSeason();
  const SeasonIcon = seasonalTips[currentSeason].icon;

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(new Date(currentYear, currentMonth.getMonth() + (direction === 'next' ? 1 : -1), 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus Direct Care"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Lotus Direct Care</h1>
                  <p className="text-xs text-green-600">Your Wellness Journey</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/variants"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                View All Variants
              </Link>
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all flex items-center gap-2"
              >
                <FiCalendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Calendar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Personal Wellness Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule appointments, track wellness events, and stay on top of your health journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Calendar Header */}
                <div className="flex justify-between items-center mb-6">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FiChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentMonthName} {currentYear}
                  </h3>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FiChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => {
                    const hasEvent = day && wellnessEvents.some(event => event.date === day);
                    const event = hasEvent && wellnessEvents.find(event => event.date === day);
                    
                    return (
                      <div
                        key={index}
                        onClick={() => day && setSelectedDate(new Date(currentYear, currentMonth.getMonth(), day))}
                        className={`
                          min-h-[80px] p-2 rounded-lg cursor-pointer transition-all
                          ${!day ? 'cursor-default' : ''}
                          ${day && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth.getMonth()
                            ? 'bg-green-100 border-2 border-green-500'
                            : day ? 'bg-gray-50 hover:bg-gray-100 border border-gray-200' : ''
                          }
                        `}
                      >
                        {day && (
                          <>
                            <p className="text-sm font-medium text-gray-900">{day}</p>
                            {hasEvent && event && (
                              <div className={`mt-1 p-1 rounded text-xs ${event.color}`}>
                                <p className="truncate">{event.title}</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-green-600" />
                  Available Appointments - {selectedDate.toLocaleDateString()}
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {availableTimeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`
                        py-2 px-3 rounded-lg text-sm font-medium transition-all
                        ${selectedTimeSlot === slot
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {selectedTimeSlot && (
                  <Link
                    href="https://app.elationemr.com/book/lotusdirectcare/"
                    className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiPlus className="w-5 h-5" />
                    Book {selectedTimeSlot} Appointment
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FiBell className="w-5 h-5 text-blue-600" />
                  Upcoming Wellness Events
                </h4>
                <div className="space-y-3">
                  {wellnessEvents.map((event, index) => (
                    <div key={index} className={`p-3 rounded-lg ${event.color}`}>
                      <div className="flex items-start gap-3">
                        <event.icon className="w-5 h-5 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-xs mt-1">
                            {currentMonthName} {event.date} • {event.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasonal Wellness Tips */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <SeasonIcon className={`w-5 h-5 ${seasonalTips[currentSeason].color}`} />
                  {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} Wellness Tips
                </h4>
                <ul className="space-y-3">
                  {seasonalTips[currentSeason].tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <Link
                    href="https://lotusdirectcare.hint.com/signup/"
                    className="block w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                  >
                    Become a Member
                  </Link>
                  <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Download Health Tips PDF
                  </button>
                  <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Set Wellness Reminders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Health Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            This Month's Health Focus
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Preventive Screenings',
                description: 'Stay ahead with regular health check-ups and screenings',
                icon: FiCheckCircle,
                color: 'bg-blue-100 text-blue-600'
              },
              {
                title: 'Nutrition Goals',
                description: 'Focus on seasonal, nutrient-rich foods for optimal health',
                icon: FiActivity,
                color: 'bg-green-100 text-green-600'
              },
              {
                title: 'Mental Wellness',
                description: 'Prioritize stress management and emotional well-being',
                icon: FiHeart,
                color: 'bg-pink-100 text-pink-600'
              }
            ].map((focus, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${focus.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <focus.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{focus.title}</h4>
                <p className="text-gray-600">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Doctor Section */}
      <DoctorSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Take Control of Your Health Journey
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our wellness community and stay on track with your health goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FiUsers className="w-5 h-5" />
              Join Our Community
            </Link>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
            >
              <FiCalendar className="w-5 h-5" />
              Schedule Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}