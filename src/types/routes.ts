export type PageRoute =
  | 'home'
  | 'services'
  | 'about'
  | 'portfolio'
  | 'specs'
  | 'contact';

export const ROUTE_HASH_MAP: Record<PageRoute, string> = {
  home: '#/',
  services: '#/services',
  about: '#/about',
  portfolio: '#/portfolio',
  specs: '#/specs',
  contact: '#/contact',
};

export function parseHashToRoute(hash: string): PageRoute {
  const cleaned = hash.replace(/^#\/?/, '').trim().toLowerCase();
  switch (cleaned) {
    case 'services':
      return 'services';
    case 'about':
      return 'about';
    case 'portfolio':
      return 'portfolio';
    case 'specs':
      return 'specs';
    case 'contact':
      return 'contact';
    default:
      return 'home';
  }
}
