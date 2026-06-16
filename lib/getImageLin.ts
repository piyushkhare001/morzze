export function getImageURL(image: string | null | undefined) {
    const baseUrl =
        // process.env.NEXT_PUBLIC_S3_BASE_URL ||
        "https://d2icu6klh68l1z.cloudfront.net";

    if (!image) return "";
    if (image.startsWith("http") || image.startsWith("blob:") || image.startsWith("data:")) {
        return image;
    }
    return `${baseUrl}/${image.replace(/^\/+/, "")}`;
}
