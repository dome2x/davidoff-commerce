'use client'

import { builder } from '@builder.io/sdk'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import LocaleSelector from './locale-selector'


export default function NavBar() {
  const t = useTranslations('navbar');
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const params = useParams();
  const { locale } = params;
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  
  return (
    <div className="font-sans">
      {/* Top banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Get free shipping when you spend $500 or more!
      </div>

      {/* Main navigation */}
      <nav className="bg-[#1a1a1a] text-[#d4af37] py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-6">
              <button className="text-[#d4af37]" aria-label="Menu">
                <Menu size={24} />
              </button>
              <button
                className="text-[#d4af37] z-10"
                aria-label="Search"
                onClick={toggleSearch}
              >
                {isSearchOpen ? <X size={24} /> : <Search size={24} />}
              </button>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">{t("discover")}</a>
                <a href="#" className="hover:text-white transition-colors">{t("gift")}</a>
                <a href="#" className="hover:text-white transition-colors">{t("shop")}</a>
              </div>
            </div>

            {/* Center logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
              <Link href={`/${locale}/bio/home`}>
                <h1 className="text-2xl font-light">Davidoff of Geneva</h1>
              </Link>
              <p className="text-xs">{t("subtitle")}</p>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-6">
              <LocaleSelector />
              <button className="text-[#d4af37]" aria-label="Account">
                <User size={24} />
              </button>
              <button className="text-[#d4af37]" aria-label="Cart">
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Animated search input */}
        <div
          className={`absolute left-0 top-0 w-full h-full bg-[#1a1a1a] flex items-center justify-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent border-b-2 border-[#d4af37] text-white text-lg p-2 w-3/4 max-w-3xl focus:outline-none transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-3/4' : 'w-0'
              }`}
            style={{ caretColor: '#d4af37' }}
          />
        </div>
      </nav>
    </div>
  )
}