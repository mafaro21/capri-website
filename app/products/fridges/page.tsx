"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FridgesPage() {
    const [viewMode, setViewMode] = useState('grid');

    const products = [
        {
            name: 'French Door Refrigerator',
            model: 'C-FD-7000',
            price: '$1,299',
            image: 'https://www.capri.co.zw/wp-content/uploads/2021/01/premium-01-1.jpg',
            features: ['27 cu. ft.', 'Ice Maker', 'Water Dispenser'],
            badge: 'Best Seller'
        },
        {
            name: 'Side-by-Side Refrigerator',
            model: 'C-SS-6500',
            price: '$1,099',
            image: 'https://www.capri.co.zw/wp-content/uploads/2021/01/premium-03.jpg',
            features: ['25 cu. ft.', 'LED Lighting', 'Shelf Storage'],
            badge: 'Energy Star'
        },
        {
            name: 'Bottom Freezer Refrigerator',
            model: 'C-BF-6200',
            price: '$999',
            image: 'https://www.capri.co.zw/wp-content/uploads/2020/08/C350-03.jpg',
            features: ['22 cu. ft.', 'Adjustable Shelves', 'Crisper Drawers'],
            badge: 'Popular'
        },
        {
            name: 'Top Freezer Refrigerator',
            model: 'C-TF-5800',
            price: '$799',
            image: 'https://www.capri.co.zw/wp-content/uploads/2020/08/C350-01.jpg',
            features: ['18 cu. ft.', 'Frost Free', 'Glass Shelves'],
            badge: 'Budget Pick'
        },
        {
            name: 'Built-In Refrigerator',
            model: 'C-BI-7500',
            price: '$2,499',
            image: 'https://www.capri.co.zw/wp-content/uploads/2020/08/c290-10.jpg',
            features: ['30 cu. ft.', 'Panel Ready', 'Dual Cooling'],
            badge: 'Premium'
        },
        {
            name: 'Compact Refrigerator',
            model: 'C-CR-3200',
            price: '$349',
            image: 'https://www.capri.co.zw/wp-content/uploads/2020/08/c290-04.jpg',
            features: ['4.5 cu. ft.', 'Mini Freezer', 'Reversible Door'],
            badge: 'Compact'
        },
        {
            name: '4-Door French Door',
            model: 'C-FD-8500',
            price: '$2,199',
            image: 'https://www.capri.co.zw/wp-content/uploads/2021/01/premium-02.jpg',
            features: ['28 cu. ft.', 'Flex Drawer', 'Smart Features'],
            badge: 'Smart'
        },
        {
            name: 'Counter-Depth Refrigerator',
            model: 'C-CD-7000',
            price: '$1,899',
            image: 'https://www.capri.co.zw/wp-content/uploads/2020/08/Untitled-1-02-1.jpg',
            features: ['24 cu. ft.', 'Flush Finish', 'LED Dispenser'],
            badge: 'Luxury'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Category Header - Reduced height */}
            <section className="bg-linear-to-r from-sky-900 to-sky-800 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center space-x-2 text-xs md:text-sm text-sky-200 mb-2 md:mb-3">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-white">Products</Link>
                        <span>/</span>
                        <span className="text-white">Refrigerators</span>
                    </div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">Refrigerators</h1>
                    <p className="text-sm md:text-base lg:text-lg text-sky-100 max-w-2xl">
                        Discover our collection of premium refrigerators
                    </p>
                </div>
            </section>

            {/* Filters and Sort - More compact */}
            <section className="border-b border-gray-200 bg-white sticky top-20 z-40">
                <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-2">
                            <select className="border rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm text-gray-700 focus:ring-1 focus:ring-sky-600">
                                <option>All Types</option>
                                <option>French Door</option>
                                <option>Side-by-Side</option>
                                <option>Bottom Freezer</option>
                                <option>Top Freezer</option>
                                <option>Built-In</option>
                            </select>
                            <select className="border rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm text-gray-700 focus:ring-1 focus:ring-sky-600">
                                <option>All Sizes</option>
                                <option>Compact</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>Extra Large</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-600 hidden sm:inline">Sort:</span>
                            <select className="border rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm text-gray-700 focus:ring-1 focus:ring-sky-600">
                                <option>Price: Low-High</option>
                                <option>Price: High-Low</option>
                                <option>Newest</option>
                            </select>
                            <div className="flex items-center space-x-1 border-l pl-2">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1 rounded ${viewMode === 'grid' ? 'bg-sky-100 text-sky-600' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-1 rounded ${viewMode === 'list' ? 'bg-sky-100 text-sky-600' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid - Shorter cards for more rows */}
            <section className="py-4 md:py-6">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Results Count */}
                    <p className="text-xs text-gray-500 mb-3">Showing {products.length} products</p>

                    {/* Grid View */}
                    {viewMode === 'grid' && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition group">
                                    {/* Image - Smaller aspect ratio */}
                                    <div className="relative pt-[75%] overflow-hidden rounded-t-lg bg-gray-50">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    {/* Content - Compact */}
                                    <div className="p-2">
                                        <p className="text-[10px] text-gray-400 truncate">{product.model}</p>
                                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                                            {product.name}
                                        </h3>

                                        {/* Features - Hidden on mobile, visible on larger screens */}
                                        {/* <div className="hidden sm:flex flex-wrap gap-1 mt-1 mb-1">
                                            {product.features.slice(0, 2).map((feature, idx) => (
                                                <span key={idx} className="text-[11px] bg-gray-100 text-gray-600 px-1 py-0.5 rounded">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div> */}

                                        {/* Price and action */}
                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-xs sm:text-sm font-bold text-sky-600">{product.price}</span>
                                            <span className="text-[10px] sm:text-xs text-sky-600 group-hover:translate-x-0.5 transition inline-flex items-center">
                                                View
                                                <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* List View - More compact */}
                    {viewMode === 'list' && (
                        <div className="space-y-2">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition p-2 flex gap-3">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded bg-gray-50">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="truncate">
                                                <p className="text-[10px] text-gray-400 truncate">{product.model}</p>
                                                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{product.name}</h3>
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-sky-600 whitespace-nowrap">{product.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-1">
                                            <div className="flex gap-1">
                                                {product.features.slice(0, 2).map((feature, idx) => (
                                                    <span key={idx} className="text-2xl bg-gray-100 text-gray-600 px-1 py-0.5 rounded hidden sm:inline">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-1">
                                                <button className="text-[10px] bg-sky-600 text-white px-2 py-0.5 rounded hover:bg-sky-700">
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination - Compact */}
                    <div className="mt-6 flex justify-center">
                        <nav className="flex items-center space-x-1">
                            <button className="w-6 h-6 md:w-7 md:h-7 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button key={page} className={`w-6 h-6 md:w-7 md:h-7 rounded text-xs ${page === 1 ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    {page}
                                </button>
                            ))}
                            <button className="w-6 h-6 md:w-7 md:h-7 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}