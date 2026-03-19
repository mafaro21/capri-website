import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Picture from '@/public/caprishow.jpg'
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-linear-to-r from-sky-700 via-sky-800 to-sky-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Capri Zimbabwe</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Over 60 years of excellence in home appliances
                    </p>
                </div>
            </section>

            {/* History */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-2 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded in 1966, Capri Appliances has become a leading manufacturer in the home appliance industry. Capri’s products have always been associated with Style, Durability, and Service since its inception.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Capri consumers have grown to love the Capri brand, making it a household name in many homes throughout Southern Africa.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                We have now established itself in many neighboring countries which include Zambia, Mozambique, Malawi, DRC, Botswana, and countries being reviewed for further expansion include South African and Swaziland.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Capri has also grown its product range which now includes Gas Cookers, Laundry, Air Conditioning, and a range of popular small appliances. Capri provides professional full spares and warranty support in all countries it operates in.
                            </p>
                        </div>
                        <div className=" flex items-center justify-center">
                            <Image src={Picture} alt='Capri Showroom' className='rounded-xl' height={440} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Quality',
                                desc: 'We source and manufacture only the highest quality appliances that stand the test of time.',
                                icon: '⭐'
                            },
                            {
                                title: 'Local Pride',
                                desc: 'Proudly Zimbabwean, supporting local industry and employment.',
                                icon: '🤝'
                            },
                            {
                                title: 'Customer First',
                                desc: 'Your satisfaction is our priority, from purchase to after-sales support.',
                                icon: '❤️'
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}