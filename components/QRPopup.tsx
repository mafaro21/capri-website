"use client";
import React, { useState } from 'react';

export default function QRPopup() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 w-48 sm:w-56 overflow-hidden shadow-gray-600">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition p-1 z-10"
                    aria-label="Close"
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-6 mt-2 sm:p-4 text-center">

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">
                        Want to purchase on credit?
                    </h3>

                    {/* QR Code - Simple visual representation */}
                    <div className="flex justify-center mb-2">
                        <div className="bg-gray-900 p-2 rounded-lg">
                            <div className="grid grid-cols-5 gap-0.5">
                                {[...Array(25)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${[0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24].includes(i)
                                            ? 'bg-white'
                                            : 'bg-transparent'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scan text */}
                    <p className="text-[10px] sm:text-xs text-gray-900">
                        Scan to apply
                    </p>
                </div>
            </div>
        </div>
    );
}