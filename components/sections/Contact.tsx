'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaClipboardList,
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSpa,
  FaUser,
} from 'react-icons/fa';
import { ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowRight': return <FaArrowRight aria-hidden="true" />;
    case 'FaClipboardList': return <FaClipboardList aria-hidden="true" />;
    case 'FaCommentDots': return <FaCommentDots aria-hidden="true" />;
    case 'FaEnvelope': return <FaEnvelope aria-hidden="true" />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt aria-hidden="true" />;
    case 'FaPhoneAlt': return <FaPhoneAlt aria-hidden="true" />;
    case 'FaSpa': return <FaSpa aria-hidden="true" />;
    case 'FaUser': return <FaUser aria-hidden="true" />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="overflow-hidden bg-[var(--color-bg-light)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">{data.eyebrow}</p>
          <span className="mx-auto mt-3 block h-px w-10 bg-[var(--color-accent)]" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            {data.title} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-[var(--color-accent)]" aria-hidden="true">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            <span className="text-xl">{renderIcon(data.decorativeIcon)}</span>
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.description}</p>
        </header>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="bg-[var(--color-bg-alt)] p-5 shadow-[0_12px_35px_rgba(5,16,36,0.06)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">{data.form.eyebrow}</p>
            <span className="mt-3 block h-px w-10 bg-[var(--color-accent)]" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">{data.form.title} {data.form.titleHighlight}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)]">{data.form.description}</p>

            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
              <label className="relative block">
                <span className="sr-only">{data.form.nameLabel}</span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-accent)]">{renderIcon(data.form.nameIcon)}</span>
                <input name="name" required placeholder={data.form.namePlaceholder} className="h-14 w-full border border-[#e4ded5] bg-white pl-12 pr-4 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
              <label className="relative block">
                <span className="sr-only">{data.form.emailLabel}</span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-accent)]">{renderIcon(data.form.emailIcon)}</span>
                <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="h-14 w-full border border-[#e4ded5] bg-white pl-12 pr-4 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
              <label className="relative block">
                <span className="sr-only">{data.form.subjectLabel}</span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-accent)]">{renderIcon(data.form.subjectIcon)}</span>
                <input name="subject" required placeholder={data.form.subjectPlaceholder} className="h-14 w-full border border-[#e4ded5] bg-white pl-12 pr-4 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
              <label className="relative block">
                <span className="sr-only">{data.form.phoneLabel}</span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-accent)]">{renderIcon(data.form.phoneIcon)}</span>
                <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="h-14 w-full border border-[#e4ded5] bg-white pl-12 pr-4 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
              <label className="relative block sm:col-span-2">
                <span className="sr-only">{data.form.messageLabel}</span>
                <span className="absolute left-4 top-5 text-[var(--color-accent)]">{renderIcon(data.form.messageIcon)}</span>
                <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-full resize-y border border-[#e4ded5] bg-white py-4 pl-12 pr-4 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
              <button type="submit" className="flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--color-accent)] px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#a9783d] sm:col-span-2 sm:w-fit">{data.form.buttonText}{renderIcon(data.form.buttonIcon)}</button>
              {submitted && <p role="status" className="text-sm font-medium text-[var(--color-primary)] sm:col-span-2">{data.form.successMessage}</p>}
            </form>
          </div>

          <div className="px-1 py-2 sm:px-3 lg:py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">{data.contactInfoEyebrow}</p>
            <span className="mt-3 block h-px w-10 bg-[var(--color-accent)]" aria-hidden="true" />
            <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">{data.contactInfoTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.contactInfoDescription}</p>

            <div className="mt-5 divide-y divide-[#e7dfd4]">
              {data.contactItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-5 sm:gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-alt)] text-2xl text-[var(--color-accent)]">{renderIcon(item.icon)}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">{item.title}</span>
                    {item.lines.map((line, index) => (
                      <span key={line.id} className={index === 0 ? 'mt-2 block text-base font-medium leading-6 text-[var(--color-primary)] sm:text-lg' : 'mt-1 block text-sm leading-5 text-[var(--color-text-light)]'}>
                        {index === 0 && item.url ? <Link href={item.url} className="transition-colors hover:text-[var(--color-accent)]">{line.text}</Link> : line.text}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">{data.locationEyebrow}</p>
          <span className="mx-auto mt-3 block h-px w-10 bg-[var(--color-accent)]" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">{data.locationTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">{data.locationDescription}</p>
        </div>
      </div>

      <div className="mt-6 w-full">
        <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 sm:h-80 lg:h-[420px]" />
      </div>
    </section>
  );
};
