import Link from 'next/link'
import React from 'react'

export default function AdminHeader() {
  return (
        <div>
            <div className="flex items-center flex-wrap gap-6">
            <div>
                <h3 className="text-lg font-semibold text-white">Welcome back, Jyoti</h3>
                <p className="text-xs text-gray-300">
                Your dashboard for your website personalization.
                </p>
            </div>

            <div className="ml-auto">
                <div className="flex gap-4">
                    <Link href="/admin/services"
                        className="flex items-center px-4 py-2.5 text-sm text-white bg-[#0b1739] border-0 outline-0 rounded">
                        Create Services
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 fill-white w-3.5 h-3.5" viewBox="0 0 6.35 6.35">
                        <path
                            d="M3.173.058a.284.284 0 0 0-.28.29L2.892 4.59a.284.284 0 1 0 .566 0L3.46.347a.284.284 0 0 0-.287-.289zM1.758 4.303a.284.284 0 0 0-.196.487l1.415 1.414a.284.284 0 0 0 .401 0L4.793 4.79a.284.284 0 0 0-.401-.401L3.178 5.605 1.96 4.39a.284.284 0 0 0-.203-.086z"
                            data-original="#000000" />
                        </svg>
                    </Link>
                    <Link href="/admin/home-settings/67a9c48f5df4c549d6d5b296"
                        className="flex items-center px-4 py-2.5 text-sm text-white bg-[#017bfe] border-0 outline-0 rounded">
                        Home Settings
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
