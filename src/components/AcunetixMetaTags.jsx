import React from "react";
import { Helmet } from "react-helmet";

const AcunetixMetaTags = () => {
  const eventUrl = "https://acunetix12.tech/";
  const highResImage = "https://github.com/Tejas-Santosh-Nalawade/Acunetix-12.0/blob/main/src/assets/logo.png";
  const linkedinProfile = "https://www.linkedin.com/company/acunetix-dit/";
  const instagramHandle = "@acunetix.dit";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Acunetix 12.0</title>
      <meta name="description" content="Join 2000+ tech enthusiasts at India's premier student tech conference! Featuring ₹5L+ prizes, national competitions, and industry expert sessions. March 15-16, 2025." />
      
      {/* Keywords & Categories */}
      <meta name="keywords" content="Tech Competition, Student Hackathon, Cybersecurity Challenge, AI Workshop, Pune Tech Events, Engineering Conference, Coding Tournament" />
      <meta name="category" content="Technology Education" />

      {/* Ownership & Verification */}
      <meta name="author" content="ACES - Dr. D.Y. Patil Institute of Technology" />
      <meta name="copyright" content="DY Patil Tech ACES CSI" />

      {/* Crawler Directives */}
      <meta name="robots" content="index, follow, max-image-preview:standard" />

      {/* Open Graph for LinkedIn & Instagram */}
      <meta property="og:type" content="event" />
      <meta property="og:event:start_time" content="2025-03-15T09:00:00+05:30" />
      <meta property="og:event:end_time" content="2025-03-16T18:00:00+05:30" />
      <meta property="og:title" content="Acunetix 12.0: Pune's Premier Student Tech Challenge | DY Patil Institute" />
      <meta property="og:description" content="Compete in national-level tech competitions with industry recognition. Featuring: → Cybersecurity Capture-the-Flag → AI/ML Innovation Challenge → Web Development Sprint → ₹5L+ Prize Pool" />
      <meta property="og:image" content={highResImage} />
      <meta property="og:url" content={eventUrl} />
      <meta property="og:site_name" content="Acunetix Tech Fest" />
      <meta property="og:locale" content="en_IN" />

      {/* LinkedIn-Specific Enhancements */}
      <meta property="og:profile:linkedin" content={linkedinProfile} />
      <meta property="og:see_also" content={linkedinProfile} />

      {/* Image Optimization */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Acunetix 12.0 Tech Fest Banner featuring cybersecurity and AI themes" />

      {/* Event Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
          },
          "performer": {
            "@type": "Organization",
            "name": "Industry Tech Leaders"
          },
          "sponsor": {
            "@type": "Organization",
            "name": "Leading Technology Companies"
          },
          "typicalAgeRange": "18-25",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "engineering student"
          }
        })}
      </script>

      {/* Content Recommendations */}
      <link rel="canonical" href={eventUrl} />
      <meta name="thumbnail" content={highResImage} />
      <meta property="og:updated_time" content="2024-03-27T00:00:00+05:30" />
    </Helmet>
  );
};

export default AcunetixMetaTags;