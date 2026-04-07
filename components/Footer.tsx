import React from 'react';
import Link from 'next/link';
import Logo from '@/public/CapriLogo.png'
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 py-10">
            <div className="container mx-auto px-6">
                {/* Grid: 2 columns on mobile, 4 columns on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info - Spans both columns on mobile, first column on desktop */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-3">
                            <Image src={Logo} alt='' height={110} />
                        </div>
                        <p className="text-sm">Premium appliances for the modern Zimbabwean home since 1966.</p>
                    </div>

                    {/* Products - First column on mobile */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products/fridges" className="hover:text-blue-400">Refrigeration</Link></li>
                            <li><Link href="/products/freezers" className="hover:text-blue-400">Freezers</Link></li>
                            <li><Link href="/products/laundry" className="hover:text-blue-400">Laundry</Link></li>
                            <li><Link href="/products/ice-makers" className="hover:text-blue-400">Cooking</Link></li>
                            <li><Link href="/products/air-conditioning" className="hover:text-blue-400">Air Conditioning</Link></li>
                            <li><Link href="/products/kitchen" className="hover:text-blue-400">Kitchen Appliances</Link></li>
                            <li><Link href="/products/bespoke" className="hover:text-blue-400">Bespoke</Link></li>
                        </ul>
                    </div>

                    {/* Products Continued - Second column on mobile */}
                    {/* <div>
                        <h4 className="text-white font-semibold mb-4 invisible lg:visible">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/products/solar" className="hover:text-blue-400">Solar</Link></li>
                            <li><Link href="/products/cookware" className="hover:text-blue-400">Cookware</Link></li>
                            <li><Link href="/products/kettles" className="hover:text-blue-400">Kettles</Link></li>
                            <li><Link href="/products/toasters" className="hover:text-blue-400">Toasters</Link></li>
                            <li><Link href="/products/microwaves" className="hover:text-blue-400">Microwaves</Link></li>
                        </ul>
                    </div> */}

                    {/* Company - First column on mobile second row */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="/credit-application" className="hover:text-blue-400">Credit Application</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Second column on mobile second row */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+263 242755892-8</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@capri.co.zw</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <div>
                                    <p><span className='font-bold'>Factory:</span> 176 Seke Road</p>
                                    <p>Graniteside, Harare</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p><span className='font-bold'>Showroom:</span> Pomona Industrial Park</p>
                                    <p>Along Harare Drive, Harare</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Capri Zimbabwe. All rights reserved. Proudly Zimbabwean.</p>
                </div>
            </div>
        </footer>
    );
}