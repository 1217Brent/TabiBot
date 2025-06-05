import { JSX } from "react";

function Footer(): JSX.Element {
    return (
      <footer className="fixed right-0 left-0 bottom-0 mt-16 border-t border-gray-200 bg-white shadow-inner backdrop-blur-sm">
        <div className="mx-auto max-w-screen-lg px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center space-x-2">
              <img
                src="/TabiBotLogo.png"
                alt="TabiBot Logo"
                className="h-10 w-auto"
              />
              <span className="text-sm font-semibold text-gray-700">
                © {new Date().getFullYear()} TabiBot. All rights reserved.
              </span>
            </div>
  
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="/about" className="hover:text-blue-600 transition">About</a>
              <a href="/privacy" className="hover:text-blue-600 transition">Privacy</a>
              <a href="/terms" className="hover:text-blue-600 transition">Terms</a>
              <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;