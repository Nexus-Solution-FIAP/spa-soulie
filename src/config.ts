/** Troque estes links no `.env` quando as lojas estiverem no ar. */
export const ANDROID_DOWNLOAD_URL =
  import.meta.env.VITE_ANDROID_DOWNLOAD_URL ??
  'https://play.google.com/store/apps/details?id=com.nexussolution.soulie'

export const IOS_DOWNLOAD_URL =
  import.meta.env.VITE_IOS_DOWNLOAD_URL ??
  'https://apps.apple.com/app/soulie'
