// 加載本地照片路徑
const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**');
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images;

/** 獲取本地照片*/
export const fetchLocalImages = async () => {
  _images = _images || load();
  return await _images;
};

/** 搜尋照片*/
export const findImage = async (imagePath?: string) => {
  if (typeof imagePath !== 'string') {
    return null;
  }

	// 搜尋網路圖片
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets')) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

	// 返回照片路徑
  return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};
