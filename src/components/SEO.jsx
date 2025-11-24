import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Lee Hour's Portfolio";
  const defaultDescription =
    "Lee Hour's Full Stack Developer Portfolio - Showcasing projects, skills, and experience in a macOS-style interface.";
  const defaultKeywords =
    "Lee Hour, Portfolio, Full Stack Developer, React, macOS, Web Developer";
  const defaultImage = "/macbook.png"; // Ensure this exists or use a screenshot
  const siteUrl = "https://leehour.dev"; // Replace with actual URL

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url || siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
