"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import freezer from '@/public/freezer.png'
import washing from '@/public/washing.png'
import fridge from '@/public/fridge.png'
import solar from '@/public/solar.png'
import hero from '@/public/hero.png'

export default function Home() {
  const premiumProducts = [
    {
      name: 'FRIDGES',
      href: '/products/fridges',
      image: fridge.src,
    },
    {
      name: 'FREEZERS',
      href: '/products/freezers',
      image: freezer.src,
    },
    {
      name: 'WASHING MACHINES',
      href: '/products/laundry',
      image: washing.src,
    },
    {
      name: 'SOLAR',
      href: '/products/solar',
      image: solar.src,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={hero.src}
            alt="Modern kitchen with appliances"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-sky-900/95 via-sky-800/65 to-sky-500/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-sky-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              Proudly Zimbabwean • Established 1966
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Professional-Grade Appliances for the Modern Home
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed">
              Discover our comprehensive range of refrigerators, freezers, washing machines, and kitchen appliances. Engineered for performance, designed for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
              <Link href="/products" className="bg-white text-sky-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-sky-50 transition shadow-lg text-center">
                Explore Products
              </Link>
              <Link href="/credit-application" className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-900 transition backdrop-blur-sm text-center">
                Apply for Credit
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges - Mobile Optimized */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-3 sm:gap-0 items-center text-xs sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sky-100 whitespace-nowrap">10-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sky-100 whitespace-nowrap">Energy Star</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sky-100 whitespace-nowrap">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sky-100 whitespace-nowrap">Credit Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Featured Categories - Mobile Optimized */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-0">
          <div className="text-center mb-8 sm:mb-12 pt-12 sm:pt-20 px-4">
            <span className="text-sky-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Premium Collection</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">Featured Categories</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular appliance categories, engineered for excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {premiumProducts.map((product, index) => (
              <Link key={index} href={product.href} className="group relative overflow-hidden">
                <div className="relative aspect-square">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Text - Mobile Optimized */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8">
                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-1 sm:mb-2 tracking-wide font-bold">
                      {product.name}
                    </h3>
                    <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-sky-400 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-sky-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">
                Proudly Zimbabwean, <br className="hidden sm:block" />Built to Last
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                For over 60 years, we've been providing Zimbabwean homes and businesses with premium appliances that combine innovative technology, energy efficiency, and elegant design. Every product in our showroom is selected with the local market in mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: 'Locally Made', desc: 'Supporting Zimbabwean manufacturing' },
                  { title: 'Energy Efficient', desc: 'Meeting global standards' },
                  { title: 'Flexible Credit', desc: 'Easy payment options' },
                  { title: '10-Year Warranty', desc: 'Peace of mind guaranteed' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-linear-to-br from-sky-600 to-sky-800 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Visit Our Showroom</h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-sm sm:text-base">
                        <p className="font-semibold text-gray-900">Harare Showroom</p>
                        <p className="text-gray-600">Pomona Industrial Park</p>
                        <p className="text-gray-600">Along Harare Drive, Harare</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-sm sm:text-base">
                        <p className="font-semibold text-gray-900">Opening Hours</p>
                        <p className="text-gray-600">Mon-Fri: 8:00 - 17:00</p>
                        <p className="text-gray-600">Sat: 8:00 - 14:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 rounded-lg overflow-hidden h-32 sm:h-40 md:h-48">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0102697008433!2d31.070942175023358!3d-17.744155273980535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a517c69a2181%3A0xe34a321ae0a5ed46!2sCapri%20Zimbabwe!5e0!3m2!1sen!2szw!4v1773655863184!5m2!1sen!2szw"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="Showroom location"
                      className="w-full h-full bg-gray-200"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-sky-100 rounded-full -z-10"></div>
              <div className="hidden sm:block absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-sky-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit CTA Section - Mobile Optimized */}
      <section className="relative bg-linear-to-r from-sky-900 to-sky-800 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Upgrade Your Home?</h2>
          <p className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Take advantage of our flexible credit options. Get approved today and spread your payments.
          </p>
          <Link
            href="/credit-application"
            className="inline-flex items-center bg-white text-sky-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-sky-50 transition shadow-2xl text-sm sm:text-base md:text-lg"
          >
            Apply for Credit Now
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}