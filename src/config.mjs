import defaultImage from './assets/images/Logo.png';

const CONFIG = {
	// 網站名稱
  name: '木成牙醫診所 Mu Cheng Dental Clinic',
	// 網域
  origin: 'https://mu-cheng.netlify.app',
	// 基本路徑
  basePathname: '/',
	// 是否判斷最後一行的"/"
  trailingSlash: false,

	// 網站SEO標題
  title: '木成牙醫診所 Mu Cheng Dental Clinic',

	// 網站SEO描述
  description:
    '木成牙醫診所 Mu Cheng Dental Clinic',
  
	// 網站SEO照片
	defaultImage: defaultImage,

	// 主題類型 待研究（CSS樣式）
  defaultTheme: 'light:only', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	// 語言
  language: 'zh-tw',
	// 字體方向
  textDirection: 'ltr',

	// 格式化日期，https://zhuanlan.zhihu.com/p/424162337
  dateFormatter: new Intl.DateTimeFormat('zh-TW', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	}),

	// Google Analytics
  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG, blog: undefined };
export const DATE_FORMATTER = CONFIG.dateFormatter;
