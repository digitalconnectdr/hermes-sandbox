export default function Footer() {
  return (
    <footer className="bg-[#09090b] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Velora
            </h3>
            <p className="text-gray-400">
              Premium Private Transportation Service
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
          </div>
          
          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
          
          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-1.023 1.52l-4.116.998a7 7 0 00-2.921 2.92l-.998 4.116a1 1 0 01-1.52 1.023l-4.493 1.498A1 1 0 010 17.72V19a2 2 0 012 2h10a2 2 0 012-2V6.28a1 1 0 01.293-.707l3.414-3.414a1 1 0 00-.293-.707V3a2 2 0 01-2-2zM3 19a2 2 0 002 2h10a2 2 0 002-2V7.28a1 1 0 01.293-.707l3.414-3.414a1 1 0 011.414 0l3.414 3.414A1 1 0 0121 10.72v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              </svg>
              <span>info@velora.com</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <span>+1 (555) 123-4567</span>
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1e293b] flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Velora. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}