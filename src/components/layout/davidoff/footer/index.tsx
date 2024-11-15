import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-[#3e2a1d] bg-[url('/media/assets_8d037472ddea4270ba7fee1b930ca367_b73d0dd327e2449d8e428ee15e42d391.jpeg')] bg-cover bg-center py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm tracking-widest">STAY IN THE KNOW</p>
          <h2 className="mb-6 text-2xl font-light tracking-wider">GET THE LATEST NEWS IN YOUR BOX</h2>
          <form className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row">
            <Input
              type="text"
              placeholder="Your name"
              className="bg-white text-black"
            />
            <Input
              type="email"
              placeholder="Your e-mail"
              className="bg-white text-black"
            />
            <Button className="bg-[#b5985a] hover:bg-[#9a8049]">SUBMIT</Button>
          </form>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link href="/" className="text-xl font-light tracking-widest text-[#b5985a]">
          Davidoff of Geneva
        </Link>
        <p className="text-xs text-muted-foreground">SINCE 1911</p>
      </div>

      {/* Main Navigation */}
      <nav className="border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 py-4 text-center text-sm md:grid-cols-4 lg:grid-cols-7">
            <Link href="#" className="hover:text-[#b5985a]">ABOUT DAVIDOFF</Link>
            <Link href="#" className="hover:text-[#b5985a]">HERITAGE & CRAFTSMANSHIP</Link>
            <Link href="#" className="hover:text-[#b5985a]">PRESS</Link>
            <Link href="#" className="hover:text-[#b5985a]">PAYMENT & DELIVERY</Link>
            <Link href="#" className="hover:text-[#b5985a]">CONTACT</Link>
            <Link href="#" className="hover:text-[#b5985a]">CUSTOMER SERVICE</Link>
            <Link href="#" className="hover:text-[#b5985a]">FAQS</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t py-4 text-center text-sm md:grid-cols-3 lg:grid-cols-6">
            <Link href="#" className="hover:text-[#b5985a]">SHOP</Link>
            <Link href="#" className="hover:text-[#b5985a]">STORE LOCATOR</Link>
            <Link href="#" className="hover:text-[#b5985a]">TRACK ORDER</Link>
            <Link href="#" className="hover:text-[#b5985a]">CIGAR KNOWLEDGE</Link>
            <Link href="#" className="hover:text-[#b5985a]">NEWS & EVENTS</Link>
            <Link href="#" className="hover:text-[#b5985a]">RETAILER PORTAL</Link>
          </div>
        </div>
      </nav>

      {/* Social Media */}
      <div className="container mx-auto flex justify-center gap-6 py-8">
        <Link href="#" className="text-muted-foreground hover:text-[#b5985a]">
          <Facebook className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-[#b5985a]">
          <Instagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-[#b5985a]">
          <Youtube className="h-6 w-6" />
          <span className="sr-only">YouTube</span>
        </Link>
      </div>

      {/* Warning Message */}
      <div className="bg-muted py-4 text-center text-sm">
        <p className="font-semibold">SURGEON GENERAL WARNING</p>
        <p className="text-muted-foreground">
          Cigar Smoking Can Cause Cancer Of The Mouth And Throat, Even If You Do Not Inhale
        </p>
      </div>

      {/* Security Badges */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="mb-4 text-xs uppercase text-muted-foreground">
          Highest level of encryption, security and trust
        </p>
        <div className="flex justify-center gap-8">
          <Image
            src="/placeholder.svg"
            alt="Veratad"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src="/placeholder.svg"
            alt="CSC"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          © 2024 DAVIDOFF OF GENEVA USA ONLINE, INC. - All rights reserved
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <Link href="#" className="hover:text-[#b5985a]">TERMS & CONDITIONS</Link>
          <Link href="#" className="hover:text-[#b5985a]">PRIVACY POLICY</Link>
          <Link href="#" className="hover:text-[#b5985a]">PRIVACY SETTINGS</Link>
          <Link href="#" className="hover:text-[#b5985a]">ACCESSIBILITY</Link>
          <Link href="#" className="hover:text-[#b5985a]">COOKIE POLICY</Link>
          <Link href="#" className="hover:text-[#b5985a]">ABOUT OETTINGER DAVIDOFF AG</Link>
        </div>
      </div>
    </footer>
  )
}