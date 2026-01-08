import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                <span className="text-xl font-bold text-white">TechVenture Labs</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link to="/programs" className="text-slate-300 hover:text-white transition-colors">Programs</Link>
              <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</Link>
              <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                Apply Now
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-4 border-t border-slate-700 mt-2 animate-fade-in">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-slate-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Home</Link>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>About</Link>
                <Link to="/programs" className="text-slate-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Programs</Link>
                <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Portfolio</Link>
                <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg transition-colors text-center" onClick={closeMobileMenu}>
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                <span className="text-lg font-bold text-white">TechVenture Labs</span>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering the next generation of tech innovators since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/programs" className="hover:text-white">Accelerator</Link></li>
                <li><Link to="/programs" className="hover:text-white">Incubator</Link></li>
                <li><Link to="/programs" className="hover:text-white">Mentorship</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 TechVenture Labs. All rights reserved.</p>
            <p className="mt-2 text-xs">Demo Site 4 — Powered by DCS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
