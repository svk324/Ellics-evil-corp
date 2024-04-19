"use client"
import { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href} passHref>
            
                {link.label}
              
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Contact Us"
          //icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button className="inline-block cursor-pointer" onClick={toggleMenu}>
          <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 menu-drawer">
          <div className="absolute top-0 right-0 p-4">
            <button className="inline-block cursor-pointer" onClick={toggleMenu}>
              <Image 
                src="close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="flex flex-col items-start p-8">
            {NAV_LINKS.map((link) => (
              <Link className="text-white text-lg mb-4" onClick={toggleMenu} key={link.key} href={link.href} passHref>
        
                  {link.label}
                
              </Link>
            ))}
            <Button 
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
