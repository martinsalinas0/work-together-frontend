import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => (
  <div className="">
    <nav className="min-w-auto bg-darkblue shadow-2xl px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-offwhite hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            ffff
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Dashboard Settings
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Add Company
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Data
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Buttons
          </Link>
          <Link
            href="/dashboard"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Test Page{" "}
          </Link>
        </div>

        {/* Right side user info */}
        <div className="text-orange-200 font-bold px-3 py-2">
          <Link href="/user-profile">User</Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
