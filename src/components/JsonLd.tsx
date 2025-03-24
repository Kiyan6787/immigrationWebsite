
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  type: 'LegalService' | 'LocalBusiness' | 'Article';
  data: any;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const generateScript = () => {
    let scriptData = {};
    
    switch (type) {
      case 'LegalService':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: data.name || 'Ramjanum C Attorneys',
          description: data.description || 'Professional Immigration Law Services in South Africa',
          url: data.url || 'https://ramjanumattorneys.com',
          telephone: data.telephone || '+27 76 924 2726',
          email: data.email || 'cramjanum@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.streetAddress || 'Greenstone',
            addressLocality: data.addressLocality || 'Johannesburg',
            addressRegion: data.addressRegion || 'Gauteng',
            addressCountry: data.addressCountry || 'South Africa'
          },
          image: data.image || '/logo.png',
          priceRange: data.priceRange || '$$',
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: -26.1052,
              longitude: 28.0557
            },
            geoRadius: '50000'
          },
          serviceType: data.serviceType || 'Immigration Law'
        };
        break;
      
      case 'LocalBusiness':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: data.name || 'Ramjanum C Attorneys',
          description: data.description || 'Professional Immigration Law Services in South Africa',
          url: data.url || 'https://ramjanumattorneys.com',
          telephone: data.telephone || '+27 76 924 2726',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.streetAddress || 'Greenstone',
            addressLocality: data.addressLocality || 'Johannesburg',
            addressRegion: data.addressRegion || 'Gauteng',
            addressCountry: data.addressCountry || 'South Africa'
          },
          openingHours: data.openingHours || 'Mo-Fr 09:00-17:00'
        };
        break;
        
      case 'Article':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || 'Immigration Law Services in South Africa',
          image: data.image || '/logo.png',
          author: {
            '@type': 'Person',
            name: data.authorName || 'Chantal Ramjanum'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ramjanum C Attorneys',
            logo: {
              '@type': 'ImageObject',
              url: '/logo.png'
            }
          },
          datePublished: data.datePublished || '2023-08-01',
          dateModified: data.dateModified || '2023-08-01'
        };
        break;
        
      default:
        scriptData = {};
    }
    
    return JSON.stringify(scriptData);
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">{generateScript()}</script>
    </Helmet>
  );
};

export default JsonLd;
