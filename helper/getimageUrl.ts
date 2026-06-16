export function getImageUrl(image: string) {
    if (image.startsWith("https")) {
        return image;
    }
    return `https://d2icu6klh68l1z.cloudfront.net/${image}`;
}   