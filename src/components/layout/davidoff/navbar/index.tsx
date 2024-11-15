import { getMenu } from '@lib/bigcommerce';
import { VercelMenu } from '@lib/bigcommerce/types';
import { MapPin, Menu, Search, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

export default async function Component() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div className="font-sans">
      {/* Top banner */}
      <div className="bg-black py-2 text-center text-sm text-white">
        Get free shipping when you spend $500 or more!
      </div>

      {/* Main navigation */}
      <nav className="bg-[#1a1a1a] py-4 text-[#d4af37]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-6">
              <button className="text-[#d4af37]" aria-label="Menu">
                <Menu size={24} />
              </button>
              <button className="text-[#d4af37]" aria-label="Search">
                <Search size={24} />
              </button>
              {menu.length ? (
                <div className="hidden space-x-6 md:flex">
                  {menu.map((item: VercelMenu) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      className="transition-color uppercase hover:text-white"
                    >
                      <span className="uppercase">{item.title}</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Center logo */}
            <div className="absolute left-1/2 -translate-x-1/2 transform text-center">
              <h1 className="text-2xl font-light">
                <Link href="/bio/home">Davidoff of Geneva</Link>
              </h1>
              <p className="text-xs">since 1911</p>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-6">
              <button className="hidden text-[#d4af37] md:block" aria-label="Store locator">
                <MapPin size={24} />
              </button>
              <button className="text-[#d4af37]" aria-label="Account">
                <User size={24} />
              </button>
              <button className="text-[#d4af37]" aria-label="Cart">
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
