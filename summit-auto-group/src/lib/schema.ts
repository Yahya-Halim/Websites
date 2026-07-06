// JSON-LD builders for Summit Auto Group — applies the local-schema-stack rules:
// absolute URLs everywhere, consistent @id references, no fabricated/empty values.
// DOMAIN mirrors business.json#domain (single source for canonical/@id math).

export const DOMAIN = 'https://summitautogroup.example';
export const BUSINESS_ID = `${DOMAIN}/#business`;
export const WEBSITE_ID = `${DOMAIN}/#website`;

/** Absolute URL for a site-relative path, per schema-stack rule #1. */
export const abs = (path: string): string => new URL(path, `${DOMAIN}/`).href;

export interface Crumb {
  name: string;
  path?: string;
}

export function breadcrumbList(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      // Last crumb (current page) has NO item URL, per schema-stack rule.
      ...(it.path && i < items.length - 1 ? { item: abs(it.path) } : {}),
    })),
  };
}

const DEFAULT_SPEAKABLE = ['.page-header h1', '.page-header p', '.faq-item summary', '.faq-item p'];

export function webPage(opts: {
  name: string;
  path: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  speakable?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    name: opts.name,
    url: abs(opts.path),
    description: opts.description,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: opts.speakable ?? DEFAULT_SPEAKABLE,
    },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function service(opts: {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: { name: string; region: string }[];
}) {
  const areas = opts.areaServed ?? [];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    provider: { '@type': 'AutoDealer', '@id': BUSINESS_ID, name: 'Summit Auto Group' },
    ...(areas.length
      ? { areaServed: areas.map((a) => ({ '@type': 'City', name: a.name, addressRegion: a.region })) }
      : {}),
  };
}

export function itemList(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  };
}

/** schema.org Car/Vehicle offer for an inventory detail page. */
export function vehicle(car: {
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: number;
  vin: string;
  condition: string;
  path: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: `${car.year} ${car.make} ${car.model}`,
    brand: { '@type': 'Brand', name: car.make },
    model: car.model,
    vehicleModelDate: String(car.year),
    mileageFromOdometer: { '@type': 'QuantitativeValue', value: car.mileage, unitCode: 'SMI' },
    vehicleIdentificationNumber: car.vin,
    itemCondition: 'https://schema.org/UsedCondition',
    description: car.description,
    url: abs(car.path),
    offers: {
      '@type': 'Offer',
      price: car.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': BUSINESS_ID },
    },
  };
}
