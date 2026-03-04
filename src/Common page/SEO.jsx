import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const canonicalURL = "https://my-portfolio-azure-omega-11.vercel.app";
  const ogImage = "https://my-portfolio-azure-omega-11.vercel.app/og-image.jpg";

  // Structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen Saini",
    url: canonicalURL,
    image: ogImage,
    jobTitle: "Full Stack Developer",
    description: description,
    sameAs: [
      "https://www.linkedin.com/in/naveen-saini-78201a293/",
      "https://github.com/naveenjpr",
    ],
    location: {
      "@type": "Place",
      name: "Jaipur, Rajasthan, India",
    },
    knowsAbout: [
      "React.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Full Stack Development",
    ],
    email: "naveensainijpr@gmail.com",
    telephone: "+918619916687",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalURL} />

      {/* Robots Meta */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Naveen Saini Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Author and Copyright */}
      <meta name="author" content="Naveen Saini" />
      <meta
        name="copyright"
        content="© 2026 Naveen Saini. All rights reserved."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="React Developer, Full Stack Developer, MERN Stack, Node.js, MongoDB, AWS, Web Development, Portfolio"
      />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
