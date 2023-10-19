import Image from "next/image";
import Link from "next/link";
import { type } from "os";

type HeroData = {
  heading: string;
  tagline: string;
  cta: string;
  ctaLink: string;
  secondaryCta: string;
  secondaryCtaLink: string;
  heroImage: string;
  heroImageAlt: string;
  specialLinkUrl: string;
  specialLinkLabel: string;
};

export default function HeroAlt({
  heading,
  tagline,
  cta,
  ctaLink,
  secondaryCta,
  secondaryCtaLink,
  heroImage,
  heroImageAlt,
  specialLinkUrl,
  specialLinkLabel,
}: HeroData) {
  // Convert protocol-relative URL to absolute URL
  const absoluteHeroImageUrl = heroImage.startsWith("//")
    ? `https:${heroImage}`
    : heroImage;
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl py-9 lg:mx-0">
            <Image
              className="h-11"
              width={200}
              height={200}
              alt="Resi Lift"
              src="/resiLogoMark.svg"
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {specialLinkLabel}
                <Link
                  href={specialLinkUrl}
                  className="whitespace-nowrap font-semibold text-blue-600 ml-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div> */}
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{tagline}</p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={ctaLink}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                {cta}
              </Link>
              <Link
                href={secondaryCtaLink}
                className="text-sm font-semibold leading-6 text-gray-900">
                {secondaryCta} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            src={absoluteHeroImageUrl}
            alt={heroImageAlt}
            width={2432}
            height={1442}
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
