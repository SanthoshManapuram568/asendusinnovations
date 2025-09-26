// Style exports
export { headerStyles } from './headerStyles';
export { heroStyles } from './heroStyles';
export { servicesStyles } from './servicesStyles';
export { contactStyles } from './contactStyles';
export { footerStyles } from './footerStyles';
export { globalStyles } from './globalStyles';

// You can also export all styles in a single object if preferred
export const allStyles = {
  header: require('./headerStyles').headerStyles,
  hero: require('./heroStyles').heroStyles,
  services: require('./servicesStyles').servicesStyles,
  contact: require('./contactStyles').contactStyles,
  footer: require('./footerStyles').footerStyles,
  global: require('./globalStyles').globalStyles,
};