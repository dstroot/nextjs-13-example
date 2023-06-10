import { MetadataRoute } from 'next';
import { meta, menuItems, footerItems } from '@/data/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  //   const res = await fetch('https://.../posts');
  //   const allPosts = await res.json();

  //   const posts = allPosts.map((post) => ({
  //     url: `https://acme.com/blog/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  // menu routes
  const routes = menuItems.map((route) => ({
    url: `${meta.URL}${route.path}`,
    lastModified: new Date(),
  }));

  // routes in footer
  const footerRoutes = footerItems.legal.map((route) => ({
    url: `${meta.URL}${route.path}`,
    lastModified: new Date(),
  }));

  //   return [...routes, ...posts];
  return [...routes, ...footerRoutes];
}
