'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Trash2, Calendar, Clock } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

export default function TimelinePage() {
  const [events, setEvents] = useState<TimelineEvent[]>([
    {
      id: '1',
      date: '1776-07-04',
      title: 'Declaration of Independence',
      description: 'The Continental Congress approved the Declaration of Independence, formally announcing the thirteen American colonies\' independence from British rule.',
      category: 'American History'
    },
    {
      id: '2',
      date: '1787-09-17',
      title: 'Constitution Signed',
      description: 'The United States Constitution was signed by delegates at the Constitutional Convention in Philadelphia.',
      category: 'American History'
    },
    {
      id: '3',
      date: '1803-04-30',
      title: 'Louisiana Purchase',
      description: 'The United States purchased approximately 827,000 square miles of territory from France, doubling the size of the nation.',
      category: 'American History'
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    date: '',
    title: '',
    description: '',
    category: 'Custom'
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const addEvent = () => {
    if (newEvent.date && newEvent.title) {
      const event: TimelineEvent = {
        id: Date.now().toString(),
        ...newEvent
      };
      setEvents([...events, event]);
      setNewEvent({ date: '', title: '', description: '', category: 'Custom' });
      setShowAddForm(false);
    }
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'American History': return 'bg-blue-500';
      case 'World History': return 'bg-purple-500';
      case 'Science': return 'bg-green-500';
      case 'Literature': return 'bg-orange-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              The Ross Adventure
            </Link>
            <Button asChild variant="ghost" className="text-slate-600">
              <Link href="/homeschool" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Homeschool
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Timeline Builder</h1>
            <p className="text-slate-600 mb-6">Create and visualize historical timelines with important events</p>
            
            <Button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:opacity-90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>

          {/* Add Event Form */}
          {showAddForm && (
            <Card className="mb-8 shadow-lg border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-800">Add New Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                    <Input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select 
                      className="w-full p-2 border border-slate-300 rounded-md"
                      value={newEvent.category}
                      onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    >
                      <option value="American History">American History</option>
                      <option value="World History">World History</option>
                      <option value="Science">Science</option>
                      <option value="Literature">Literature</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
                  <Input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="Enter event title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                  <Textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Enter event description"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={addEvent} className="bg-emerald-600 hover:bg-emerald-700">
                    Add Event
                  </Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
            
            <div className="space-y-8">
              {sortedEvents.map((event, index) => (
                <div key={event.id} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 ${getCategoryColor(event.category)} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Event card */}
                  <div className="ml-16 w-full">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="text-sm font-medium text-slate-600">
                                {formatDate(event.date)}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(event.category)}`}>
                                {event.category}
                              </span>
                            </div>
                            <CardTitle className="text-lg text-slate-800">{event.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEvent(event.id)}
                            className="text-slate-400 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {events.length === 0 && (
            <div className="text-center py-12">
              <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">No events yet</h3>
              <p className="text-slate-500">Add your first event to start building your timeline!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}