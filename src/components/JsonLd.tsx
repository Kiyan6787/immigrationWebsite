
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  type: 'LegalService' | 'LocalBusiness' | 'Article' | 'FAQ' | 'Organization';
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
          name: data.name || 'Ramjanum C Attorneys - Immigration Lawyers',
          description: data.description || 'Expert Immigration Law Services in South Africa. Specializing in visa applications, permanent residence, work permits, and citizenship applications.',
          url: data.url || 'https://ramjanumattorneys.com',
          telephone: data.telephone || '+27769242726',
          email: data.email || 'cramjanum@gmail.com',
          image: 'https://ramjanumattorneys.com/logo.png',
          logo: 'https://ramjanumattorneys.com/logo.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data.streetAddress || 'Greenstone Shopping Centre',
            addressLocality: data.addressLocality || 'Johannesburg',
            addressRegion: data.addressRegion || 'Gauteng',
            postalCode: data.postalCode || '1609',
            addressCountry: {
              '@type': 'Country',
              name: 'South Africa'
            }
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -26.1052,
            longitude: 28.0557
          },
          priceRange: data.priceRange || '$$-$$$',
          serviceArea: [
            {
              '@type': 'City',
              name: 'Johannesburg'
            },
            {
              '@type': 'State',
              name: 'Gauteng'
            },
            {
              '@type': 'Country',
              name: 'South Africa'
            }
          ],
          serviceType: data.serviceType || 'Immigration Law',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Immigration Legal Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Visa Applications',
                  description: 'Professional visa application services for South Africa'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Permanent Residence Applications',
                  description: 'Expert assistance with permanent residence applications'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Work Permits',
                  description: 'Work permit applications and renewals'
                }
              }
            ]
          },
          openingHours: data.openingHours || 'Mo-Fr 09:00-17:00',
          foundingDate: '2008',
          founder: {
            '@type': 'Person',
            name: 'Chantal Ramjanum',
            jobTitle: 'Immigration Attorney'
          },
          sameAs: [
            'https://linkedin.com/company/ramjanum-attorneys',
            'https://facebook.com/ramjanumattorneys'
          ]
        };
        break;
      
      case 'LocalBusiness':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://ramjanumattorneys.com/#organization',
          name: data.name || 'Ramjanum C Attorneys',
          description: data.description || 'Leading Immigration Law Firm in South Africa',
          url: 'https://ramjanumattorneys.com',
          telephone: '+27769242726',
          email: 'cramjanum@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Greenstone Shopping Centre',
            addressLocality: 'Johannesburg',
            addressRegion: 'Gauteng',
            postalCode: '1609',
            addressCountry: 'ZA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -26.1052,
            longitude: 28.0557
          },
          openingHours: 'Mo-Fr 09:00-17:00',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer',
          currenciesAccepted: 'ZAR'
        };
        break;
        
      case 'Organization':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://ramjanumattorneys.com/#organization',
          name: 'Ramjanum C Attorneys',
          alternateName: 'Ramjanum Attorneys',
          url: 'https://ramjanumattorneys.com',
          logo: 'https://ramjanumattorneys.com/logo.png',
          image: 'https://ramjanumattorneys.com/logo.png',
          description: 'Professional Immigration Law Services in South Africa since 2008',
          telephone: '+27769242726',
          email: 'cramjanum@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Greenstone Shopping Centre',
            addressLocality: 'Johannesburg',
            addressRegion: 'Gauteng',
            postalCode: '1609',
            addressCountry: 'ZA'
          },
          foundingDate: '2008',
          founder: {
            '@type': 'Person',
            name: 'Chantal Ramjanum'
          },
          areaServed: {
            '@type': 'Country',
            name: 'South Africa'
          },
          knowsAbout: [
            'Immigration Law',
            'Visa Applications',
            'Work Permits',
            'Permanent Residence',
            'South African Immigration'
          ]
        };
        break;
        
      case 'Article':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || 'Immigration Law Services in South Africa',
          image: 'https://ramjanumattorneys.com/logo.png',
          author: {
            '@type': 'Person',
            name: data.authorName || 'Chantal Ramjanum',
            url: 'https://ramjanumattorneys.com/about'
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://ramjanumattorneys.com/#organization',
            name: 'Ramjanum C Attorneys',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ramjanumattorneys.com/logo.png'
            }
          },
          datePublished: data.datePublished || '2023-08-01',
          dateModified: data.dateModified || new Date().toISOString().split('T')[0],
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url || 'https://ramjanumattorneys.com'
          }
        };
        break;
        
      case 'FAQ':
        scriptData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          })) || []
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
