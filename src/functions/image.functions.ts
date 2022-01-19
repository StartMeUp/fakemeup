// unsplash instructions https://awik.io/generate-random-images-unsplash-without-using-api/

export const random = (
  ratio: "square" | "landscape" | "portrait" = "landscape",
  keyword?: string
) => {
  const baseUrl = "https://source.unsplash.com/random/";
  const size =
    ratio === "landscape"
      ? "1280x720"
      : ratio === "square"
      ? "1000x1000"
      : ratio === "portrait"
      ? "576x1024"
      : "";
  if (!size)
    throw new Error(
      "Ratio must be passed as first argument for image.random(ratio, keyword)"
    );
  return `${baseUrl}${size}${keyword ? "/?" + keyword : ""}`;
};
