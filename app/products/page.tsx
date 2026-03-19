"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Import your images
import fridge from '@/public/fridge.png';
import freezer from '@/public/freezer.png';
import washing from '@/public/washing.png';
import QRPopup from '@/components/QRPopup';
// Add more imports as needed

export default function ProductsPage() {
    const categories = [
        {
            name: 'Refrigerators',
            href: '/products/fridges',
            image: fridge.src || 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'French door, side-by-side, bottom freezer',
            items: '24 models',
            gradient: 'from-sky-600 to-sky-700'
        },
        {
            name: 'Freezers',
            href: '/products/freezers',
            image: freezer.src || 'https://images.unsplash.com/photo-1584568694244-14fb7c56ad6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Chest, upright, drawer freezers',
            items: '18 models',
            gradient: 'from-blue-600 to-blue-700'
        },
        {
            name: 'Washing Machines',
            href: '/products/laundry',
            image: washing.src || 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Front load, top load, washer-dryer combos',
            items: '32 models',
            gradient: 'from-sky-700 to-sky-800'
        },
        {
            name: 'Solar',
            href: '/products/solar',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Panels, inverters, batteries, complete systems',
            items: '20 models',
            gradient: 'from-amber-600 to-sky-700'
        },
        {
            name: 'Air Conditioning',
            href: '/products/air-conditioning',
            image: 'https://images.unsplash.com/photo-1585772623912-ef09b3aa63e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Split systems, window units, ducted systems',
            items: '15 models',
            gradient: 'from-cyan-600 to-sky-700'
        },
        {
            name: 'Kettles',
            href: '/products/kettles',
            image: 'https://images.unsplash.com/photo-1572635148818-7686e4087678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Electric, gooseneck, temperature control',
            items: '14 models',
            gradient: 'from-blue-500 to-sky-600'
        },
        {
            name: 'Toasters',
            href: '/products/toasters',
            image: 'https://images.unsplash.com/photo-1624377648002-aa7d697fa2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: '2-slice, 4-slice, long slot, commercial',
            items: '10 models',
            gradient: 'from-sky-800 to-sky-900'
        },
        {
            name: 'Microwaves',
            href: '/products/microwaves',
            image: 'https://images.unsplash.com/photo-1585699262324-9e5b8b1b7b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Countertop, over-the-range, built-in',
            items: '16 models',
            gradient: 'from-indigo-600 to-sky-700'
        },
        {
            name: 'Ice Makers',
            href: '/products/ice-makers',
            image: 'https://images.unsplash.com/photo-1581092921461-39b9c1f6a5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Portable, under-counter, commercial',
            items: '12 models',
            gradient: 'from-cyan-600 to-blue-600'
        },
        {
            name: 'Ovens & Stoves',
            href: '/products/ovens',
            image: 'https://images.unsplash.com/photo-1584470293903-6a34e1b5b5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Gas, electric, induction, built-in',
            items: '28 models',
            gradient: 'from-sky-700 to-sky-900'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <QRPopup />
            {/* Hero Banner */}
            <section className="bg-linear-to-r from-sky-700 via-sky-800 to-sky-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
                    <p className="text-xl text-sky-100 max-w-2xl mx-auto">
                        Browse our complete range of premium home appliances and energy solutions
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    {/* Filters/Sort - Optional */}
                    <div className="flex flex-wrap justify-between items-center mb-12">
                        <p className="text-gray-600 text-lg">Showing <span className="font-semibold text-sky-700">{categories.length}</span> product categories</p>
                        <div className="flex items-center space-x-3">
                            <span className="text-gray-700">Sort by:</span>
                            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-sky-600 focus:border-transparent">
                                <option>Alphabetical</option>
                                <option>Most Popular</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    {/* Perfect Grid - Even Tiles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <Link key={index} href={category.href} className="group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">

                                    {/* Image Container - Fixed Aspect Ratio */}
                                    <div className="relative w-full pt-[75%] bg-gray-100 overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition`}></div>


                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition">
                                                {category.name}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {category.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-sm text-gray-500"></span>
                                            <span className="inline-flex items-center text-sky-600 font-semibold group-hover:translate-x-2 transition">
                                                Browse
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}