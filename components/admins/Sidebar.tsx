"use client";

import { HomeIcon, SettingsIcon, SheetIcon, WorkflowIcon } from 'lucide-react'
import { signOut } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import { useNotification } from "../Notification";

export default function Sidebar() {
    const { showNotification } = useNotification();

    const handleSignOut = async () => {
        try {
          await signOut();
          showNotification("Signed out successfully", "success");
        } catch {
          showNotification("Failed to sign out", "error");
        }
    };

  return (
    <nav id="sidebar" className="lg:w-[270px] max-lg:fixed transition-all duration-500 shrink-0 z-[100]">
        <div id="sidebar-collapse-menu" className="bg-[#081028] shadow-lg h-screen fixed top-0 left-0 overflow-auto overflow-x-hidden z-[99] lg:w-[270px] max-lg:w-0 max-lg:invisible transition-all duration-500">
            <div className="bg-[#081028] flex items-center gap-4 pt-6 pb-2 px-4 sticky top-0 min-h-[64px] z-[100]">
                <Link href="/" className="flex items-center gap-2">
                    <img src='/assets/logo2.png' className='w-20' />
                    <p className="text-base font-semibold text-gray-300 tracking-wide">Home</p>
                </Link>

                <button id="close-sidebar" className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                        d="M.13 17.05a1.41 1.41 0 0 1 1.41-1.41H10a1.41 1.41 0 1 1 0 2.82H1.54a1.41 1.41 0 0 1-1.41-1.41zm0-14.1a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 2.95zm0 7.05a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 10z"
                        clipRule="evenodd" data-original="#000000" />
                    </svg>
                </button>
            </div>

            <div className="py-4 px-4">
                <div className="flex relative bg-[#0b1739] px-3 py-2.5 rounded-md border border-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-1 inline fill-gray-400" viewBox="0 0 118.783 118.783">
                        <path
                        d="M115.97 101.597 88.661 74.286a47.75 47.75 0 0 0 7.333-25.488c0-26.509-21.49-47.996-47.998-47.996S0 22.289 0 48.798c0 26.51 21.487 47.995 47.996 47.995a47.776 47.776 0 0 0 27.414-8.605l26.984 26.986a9.574 9.574 0 0 0 6.788 2.806 9.58 9.58 0 0 0 6.791-2.806 9.602 9.602 0 0 0-.003-13.577zM47.996 81.243c-17.917 0-32.443-14.525-32.443-32.443s14.526-32.444 32.443-32.444c17.918 0 32.443 14.526 32.443 32.444S65.914 81.243 47.996 81.243z"
                        data-original="#000000" />
                    </svg>
                    <input className="text-sm text-gray-300 outline-none bg-transparent px-1 max-w-[130px]"
                        placeholder="Search..." />
                </div>
                <ul className="space-y-2 mt-6">
                    <li>
                        <Link href="/admin"
                        className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                            <HomeIcon className="mr-2 w-6 h-6" />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/about/67a9f295eb554ceadaf6f32f"
                            className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                            <SettingsIcon className="mr-2 w-6 h-6" />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">About Us</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/services"
                        className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                            <WorkflowIcon className="mr-2 w-6 h-6" />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">Services</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/yogas"
                        className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                            <SheetIcon className="mr-2 w-6 h-6" />
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">Yoga Types</span>
                        </Link>
                    </li>
                </ul>

                <hr className="border-gray-600 my-6" />

                <div>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#"
                                onClick={handleSignOut}
                                className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                viewBox="0 0 214.27 214.27">
                                <path
                                    d="M196.926 55.171c-.11-5.785-.215-11.25-.215-16.537a7.5 7.5 0 0 0-7.5-7.5c-32.075 0-56.496-9.218-76.852-29.01a7.498 7.498 0 0 0-10.457 0c-20.354 19.792-44.771 29.01-76.844 29.01a7.5 7.5 0 0 0-7.5 7.5c0 5.288-.104 10.755-.215 16.541-1.028 53.836-2.436 127.567 87.331 158.682a7.495 7.495 0 0 0 4.912 0c89.774-31.116 88.368-104.849 87.34-158.686zm-89.795 143.641c-76.987-27.967-75.823-89.232-74.79-143.351.062-3.248.122-6.396.164-9.482 30.04-1.268 54.062-10.371 74.626-28.285 20.566 17.914 44.592 27.018 74.634 28.285.042 3.085.102 6.231.164 9.477 1.032 54.121 2.195 115.388-74.798 143.356z"
                                    data-original="#000000" />
                                <path
                                    d="m132.958 81.082-36.199 36.197-15.447-15.447a7.501 7.501 0 0 0-10.606 10.607l20.75 20.75a7.477 7.477 0 0 0 5.303 2.196 7.477 7.477 0 0 0 5.303-2.196l41.501-41.5a7.498 7.498 0 0 0 .001-10.606 7.5 7.5 0 0 0-10.606-.001z"
                                    data-original="#000000" />
                                </svg>
                                <span>Log Out</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/admin/home-settings/67a9c48f5df4c549d6d5b296"
                                className="text-gray-300 text-sm flex items-center cursor-pointer hover:bg-[#0b1739] rounded-md px-3 py-2.5 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-3"
                                viewBox="0 0 64 64">
                                <path
                                    d="M61.4 29.9h-6.542a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2h33.978a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2Zm-15.687 7.287A5.187 5.187 0 1 1 50.9 32a5.187 5.187 0 0 1-5.187 5.187ZM2.6 13.1h5.691a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2H26.571a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2Zm14.837-7.287A5.187 5.187 0 0 1 22.613 11a5.187 5.187 0 0 1-10.364 0 5.187 5.187 0 0 1 5.187-5.187ZM61.4 50.9H35.895a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2h15.015a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2Zm-34.65 7.287A5.187 5.187 0 1 1 31.937 53a5.187 5.187 0 0 1-5.187 5.187Z"
                                    data-name="Layer 47" data-original="#000000" />
                                </svg>
                                <span>Preferences</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-6 flex items-center cursor-pointer">
                        <img src='/assets/pc1.jpg'
                            className="w-9 h-9 rounded-full border-2 border-gray-600 shrink-0" />
                        <div className="ml-4">
                            <p className="text-sm text-gray-300 whitespace-nowrap">Jyoti</p>
                            <p className="text-xs text-gray-400 whitespace-nowrap">Active Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
