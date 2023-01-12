// import slugify from 'limax';

import { SITE } from '~/config.mjs';
import { trim } from '~/utils/utils';

const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

// export const cleanSlug = (text = '') =>
//   trimSlash(text)
//     .split('/')
//     .map((slug) => slugify(slug))
//     .join('/');

/** 獲取路就或是新的URL*/
export const getCanonical = (path = ''): string | URL => new URL(path, SITE.origin);

/** 獲取連結*/
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** 獲取首頁連結*/
export const getHomePermalink = (): string => getPermalink('/');

/** 定義的連結*/
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
