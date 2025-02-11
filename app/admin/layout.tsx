import AdminHeader from "@/components/admins/AdminHeader";
import Sidebar from "@/components/admins/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative bg-[#070b18] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        <Sidebar />
        <button id="open-sidebar" className='ml-auto fixed top-[30px] left-[18px]'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M.13 17.05a1.41 1.41 0 0 1 1.41-1.41H10a1.41 1.41 0 1 1 0 2.82H1.54a1.41 1.41 0 0 1-1.41-1.41zm0-14.1a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 2.95zm0 7.05a1.41 1.41 0 0 1 1.41-1.41h16.92a1.41 1.41 0 1 1 0 2.82H1.54A1.41 1.41 0 0 1 .13 10z"
              clipRule="evenodd" data-original="#000000" />
          </svg>
        </button>
        <section className="main-content w-full p-6 max-lg:ml-8">
          <AdminHeader />
          {children}
        </section>
      </div>
    </div>
  );
}
