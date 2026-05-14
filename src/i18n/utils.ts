import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/portfolio/');
  const first = lang?.split('/')[0];
  if (first && first in ui) return first as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: string, path: string) {
  return `/portfolio/${lang}${path}`;
}
