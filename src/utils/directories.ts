import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** 獲取專案根目錄*/
export const getProjectRootDir = (): string => {
  const mode = import.meta.env.MODE;

  return mode === 'production' ? path.join(__dirname, '../') : path.join(__dirname, '../../');
};

const __srcFolder = path.join(getProjectRootDir(), '/src');

/** 相對路徑來獲取檔案*/
export const getRelativeUrlByFilePath = (filepath: string): string => {
  return filepath.replace(__srcFolder, '');
};
