"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/CapriLogo.png'

export default function Navbar() {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const products = [
        {
            category: 'Refrigeration',
            items: [
                { name: 'Fridges', href: '/products/fridges' },
                { name: 'Freezers', href: '/products/freezers' },
                { name: 'Ice Makers', href: '/products/ice-makers' },
            ]
        },
        {
            category: 'Kitchen Appliances',
            items: [
                { name: 'Cookware', href: '/products/cookware' },
                { name: 'Kettles', href: '/products/kettles' },
                { name: 'Toasters', href: '/products/toasters' },
                { name: 'Microwaves', href: '/products/microwaves' },
            ]
        },
        {
            category: 'Home & Energy',
            items: [
                { name: 'Laundry', href: '/products/laundry' },
                { name: 'Air Conditioning', href: '/products/air-conditioning' },
                { name: 'Solar', href: '/products/solar' },
            ]
        },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src={Logo} alt='Capri Logo' height={90} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <Link
                                href="/products"
                                className="flex items-center space-x-1 text-gray-700 hover:text-sky-700 font-medium transition py-2"
                            >
                                <span>Products</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Menu - Now attached directly with no gap */}
                            {isProductsOpen && (
                                <div className="absolute left-0 top-full pt-2 w-[700px]">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-6 grid grid-cols-3 gap-6 px-6">
                                        {products.map((category, index) => (
                                            <div key={index}>
                                                <h3 className="text-sm font-semibold text-sky-700 uppercase tracking-wider mb-3">
                                                    {category.category}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {category.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-gray-600 hover:text-sky-700 text-sm transition block py-1"
                                                                onClick={() => setIsProductsOpen(false)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="text-gray-700 hover:text-sky-700 font-medium transition py-2">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-sky-700 font-medium transition py-2">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <Link href="/credit-application" className="bg-sky-700 text-white px-5 py-2 rounded-lg hover:bg-sky-800 transition font-medium">
                            Buy on Credit
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gray-700 hover:text-sky-700 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200">
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-sm font-semibold text-sky-700 uppercase tracking-wider mb-2">Products</h3>
                                {products.map((category, index) => (
                                    <div key={index} className="ml-4 mb-3">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">{category.category}</h4>
                                        {category.items.map((item, itemIndex) => (
                                            <Link
                                                key={itemIndex}
                                                href={item.href}
                                                className="block py-1.5 text-gray-600 hover:text-sky-700 text-sm"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/about"
                                className="block py-2 text-gray-700 hover:text-sky-700 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="block py-2 text-gray-700 hover:text-sky-700 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/credit-application"
                                className="block mt-4 bg-sky-700 text-white px-4 py-2.5 rounded-lg text-center font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Buy on Credit
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}