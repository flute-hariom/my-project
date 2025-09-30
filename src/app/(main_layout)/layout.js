"use client";

import { useEffect, useState } from "react";
import MainHeader from "@/components/MainHeader";
import Head from "next/head";

import Footer from "@/components/Footer";

export default function Layout({ children, ...rest }) {
  return (
    <>
      {/* Head section to include font CDNs */}
      <Head>
        {/* CDN for Sohne Font */}
        <link href="https://use.typekit.net/jnq5gls.css" rel="stylesheet" />

        {/* Google Fonts for Source Serif Pro */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Conditionally render header and footer */}
      {<MainHeader />}
      <main>{children}</main>
      {/* {!shouldHideLayout && <Footer />} */}
      {<Footer />}
    </>
  );
}
