// Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

// Best approach: create a config file in your project where you export an
// object containing all configuration values for your project. There, you
// can set default values for variables coming from the environment. In this way,
// you guarantee a value will be present for the execution of your program:

export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  openAIKey: process.env.OPENAI_API_KEY ?? '',
  statusPage: process.env.STATUS_PAGE_ID ?? '',
};

export const URL = 'https://example.com';

export const menuItems = [
  { path: '/', name: 'Home', new: false },
  { path: '/about', name: 'About', new: false },
  { path: '/blog', name: 'Blog', new: true },
];

export const footerItems = {
  resources: [
    { path: '/', name: 'Documentation', internal: true },
    { path: '/support', name: 'Support', internal: true },
    { path: '/contact', name: 'Contact Us', internal: true },
  ],
  company: [
    { path: '/', name: 'Home', internal: true },
    { path: '/blog', name: 'Blog', internal: true },
    { path: '/company#careers', name: 'Careers', internal: true },
  ],
  legal: [
    { path: '/privacy', name: 'Privacy Policy', internal: true },
    { path: '/terms', name: 'Terms of Service', internal: true },
    { path: '/cookies', name: 'Cookies', internal: true },
  ],
};
