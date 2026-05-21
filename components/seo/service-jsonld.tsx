export default function ServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise OMR Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Mark Reader',
      url: 'https://omr.in',
    },
    serviceType:
      'OMR Software, OMR Evaluation, Assessment Infrastructure',
    areaServed: 'India',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}