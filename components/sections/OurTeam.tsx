import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPlus, FaYoutube } from 'react-icons/fa';
import { OurTeamProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF aria-hidden="true" />;
    case 'FaInstagram': return <FaInstagram aria-hidden="true" />;
    case 'FaLinkedinIn': return <FaLinkedinIn aria-hidden="true" />;
    case 'FaYoutube': return <FaYoutube aria-hidden="true" />;
    default: return null;
  }
};

const renderCardActionIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlus': return <FaPlus aria-hidden="true" />;
    default: return null;
  }
};

export const OurTeam = ({ data }: OurTeamProps) => {
  if (!data) return null;

  return (
    <>
      <section className="bg-[var(--color-bg-main)] py-8 lg:py-12">
        <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden shadow-[0_14px_40px_rgba(41,40,50,0.08)] lg:grid-cols-2">
            <div className="relative flex min-h-[470px] flex-col items-center justify-center bg-[var(--color-bg-alt)] px-6 py-10 text-center sm:px-10 lg:min-h-[560px] lg:px-14">
              <span className="pointer-events-none absolute left-5 top-16 font-heading text-7xl leading-none text-[var(--color-primary-light)]/20 sm:left-10 sm:text-8xl" aria-hidden="true">{data.founder.quoteMark}</span>
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0_0_0_1px_rgba(184,138,82,0.65)] sm:h-36 sm:w-36">
                <Image src={data.founder.portrait} alt={data.founder.portraitAlt} fill sizes="144px" className="object-cover object-center" />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">{data.founder.eyebrow}</p>
                <span className="h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
              </div>
              <p className="mt-5 max-w-md font-heading text-base leading-7 text-[var(--color-heading)] sm:text-lg sm:leading-8">{data.founder.description}</p>
              <p className="mt-6 font-heading text-3xl font-medium italic text-[var(--color-heading)] sm:text-4xl">{data.founder.name}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-primary-light)]/60" aria-hidden="true" />
                <p className="text-xs text-[var(--color-text-light)]">{data.founder.role}</p>
                <span className="h-px w-8 bg-[var(--color-primary-light)]/60" aria-hidden="true" />
              </div>

              <div className="mt-7 w-full max-w-xs bg-[#efe5d7] px-6 py-6 text-left lg:hidden">
                <p className="text-xs font-semibold uppercase leading-6 tracking-[0.24em] text-[var(--color-primary-light)]">{data.founder.featureEyebrow}</p>
                <span className="mt-5 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
                <p className="mt-5 font-heading text-2xl font-medium uppercase leading-8 text-[var(--color-primary-light)]">{data.founder.featureTitle}</p>
              </div>
            </div>

            <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
              <Image src={data.founder.backgroundImage} alt={data.founder.backgroundImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
            </div>
          </div>

          <div className="absolute left-[54%] top-1/2 z-10 hidden w-44 -translate-x-1/2 -translate-y-1/2 bg-[#efe5d7] px-6 py-10 shadow-[0_12px_30px_rgba(41,40,50,0.1)] lg:block">
            <p className="text-xs font-semibold uppercase leading-6 tracking-[0.24em] text-[var(--color-primary-light)]">{data.founder.featureEyebrow}</p>
            <span className="mt-6 block h-px w-10 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <p className="mt-6 font-heading text-2xl font-medium uppercase leading-8 text-[var(--color-primary-light)]">{data.founder.featureTitle}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-bg-alt)] py-8 lg:py-12">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-light)]">{data.subtitle}</p>
            <span className="mx-auto mt-4 block h-px w-16 bg-[var(--color-primary-light)]" aria-hidden="true" />
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              <span>{data.titleLine1} </span>
              <span className="text-[var(--color-primary-light)]">{data.highlightedTitle}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base sm:leading-7">{data.description}</p>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {data.members.map((member) => (
              <article key={member.id} className="bg-white shadow-[0_8px_24px_rgba(41,40,50,0.08)]">
                <div className="relative">
                  <div className="relative aspect-[0.95/1] overflow-hidden">
                    <Image src={member.image} alt={member.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition-transform duration-700 hover:scale-105" />
                  </div>
                  <span className="absolute bottom-0 right-4 z-10 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--color-primary-light)] text-sm text-white shadow-md" aria-hidden="true">{renderCardActionIcon(data.cardActionIcon)}</span>
                </div>
                <div className="px-5 pb-5 pt-6">
                  <h3 className="font-heading text-xl font-semibold text-[var(--color-heading)]">{member.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-light)]">{member.role}</p>
                  <span className="mt-4 block h-px w-8 bg-[var(--color-primary-light)]" aria-hidden="true" />
                  <div className="mt-4 flex items-center gap-5">
                    {data.socialLinks.map((social) => (
                      <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={`${member.name} ${social.label}`} className="text-sm text-[var(--color-text-light)] transition-colors hover:text-[var(--color-primary-light)]">
                        {renderSocialIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
