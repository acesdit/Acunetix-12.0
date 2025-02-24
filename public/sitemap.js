const sitemap = require('sitemap');
   const fs = require('fs');
   const path = require('path');

   // Create a sitemap object
   const sm = sitemap.createSitemap({
     hostname: 'https://acunetix12.tech/', // Change to your domain
     cacheTime: 600000,  // Default cache time (600 sec)
     urls: [
       { url: '/', changefreq: 'daily', priority: 1.0 },
       { url: '/about', changefreq: 'weekly', priority: 0.8 },
       { url: '/contact', changefreq: 'weekly', priority: 0.8 },
       // Add more pages here
     ],
   });

   // Save sitemap to a file
   fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sm.toString());
