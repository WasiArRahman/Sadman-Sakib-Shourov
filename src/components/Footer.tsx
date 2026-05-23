import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Sadman Sakib Saurav. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
