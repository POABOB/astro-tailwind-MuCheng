import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
// import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';


// import { remarkReadingTime } from './src/utils/frontmatter.mjs';
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 如果有配置Google Analytics的話，他會被安排在一個額外的SandBox執行
const whenExternalScripts = (items = []) =>
  SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
	// 網站網域
  site: SITE.origin,
	// 基本路徑
  base: SITE.basePathname,
	// 判斷uri的時候是否檢查"/"
	// 'always': /foo/
	// 'never': /foo
	// 'ignore' 忽略最後一行的"/""
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

	// static - 靜態頁面
	// server - 構建應用，部署至SSR的Server上
  output: 'static',

  integrations: [
		// tailwind函式庫
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
		// 自動產生sitemap的函式庫
    sitemap(),
		// 圖片優化的函式庫，提供<Image />、<Picture />兩個組件使用
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
		// 讓JSX可以在Markdown檔案使用
    // mdx(),

		// 一個第三方函式庫的SandBox，可以提高安全性和性能優化
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
		// 壓縮檔案用的
    compress({
      css: true,
      html: true,
      img: false,
      js: true,
      svg: false,

      logger: 1,
    }),
  ],

	// // 控制markdown是否會被打包
  // markdown: {
  //   remarkPlugins: [remarkReadingTime],
  //   extendDefaultPlugins: true,
  // },

	// vite配置，可以在此設定
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

	// 幫忙Markdown、MDX和前端做整合的工具
  // experimental: {
  //   contentCollections: true,
  // },
});
