import business from '../data/business.json';
import site from '../data/site.json';
import menu from '../data/menu.json';

export { business, site, menu };

export const telHref = 'tel:+13192211040';
export const telDisplay = business.phone;
export const orderUrl =
  'https://www.ubereats.com/store/captains-fish-and-chicken-1616-1st-ave-ne-cedar-rapids-ia/AJApcCD3RUefziQ_OTCMSA';
export const directionsUrl = business.directionsUrl;
export const mapsUrl = business.mapsUrl;

export const primaryNav = [
  { label: 'Menu', href: '/menu/' },
  { label: 'Deals', href: '/deals/' },
  { label: 'Catering', href: '/catering/' },
  { label: 'Areas We Serve', href: '/areas/' },
  { label: 'Visit', href: '/visit/' },
];

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function money(n: number): string {
  return '$' + n.toFixed(2);
}

/** Lowest price across an item's variants — for "from $X" labels. */
export function fromPrice(item: { prices: { price: number }[] }): number {
  return Math.min(...item.prices.map((p) => p.price));
}

/** Per-menu-section mood imagery (Higgsfield-generated, declared in scripts/image-prompts.json). */
export const sectionImages: Record<string, string> = {
  seafood: '/images/sections/seafood.jpg',
  wings: '/images/sections/wings.jpg',
  chicken: '/images/sections/chicken.jpg',
  shrimp: '/images/sections/shrimp.jpg',
  sides: '/images/sections/sides.jpg',
  desserts: '/images/sections/desserts.jpg',
};
