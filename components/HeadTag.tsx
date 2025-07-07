import Head from "next/head";

import { MetaType } from "../data/meta";

interface Props {
  meta: MetaType;
}

const HeadTag: React.FC<Props> = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>

      <link rel="icon" href="/icons/favicon.ico" />
      <link
        rel="manifest"
        href="/manifest.webmanifest"
        crossOrigin="anonymous"
      />
      <link rel="sitemap" type="application/xml" href="/sitemap/sitemap.xml" />

      <link rel="apple-touch-icon" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="apple-touch-icon" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />

      <link rel="icon" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="icon" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="icon" sizes="180x180" href="/icons/icon-180x180.png" />
      <link rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="icon" sizes="256x256" href="/icons/icon-256x256.png" />
      <link rel="icon" sizes="384x384" href="/icons/icon-384x384.png" />
      <link rel="icon" sizes="512x512" href="/icons/icon-512x512.png" />

      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="image" content={meta.image} data-react-helmet="true" />
      <meta name="theme-color" content={meta.themeColor} />
      <meta name="language" content="English" />

      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@t0sin0j0" />
      <meta name="twitter:creator" content="@t0sin0j0" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta
        name="twitter:image:alt"
        content="Oluwatosin Ojo is a software engineer specializing in building web solutions."
      />

      <meta
        name="google-site-verification"
        content="Zdx2VyROIK6bsvhc6G_ZIFi8iUREnbOHIpZPNaUdI5U"
      />
      <meta name="yandex-verification" content="18b6ee97b8294f78" />
      <meta httpEquiv="content-language" content="en" />
    </Head>
  );
};

export default HeadTag;
