'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data, overlay = false }: HeaderProps) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  if (!data) return null;

  const navLinks = [...data.navLinksLeft, ...data.navLinksRight];
  const isHomePage = pathname === '/';
  const useTransparentHeader = isHomePage || overlay;
  const isActiveLink = (url: string) => {
    if (url === '/') return pathname === '/';
    if (url.startsWith('/#')) return false;
    return pathname.startsWith(url);
  };

  return (
    <>
      <header className={`${useTransparentHeader ? 'absolute' : 'relative bg-[var(--color-primary-dark)]'} inset-x-0 top-0 z-[80] w-full`}>
        <div className="relative mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-4 sm:h-28 sm:px-8 lg:h-32 lg:px-12">
          <a
            href={data.phoneUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={data.phoneLabel}
            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#007c5b] text-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#006b4e] sm:h-12 sm:w-auto sm:gap-2 sm:px-2 sm:pr-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09b85a] text-xl sm:h-9 sm:w-9 sm:text-2xl">
              <FaWhatsapp aria-hidden="true" />
            </span>
            <span className="hidden whitespace-nowrap font-navigation text-sm font-semibold sm:inline lg:text-base">{data.phoneValue}</span>
          </a>

          <Link
            href={data.logoUrl}
            aria-label={data.logoAlt}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={640}
              height={300}
              preload
              className="h-auto w-36 object-contain drop-shadow-[0_3px_4px_rgba(0,0,0,0.2)] sm:w-48 lg:w-56"
            />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={menuOpen}
            aria-controls="hotel-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[80] flex h-11 w-11 shrink-0 items-center justify-center text-3xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)] transition-colors hover:text-[var(--color-accent-light)] sm:h-12 sm:w-12 sm:text-4xl"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        id="hotel-navigation"
        className={`${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed inset-0 z-[70] overflow-x-hidden overflow-y-auto overscroll-y-contain bg-[var(--color-menu-overlay)] px-4 pb-6 pt-24 touch-pan-y backdrop-blur-xl transition-all duration-300 sm:px-8 sm:pb-8 sm:pt-28 lg:px-12 lg:pt-32`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label={data.menuLabel} className="mx-auto w-full max-w-5xl py-2 sm:py-4">
          <ul className="grid w-full grid-cols-1 gap-2 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5 sm:gap-x-4 sm:gap-y-3 lg:gap-x-6">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isActiveLink(link.url) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`${isActiveLink(link.url) ? 'bg-[var(--color-secondary)] text-white' : 'bg-[var(--color-menu-item)] text-white hover:bg-[var(--color-menu-item-hover)]'} group flex items-center gap-3 rounded-sm px-3 py-2.5 font-heading text-base font-semibold drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)] transition-colors sm:px-4 sm:py-3 sm:text-xl lg:px-5 lg:py-4 lg:text-2xl`}
                >
                  <span className={`${isActiveLink(link.url) ? 'text-white' : 'text-[var(--color-accent-light)]'} w-6 font-navigation text-[10px] font-bold tracking-widest sm:w-7 sm:text-xs`}>{String(index + 1).padStart(2, '0')}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
