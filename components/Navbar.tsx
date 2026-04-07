"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/CapriLogo.png'

// Type definitions
interface Subcategory {
    name: string;
    href: string;
}

interface MainCategory {
    name: string;
    href: string;
    hasSubcategories: boolean;
}

type SubcategoriesMap = {
    [key: string]: Subcategory[];
}

export default function Navbar() {
    const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // Main categories that link to their own pages
    const mainCategories: MainCategory[] = [
        { name: 'Refrigerators', href: '/products/fridges', hasSubcategories: true },
        { name: 'Freezers', href: '/products/freezers', hasSubcategories: true },
        { name: 'Laundry', href: '/products/laundry', hasSubcategories: true },
        { name: 'Cooking', href: '/products/cooking', hasSubcategories: true },
        { name: 'Air Conditioning', href: '/products/air-conditioning', hasSubcategories: true },
        { name: 'Kitchen Appliances', href: '/products/kitchen-appliances', hasSubcategories: true },
        { name: 'Bespoke', href: '/products/bespoke', hasSubcategories: true },
    ];

    // Subcategories for each main category (these will filter on the category page)
    const subcategories: SubcategoriesMap = {
        'Refrigerators': [
            { name: 'Top Freezer', href: '/products/refrigerators?type=top-freezer' },
            { name: 'Combi', href: '/products/refrigerators?type=combi' },
            { name: 'Upright Fridge', href: '/products/refrigerators?type=upright-fridge' },
            { name: 'Beverage Cooler', href: '/products/refrigerators?type=beverage-cooler' },
            { name: 'Side-by-Side', href: '/products/refrigerators?type=side-by-side' },
            { name: 'French / 4 Door', href: '/products/refrigerators?type=french-door' },
            { name: 'Bar Fridge', href: '/products/refrigerators?type=bar-fridge' },
            { name: 'Single Door', href: '/products/refrigerators?type=single-door' },
        ],
        'Freezers': [
            { name: 'Chest Freezers', href: '/products/freezers?type=chest' },
            { name: 'Upright Freezers', href: '/products/freezers?type=upright' },
        ],
        'Laundry': [
            { name: 'Front Load Washers', href: '/products/laundry?type=front-load' },
            { name: 'Top Load Washers', href: '/products/laundry?type=top-load' },
            { name: 'Dryers', href: '/products/laundry?type=dryers' },
            { name: 'Commercial', href: '/products/laundry?type=commercial' },
            { name: 'Twin Tubs', href: '/products/laundry?type=twin-tubs' },
            { name: 'Washer-Dryer Combos', href: '/products/laundry?type=combo' },
        ],
        'Cooking': [
            { name: 'Freestanding', href: '/products/cooking?type=freestanding' },
            { name: 'Built In', href: '/products/cooking?type=built-in' },
            { name: 'Hobs', href: '/products/cooking?type=hobs' },
            { name: 'Cooking Accessories', href: '/products/cooking?type=accessories' },
        ],
        'Air Conditioning': [
            { name: 'Split Systems', href: '/products/air-conditioning?type=split' },
            { name: 'Fans', href: '/products/air-conditioning?type=fans' },
            { name: 'Heaters', href: '/products/air-conditioning?type=heaters' },
        ],
        'Kitchen Appliances': [
            { name: 'Kettles', href: '/products/kitchen-appliances?type=kettles' },
            { name: 'Toasters', href: '/products/kitchen-appliances?type=toasters' },
            { name: 'Irons', href: '/products/kitchen-appliances?type=irons' },
            { name: 'Blenders', href: '/products/kitchen-appliances?type=blenders' },
            { name: 'Microwaves', href: '/products/kitchen-appliances?type=microwaves' },
            { name: 'Air Fryer', href: '/products/kitchen-appliances?type=air-fryer' },
            { name: 'Frying Pans', href: '/products/kitchen-appliances?type=frying-pans' },
            { name: 'Ice Makers', href: '/products/kitchen-appliances?type=ice-makers' },
            { name: 'Water Cooler', href: '/products/kitchen-appliances?type=water-cooler' },
        ],
        'Bespoke': [
            { name: 'Colour Fridge', href: '/products/bespoke?type=colour-fridge' },
            { name: 'Colour Freezer', href: '/products/bespoke?type=colour-freezer' },
            { name: 'Cooler Box', href: '/products/bespoke?type=cooler-box' },
        ],
    };

    // Quick links for popular categories
    const quickLinks = [
        { name: 'Fridges', href: '/products/refrigerators' },
        { name: 'Freezers', href: '/products/freezers' },
        { name: 'Laundry', href: '/products/laundry' },
        { name: 'AC', href: '/products/air-conditioning' },
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
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <div className="flex items-center space-x-1 text-gray-700 hover:text-sky-700 font-medium transition py-2 cursor-pointer">
                                <span>Products</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Dropdown Menu - Shows main categories with their subcategories */}
                            {isProductsOpen && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-screen max-w-[950px]">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-6 mx-4">
                                        <div className="grid grid-cols-4 gap-6 px-6">
                                            {mainCategories.map((category) => (
                                                <div key={category.name}>
                                                    {/* Main Category Link */}
                                                    <Link
                                                        href={category.href}
                                                        className="block font-semibold text-sky-700 hover:text-sky-950 text-sm uppercase tracking-wider mb-3 transition"
                                                        onClick={() => setIsProductsOpen(false)}
                                                    >
                                                        {category.name}
                                                    </Link>

                                                    {/* Subcategories */}
                                                    {category.hasSubcategories && subcategories[category.name] && (
                                                        <ul className="space-y-0">
                                                            {subcategories[category.name].map((item) => (
                                                                <li key={item.name}>
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
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Links to Main Categories */}
                        {/* <div className="flex items-center space-x-4 border-l pl-6 ml-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-sky-700 text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div> */}

                        <Link href="/about" className="text-gray-700 hover:text-sky-700 font-medium transition py-2">
                            About
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
                        aria-label="Toggle menu"
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

                {/* Mobile Menu - Simplified with main categories and their subcategories */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
                        <div className="space-y-4">
                            {/* Main Categories with Subcategories */}
                            {mainCategories.map((category) => (
                                <div key={category.name} className="border-b border-gray-100 pb-3">
                                    <Link
                                        href={category.href}
                                        className="block font-semibold text-gray-900 hover:text-sky-700 text-base mb-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {category.name}
                                    </Link>

                                    {/* Subcategories for mobile */}
                                    {category.hasSubcategories && subcategories[category.name] && (
                                        <div className="grid grid-cols-2 gap-2 ml-2">
                                            {subcategories[category.name].map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block py-1.5 text-gray-600 hover:text-sky-700 text-sm"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

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