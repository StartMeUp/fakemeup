// unsplash instructions https://awik.io/generate-random-images-unsplash-without-using-api/

export const random = (ratio: string = "landscape", keyword?: string) => {
  const baseUrl = "https://source.unsplash.com/";
  const size =
    ratio === "landscape"
      ? "1280x720"
      : ratio === "square"
      ? "1000x1000"
      : ratio === "portrait"
      ? "576x1024"
      : ratio;
  return `${baseUrl}${size}${keyword ? "/?" + keyword : ""}`;
};
