"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define types for form data
interface FormData {
    // Personal Information
    firstName: string;
    lastName: string;
    idNumber: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    alternatePhone: string;

    // Employment Information
    employmentStatus: string;
    employerName: string;
    employmentDuration: string;
    monthlyIncome: string;

    // Address Information
    residentialAddress: string;
    postalAddress: string;

    // Product Information
    productInterest: string;
    estimatedPrice: string;
    depositAmount: string;

    // Additional Information
    hasExistingLoan: string;
    termsAccepted: boolean;
}

// Define type for API submission
interface ApiSubmissionData extends Omit<FormData, 'termsAccepted'> {
    idCopy: File | null;
    proofOfResidence: File | null;
    payslip: File | null;
}

type SubmitStatus = 'success' | 'error' | null;

export default function CreditApplication() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
    const [files, setFiles] = useState<{
        idCopy: File | null;
        proofOfResidence: File | null;
        payslip: File | null;
    }>({
        idCopy: null,
        proofOfResidence: null,
        payslip: null,
    });

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            firstName: '',
            lastName: '',
            idNumber: '',
            dateOfBirth: '',
            email: '',
            phone: '',
            alternatePhone: '',
            employmentStatus: '',
            employerName: '',
            employmentDuration: '',
            monthlyIncome: '',
            residentialAddress: '',
            postalAddress: '',
            productInterest: '',
            estimatedPrice: '',
            depositAmount: '',
            hasExistingLoan: '',
            termsAccepted: false,
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof files) => {
        const file = e.target.files?.[0] || null;
        setFiles(prev => ({ ...prev, [fieldName]: file }));
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            // Prepare data for backend
            const submissionData: ApiSubmissionData = {
                // Personal Information
                firstName: data.firstName,
                lastName: data.lastName,
                idNumber: data.idNumber,
                dateOfBirth: data.dateOfBirth,
                email: data.email,
                phone: data.phone,
                alternatePhone: data.alternatePhone,

                // Employment Information
                employmentStatus: data.employmentStatus,
                employerName: data.employerName,
                employmentDuration: data.employmentDuration,
                monthlyIncome: data.monthlyIncome,

                // Address Information
                residentialAddress: data.residentialAddress,
                postalAddress: data.postalAddress,

                // Product Information
                productInterest: data.productInterest,
                estimatedPrice: data.estimatedPrice,
                depositAmount: data.depositAmount,

                // Additional Information
                hasExistingLoan: data.hasExistingLoan,

                // Files
                idCopy: files.idCopy,
                proofOfResidence: files.proofOfResidence,
                payslip: files.payslip,
            };

            // Create FormData for file uploads
            const formData = new FormData();

            // Append all text fields
            Object.entries(submissionData).forEach(([key, value]) => {
                if (value !== null && value !== undefined && typeof value !== 'object') {
                    formData.append(key, value.toString());
                }
            });

            // Append files
            if (files.idCopy) formData.append('idCopy', files.idCopy);
            if (files.proofOfResidence) formData.append('proofOfResidence', files.proofOfResidence);
            if (files.payslip) formData.append('payslip', files.payslip);

            // Uncomment for actual API call
            // const response = await fetch('/api/credit-application', {
            //   method: 'POST',
            //   body: formData,
            // });
            // 
            // if (!response.ok) {
            //   throw new Error('Submission failed');
            // }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Reset form on success
            reset();
            setFiles({
                idCopy: null,
                proofOfResidence: null,
                payslip: null,
            });

            setSubmitStatus('success');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <section className="bg-linear-to-r from-sky-900 to-sky-800 text-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center space-x-2 text-xs md:text-sm text-sky-200 mb-3 md:mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <span className="text-white">Credit Application</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Apply for Credit</h1>
                    <p className="text-sm md:text-base lg:text-lg text-sky-100 max-w-2xl">
                        Complete the form below to apply for flexible payment options on your appliance purchase.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-green-700">Application submitted successfully! Our team will contact you within 24-48 hours.</span>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-red-700">There was an error submitting your application. Please try again.</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Personal Information */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                    <input
                                        type="text"
                                        {...register('firstName', { required: 'First name is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        {...register('lastName', { required: 'Last name is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">ID/Passport Number *</label>
                                    <input
                                        type="text"
                                        {...register('idNumber', { required: 'ID/Passport number is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.idNumber && (
                                        <p className="text-red-500 text-xs mt-1">{errors.idNumber.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                                    <input
                                        type="date"
                                        {...register('dateOfBirth', { required: 'Date of birth is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.dateOfBirth && (
                                        <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        {...register('phone', { required: 'Phone number is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone Number</label>
                                    <input
                                        type="tel"
                                        {...register('alternatePhone')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Employment Information */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Employment Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status *</label>
                                    <select
                                        {...register('employmentStatus', { required: 'Employment status is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="employed">Employed - Full Time</option>
                                        <option value="self-employed">Self Employed</option>
                                        <option value="contract">Contract Employee</option>
                                        <option value="business">Business Owner</option>
                                    </select>
                                    {errors.employmentStatus && (
                                        <p className="text-red-500 text-xs mt-1">{errors.employmentStatus.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Employer/Business Name *</label>
                                    <input
                                        type="text"
                                        {...register('employerName', { required: 'Employer/Business name is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.employerName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.employerName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Employment Duration (Years) *</label>
                                    <input
                                        type="number"
                                        step="0.5"
                                        {...register('employmentDuration', {
                                            required: 'Employment duration is required',
                                            min: { value: 0, message: 'Must be 0 or greater' }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.employmentDuration && (
                                        <p className="text-red-500 text-xs mt-1">{errors.employmentDuration.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (USD) *</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register('monthlyIncome', {
                                            required: 'Monthly income is required',
                                            min: { value: 0, message: 'Must be 0 or greater' }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.monthlyIncome && (
                                        <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                Address Information
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
                                    <textarea
                                        rows={2}
                                        {...register('residentialAddress', { required: 'Residential address is required' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    ></textarea>
                                    {errors.residentialAddress && (
                                        <p className="text-red-500 text-xs mt-1">{errors.residentialAddress.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Address</label>
                                    <textarea
                                        rows={2}
                                        {...register('postalAddress')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </span>
                                Product Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Interested In *</label>
                                    <select
                                        {...register('productInterest', { required: 'Please select a product' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    >
                                        <option value="">Select Product</option>
                                        <option value="fridges">Refrigerators</option>
                                        <option value="freezers">Freezers</option>
                                        <option value="washing">Washing Machines</option>
                                        <option value="solar">Solar Solutions</option>
                                        <option value="ac">Air Conditioning</option>
                                        <option value="kitchen">Kitchen Appliances</option>
                                    </select>
                                    {errors.productInterest && (
                                        <p className="text-red-500 text-xs mt-1">{errors.productInterest.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Price (USD) *</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register('estimatedPrice', {
                                            required: 'Estimated price is required',
                                            min: { value: 0, message: 'Must be 0 or greater' }
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.estimatedPrice && (
                                        <p className="text-red-500 text-xs mt-1">{errors.estimatedPrice.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deposit Amount (USD)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register('depositAmount', { min: { value: 0, message: 'Must be 0 or greater' } })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    />
                                    {errors.depositAmount && (
                                        <p className="text-red-500 text-xs mt-1">{errors.depositAmount.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                Additional Information
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Do you have any existing loans?</label>
                                    <select
                                        {...register('hasExistingLoan')}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-sky-500 text-gray-900"
                                    >
                                        <option value="">Select</option>
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Required Documents */}
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </span>
                                Required Documents
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Copy of ID/Passport *</label>
                                    <input
                                        type="file"
                                        required
                                        onChange={(e) => handleFileChange(e, 'idCopy')}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:outline-none"
                                    />
                                    {!files.idCopy && (
                                        <p className="text-red-500 text-xs mt-1">ID/Passport copy is required</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Proof of Residence *</label>
                                    <input
                                        type="file"
                                        required
                                        onChange={(e) => handleFileChange(e, 'proofOfResidence')}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:outline-none"
                                    />
                                    {!files.proofOfResidence && (
                                        <p className="text-red-500 text-xs mt-1">Proof of residence is required</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Latest Payslip or Bank Statement *</label>
                                    <input
                                        type="file"
                                        required
                                        onChange={(e) => handleFileChange(e, 'payslip')}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:outline-none"
                                    />
                                    {!files.payslip && (
                                        <p className="text-red-500 text-xs mt-1">Payslip or bank statement is required</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="p-6 bg-gray-50">
                            <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 mb-6">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="text-sm text-amber-800">
                                        <p className="font-semibold mb-1">Important Credit Information</p>
                                        <p>
                                            Credit will be provided through Rafiki (Private) Limited, an authorized financial services provider. All credit applications are subject to credit assessment and approval. Terms and conditions apply.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div className="mb-6">
                                <label className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                                        className="mt-1 w-4 h-4 text-sky-600 focus:ring-0 focus:ring-offset-0 focus:outline-none border-gray-300 rounded"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I confirm that the information provided is true and correct. I authorize Capri to verify my details and conduct a credit check. I have read and agree to the <Link href="/terms" className="text-sky-600 hover:underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link>.
                                    </span>
                                </label>
                                {errors.termsAccepted && (
                                    <p className="text-red-500 text-xs mt-1">{errors.termsAccepted.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !files.idCopy || !files.proofOfResidence || !files.payslip}
                                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Your information is secure and will only be used for credit assessment purposes.
                            </p>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}