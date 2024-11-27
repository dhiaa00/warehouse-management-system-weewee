import Link from "next/link";
import {
  Home,
  Package,
  Filter,
  TrendingUp,
  FileText,
  Users,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link
          href="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link
          href="/package-management"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Package className="inline-block mr-2" size={20} />
          Package Management
        </Link>
        <Link
          href="/allocation"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Filter className="inline-block mr-2" size={20} />
          Allocation
        </Link>
        <Link
          href="/prediction"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <TrendingUp className="inline-block mr-2" size={20} />
          Stock Prediction
        </Link>
        <Link
          href="/reports"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2" size={20} />
          Reports
        </Link>
        <Link
          href="/user-management"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          User Management
        </Link>
      </nav>
    </div>
  );
}
