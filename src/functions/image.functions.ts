// unsplash instructions https://awik.io/generate-random-images-unsplash-without-using-api/

const customRatioCheck = (ratio: string) => {
  const size = ratio.split("").sort();
  const lastChar = size.pop();
  if (lastChar === "x" && !isNaN(Number(size.join("")))) return true;
  return false;
};

export const random = (ratio: string = "landscape", keyword?: string) => {
  const baseUrl = "https://source.unsplash.com/";
  let size = "";
  switch (ratio) {
    case "landscape":
      size = "1280x720";
      break;
    case "square":
      size = "1000x1000";
      break;
    case "portrait":
      size = "576x1024";
      break;
    default:
      if (!customRatioCheck(ratio)) throw new Error("Wrong ratio syntax");
      size = ratio;
  }
  return `${baseUrl}${size}${keyword ? "/?" + keyword : ""}`;
};
