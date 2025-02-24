import React from "react";
import { Helmet } from "react-helmet";

const AcunetixMetaTags = () => {
  const eventUrl = "https://acunetix12.tech/";
  const highResImage = "https://acunetix12.tech/assets/acunetix-logo.png";
  const linkedinProfile = "https://www.linkedin.com/company/acunetix-dit/";
  const instagramHandle = "@acunetix.dit";
  const absoluteLogoUrl = "https://acunetix12.tech/assets/acunetix-logo.png";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Acunetix 12.0</title>
<meta name="description" content="Join 2000+ participants at Acunetix 12.0 - India's largest student-led cybersecurity & tech festival. Features: ₹5L+ prizes, National Acunetix CTF Challenge, AI/ML competitions & industry workshops. March 27-29, 2025 at DY Patil Institute Pune." />
<meta name="keywords" content="Acunetix 12.0, Acunetix Cybersecurity Challenge, Acunetix Tech Festival, Pune Tech Events, Student Hackathon Pune, DY Patil Tech Competition, Cybersecurity Workshop, AI/ML Competition 2025" />
<meta name="category" content="Acunetix Cybersecurity Education Events" />

      {/* Ownership & Verification */}
      <meta name="author" content="ACES - Dr. D.Y. Patil Institute of Technology" />
      <meta name="copyright" content="DY Patil Tech ACES CSI" />
      <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />

      {/* Crawler Directives */}
      <meta name="robots" content="index, follow, max-image-preview:standard" />

      {/* Open Graph & Social Meta */}
      <meta property="og:type" content="event" />
      <meta property="og:event:start_time" content="2025-03-15T09:00:00+05:30" />
      <meta property="og:event:end_time" content="2025-03-16T18:00:00+05:30" />
      <meta property="og:title" content="Acunetix 12.0: Pune's Premier Student Tech Challenge | DY Patil Institute" />
      <meta property="og:description" content="Compete in national-level tech competitions with industry recognition. Featuring: → Cybersecurity Capture-the-Flag → AI/ML Innovation Challenge → Web Development Sprint → ₹5L+ Prize Pool" />
      <meta property="og:image" content={highResImage} />
      <meta property="og:url" content={eventUrl} />
      <meta property="og:site_name" content="Acunetix Tech Fest" />
      <meta property="og:locale" content="en_IN" />

      {/* LinkedIn Integration */}
      <meta property="og:profile:linkedin" content={linkedinProfile} />
      <meta property="og:see_also" content={linkedinProfile} />

      {/* Image Optimization */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Acunetix 12.0 Tech Fest Banner featuring cybersecurity and AI themes" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            "name": "Acunetix 12.0 Tech Fest",
            "startDate": "2025-03-15T09:00+05:30",
            "endDate": "2025-03-16T18:00+05:30",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Dr. D.Y. Patil Institute of Technology",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.6397",
                "longitude": "73.7959"
              }
            },
            "image": [highResImage],
            "description": "Annual technical festival featuring 50+ events with 2000+ participants from across India. Key highlights include national-level cybersecurity competitions, AI innovation challenges, and tech leadership workshops.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/LimitedAvailability",
              "validThrough": "2025-03-10"
            },
            "organizer": {
              "@type": "StudentOrganization",
              "name": "ACES - DY Patil Tech",
              "url": "https://aces.dypvp.edu.in/",
              "sameAs": [linkedinProfile, `https://www.instagram.com/${instagramHandle}`],
              "description": "Student organization promoting technical excellence since 2013"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "ACES - DY Patil Tech",
            "logo": absoluteLogoUrl,
            "image": absoluteLogoUrl,
            "url": "https://aces.dypvp.edu.in/",
            "sameAs": [
              linkedinProfile,
              `https://www.instagram.com/${instagramHandle}`,
              "https://twitter.com/aces_dypatil"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "aces@dypvp.edu.in",
              "contactType": "Event inquiries"
            },
            "foundingDate": "2013",
            "founders": [
              {
                "@type": "Organization",
                "name": "Dr. D.Y. Patil Institute of Technology"
              }
            ]
          }
        ])}
      </script>

      {/* Search Engine Directives */}
      <link rel="canonical" href={eventUrl} />
      <meta name="thumbnail" content={highResImage} />
      <meta property="og:updated_time" content="2024-03-27T00:00:00+05:30" />

      {/* Knowledge Graph Requirements */}
      <meta itemProp="name" content="ACES - Dr. D.Y. Patil Institute of Technology" />
      <meta itemProp="image" content={absoluteLogoUrl} />
      <link itemProp="url" href={eventUrl} />
    </Helmet>
  );
};

export default AcunetixMetaTags;