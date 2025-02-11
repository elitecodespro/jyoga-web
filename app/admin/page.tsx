import Link from 'next/link'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className="mt-12 mb-6 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="min-h-[245px]">
            <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-5">Services</h3>
            <Link href="/admin/services"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Create Services</Link>
          </div>
        </div>

        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="min-h-[245px]">
            <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-5">About Jyoga</h3>
            <Link href="/admin/about/67a9f295eb554ceadaf6f32f"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Edit About Jyoga Content</Link>
          </div>
        </div>

        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="min-h-[245px]">
            <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-5">Jyoga Types</h3>
            <Link href="/admin/yogas"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Manage Yoga Types</Link>
          </div>
        </div>

        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="min-h-[245px]">
            <img src="https://readymadeui.com/cardImg.webp" className="w-full rounded-lg" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-5">Home Settings</h3>
            <Link href="/admin/home-settings/67a9c48f5df4c549d6d5b296"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Edit Home Page</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard