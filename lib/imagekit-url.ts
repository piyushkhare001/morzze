const IMAGEKIT_STATIC_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export function imageKitUrl(path: string) {
  if (!IMAGEKIT_STATIC_URL) {
    throw new Error("NEXT_PUBLIC_IMAGEKIT_STATIC_URL is not defined");
  }

  const cleanBaseUrl = IMAGEKIT_STATIC_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");

  return `${cleanBaseUrl}/Morzze/${cleanPath}`;
}
