import { useEffect } from 'react';
import { profile } from '../../data/profile';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function Seo({ title, description, path = '/', image = '/Website/Images/Grad.jpg' }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = new URL(path.replace(/^\//, ''), profile.siteUrl).toString();
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', image.startsWith('http') ? image : new URL(image.replace(/^\//, ''), profile.siteUrl).toString(), 'property');
    setMeta('twitter:card', 'summary_large_image');
    setLink('canonical', canonicalUrl);
  }, [description, image, path, title]);

  return null;
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}
