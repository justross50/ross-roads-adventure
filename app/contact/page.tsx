'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to Netlify Forms
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-slate-800">
                Three Pillars
              </Link>
              <div className="flex space-x-6">
                <Link href="/about" className="text-slate-600 hover:text-slate-800 transition-colors">
                  About
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-xl bg-gradient-to-r from-white to-emerald-50 border-emerald-200">
              <CardHeader className="text-center">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-3xl text-slate-800 mb-2">Message Sent!</CardTitle>
                <p className="text-lg text-emerald-600">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:opacity-90">
                  <Link href="/">
                    Return Home
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Three Pillars
            </Link>
            <div className="flex space-x-6">
              <Link href="/christian" className="text-slate-600 hover:text-slate-800 transition-colors">
                Christian
              </Link>
              <Link href="/homeschool" className="text-slate-600 hover:text-slate-800 transition-colors">
                Homeschool
              </Link>
              <Link href="/military" className="text-slate-600 hover:text-slate-800 transition-colors">
                Military
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-800 transition-colors">
                About
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions, suggestions, or want to share your experience with our tools? 
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-slate-800">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="christian-tools">Christian Living Tools</option>
                    <option value="homeschool-resources">Homeschool Resources</option>
                    <option value="military-content">Military Insights</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell us how we can help you or share your feedback..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 transition-opacity text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  * Required fields. We typically respond within 24-48 hours.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-slate-600">
              You can also reach us at{' '}
              <a href="mailto:contact@threepillars.com" className="text-blue-600 hover:text-blue-800 font-medium">
                contact@threepillars.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}