import { DATE_FORMATTER } from '~/config.mjs';

// Date的格式化
const formatter =
  DATE_FORMATTER ||
  new Intl.DateTimeFormat('zh-TW', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	})

/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) => (date ? formatter.format(date) : '');

// trim原本在瀏覽器的用法是刪除頭尾的空格，這個函數可以指定字元來刪除頭尾
export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};
