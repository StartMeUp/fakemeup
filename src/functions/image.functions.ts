// unsplash instructions https://awik.io/generate-random-images-unsplash-without-using-api/

export const random = (
  orientation: "square" | "landscape" | "portrait" = "landscape",
  keyword?: string
) => {
  const baseUrl = "https://source.unsplash.com/random/";
  const size =
    orientation === "landscape"
      ? "1280x720"
      : orientation === "square"
      ? "1000x1000"
      : orientation === "portrait"
      ? "576x1024"
      : "";
  if (!size)
    throw new Error(
      "Orientation must be passed as first argument for image.random(orientation, keyword)"
    );
  return `${baseUrl}${size}${keyword ? "/?" + keyword : ""}`;
};
