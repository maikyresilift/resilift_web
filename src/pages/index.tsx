import { Inter } from "next/font/google";

import Features from "@/components/organisms/features/features";
import Contact from "../components/organisms/forms/contact";
import HeroAlt from "@/components/organisms/hero/heroAlt";
import client from "@/utils/contentful";
import Head from "@/components/organisms/head/head";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  entries: any;
  heroData: any;
  contactFormData: any;
};

function Home({ heroData, contactFormData }: Props) {
  return (
    <main>
      <Head pageName="Home" />
      <HeroAlt
        heading={heroData.heading}
        tagline={heroData.tagline}
        cta={heroData.cta}
        ctaLink={heroData.ctaLink}
        secondaryCta={heroData.secondaryCta}
        secondaryCtaLink={heroData.secondaryCtaLink}
        heroImage={heroData.heroImage.fields.file.url}
        heroImageAlt={heroData.heroImageAlt}
        specialLinkUrl={heroData.specialLinkUrl}
        specialLinkLabel={heroData.specialLinkLabel}
      />
      {/* <Features /> */}
      <Contact
        heading={contactFormData.heading}
        tagline={contactFormData.tagline}
        street={contactFormData.street}
        city={contactFormData.city}
        state={contactFormData.state}
        zipcode={contactFormData.zipcode}
        phoneData={contactFormData.phone}
        emailData={contactFormData.email}
      />
    </main>
  );
}

// Fetch data from Contentful during the build process
export async function getStaticProps() {
  let heroData = null;
  let contactFormData = null;

  try {
    // Fetch Hero Data
    const heroResponse = await client.getEntries({
      content_type: "heroData",
    });
    heroData = heroResponse.items[0].fields;

    // Fetch Contact Form Data
    const contactResponse = await client.getEntries({
      content_type: "contactFormData",
    });
    contactFormData = contactResponse.items[0].fields;
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
  }

  return {
    props: {
      heroData,
      contactFormData,
    },
    revalidate: 60, // Regenerate the page every x seconds. Adjust this value as needed.
  };
}

export default Home;
