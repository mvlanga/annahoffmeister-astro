import type { AssetFile } from "contentful";

export type OptimizeContentfulImageProps = {
  width?: number;
  quality?: number;
};

export type OptimizeContentfulImageResponse = {
  url: string;
  width: number;
  height: number;
};

export const optimizeContentfulImage = (
  file: AssetFile,
  { width: newWidth, quality = 80 }: OptimizeContentfulImageProps,
): OptimizeContentfulImageResponse => {
  const url = new URL(file.url.replace("//", "https://"));

  if (
    file.details.image?.height === undefined ||
    file.details.image?.width === undefined
  ) {
    throw new Error(`${file.fileName} has no valid width/height`);
  }

  const { width: originalWidth, height: originalHeight } = file.details.image;

  let newHeight: undefined | number;

  if (newWidth !== undefined) {
    url.searchParams.set("w", newWidth.toString(10));

    const factor = newWidth / originalWidth;
    newHeight = originalHeight * factor;
  }

  if (quality) {
    url.searchParams.set("q", quality.toString(10));
  }

  url.searchParams.set("fm", "avif");

  return {
    url: url.toString(),
    width: newWidth ?? originalWidth,
    height: newHeight ?? originalHeight,
  };
};
