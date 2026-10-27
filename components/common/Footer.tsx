import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

const renderContactIcon = (id: string) => {
  switch (id) {
    case 'contact-email': return <FiMail aria-hidden="true" />;
    case 'contact-phone': return <FiPhone aria-hidden="true" />;
    case 'contact-address': return <FiMapPin aria-hidden="true" />;
    default: return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_0.8fr] lg:gap-10 lg:px-8 lg:py-12">
          <div>
            <Link href={data.logoUrl} aria-label={data.logoAlt} className="inline-block">
              <Image src={data.logo} alt={data.logoAlt} width={440} height={150} className="h-auto w-[220px] sm:w-[240px]" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">{data.description}</p>
            <p className="mt-5 border-b border-[var(--color-primary-light)] pb-3 text-xs font-medium uppercase tracking-[0.28em] text-white">{data.contactPrompt}</p>
          </div>

          <div className="lg:pt-7">
            <h2 className="font-heading text-2xl font-medium leading-tight text-[var(--color-primary-light)] sm:text-3xl">{data.contactTitle}</h2>
            <ul className="mt-5 space-y-4">
              {data.contactItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <span className="flex w-5 shrink-0 items-center justify-center text-lg text-[var(--color-primary-light)]">{renderContactIcon(item.id)}</span>
                  {item.url ? <Link href={item.url} className="block break-words text-sm leading-6 text-white/85 transition-colors hover:text-[var(--color-primary-light)]">{item.value}</Link> : <p className="text-sm leading-6 text-white/85">{item.value}</p>}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary-light)] text-sm text-white transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]">
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pt-7">
            <h2 className="font-heading text-2xl font-medium leading-tight text-[var(--color-primary-light)] sm:text-3xl">{data.roomsTitle}</h2>
            <ul className="mt-5 space-y-2.5">
              {data.roomLinks.map((link) => (
                <li key={link.id}><Link href={link.url} className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-[var(--color-primary-light)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-light)]" aria-hidden="true" /><span>{link.label}</span></Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-7">
            <h2 className="font-heading text-2xl font-medium leading-tight text-[var(--color-primary-light)] sm:text-3xl">{data.quickLinksTitle}</h2>
            <ul className="mt-5 space-y-2.5">
              {data.quickLinks.map((link) => (
                <li key={link.id}><Link href={link.url} className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-[var(--color-primary-light)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-light)]" aria-hidden="true" /><span>{link.label}</span></Link></li>
              ))}
            </ul>
          </div>
      </div>

      <div className="border-t border-[var(--color-primary-light)]/70 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1180px] text-xs leading-5 text-white/80">
          <p>{data.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
