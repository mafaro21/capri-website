"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-gradient-to-r from-sky-700 via-sky-800 to-sky-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Get in touch with our team for any inquiries or assistance
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
                            <p className="text-gray-600">
                                Visit us at our showroom or factory. We're here to help with all your appliance needs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Showroom Card */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Showroom</h3>
                                <p className="text-gray-600 text-center mb-4">Pomona Industrial Park</p>
                                <p className="text-gray-600 text-center">Along Harare Drive, Harare</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-center space-x-2 text-sky-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">Mon-Fri: 8:00 - 17:00 | Sat: 8:00 - 14:00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Factory Card */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Factory</h3>
                                <p className="text-gray-600 text-center mb-4">176 Seke Road</p>
                                <p className="text-gray-600 text-center">Graniteside, Harare</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center justify-center space-x-2 text-sky-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-medium">Mon-Fri: 8:00 - 16:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Methods */}
                        <div className="mt-16 grid md:grid-cols-2 gap-8">
                            {/* Phone & Email Card */}
                            <div className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Call or Email Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Call Center:</p>
                                            <p className="text-lg font-semibold text-gray-900">08677 004585</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Main Phone:</p>
                                            <p className="text-lg font-semibold text-gray-900">+263 242 755892-8</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Showroom Sales:</p>
                                            <p className="text-lg font-semibold text-gray-900">+263 719195400</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="text-lg font-semibold text-gray-900">info@capri.co.zw</p>
                                            <p className="text-lg font-semibold text-gray-900">sales@capri.co.zw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours Card */}
                            <div className="bg-gray-50 rounded-xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-semibold text-gray-900">8:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-semibold text-gray-900">8:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold text-gray-900">Closed</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Public Holidays</span>
                                        <span className="font-semibold text-gray-900">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Find Us</h3>
                            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0102697008433!2d31.070942175023358!3d-17.744155273980535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a517c69a2181%3A0xe34a321ae0a5ed46!2sCapri%20Zimbabwe!5e0!3m2!1sen!2szw!4v1773655863184!5m2!1sen!2szw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Capri Zimbabwe Location"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        {/* Credit CTA */}
                        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Credit Options?</h3>
                            <p className="text-gray-600 mb-6">Ask us about our flexible payment plans</p>
                            <Link
                                href="/credit-application"
                                className="inline-block bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                            >
                                Apply for Credit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}