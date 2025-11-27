import React from "react";
import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 border-b bg-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Menu className="w-5 h-5 text-gray-600 lg:hidden" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded" />
              <div className="w-20 h-6 bg-gray-300 rounded" />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {['Home', 'Tech', 'Business', 'Sports', 'Entertainment', 'Health', 'Science', 'Travel', 'Food', 'Style'].map((item) => (
              <span key={item} className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                {item}
              </span>
            ))}
          </nav>
          
          {/* Search */}
          <div className="flex items-center gap-4">
            <div className="w-32 h-8 bg-gray-300 rounded hidden md:block" />
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}