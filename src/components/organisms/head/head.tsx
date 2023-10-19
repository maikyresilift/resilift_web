import React from "react";
import Head from "next/head";

type Props = {
  pageName: string;
};

const head = (props: Props) => {
  return (
    <Head>
      <title>RESILIFT Solutions, Inc | {props.pageName}</title>
      <meta
        name="description"
        content="Ending the climate threat to American housing.."
      />
      <meta name="keywords" content="Residential Lifting"></meta>
      <meta property="og:title" content="RESILIFT Solutions, Inc" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />

      <meta property="og:url" content="https://resi-lift.vercel.app/about" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="RESILIFT Solutions, Inc" />
      <meta
        property="og:description"
        content="Ending the climate threat to American housing."
      />
      <meta property="og:image" content="/hero.webp"></meta>
    </Head>
  );
};

export default head;
