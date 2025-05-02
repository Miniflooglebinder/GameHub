// Example URL:
// https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

const getCroppedImage = (url: string) => {
  const target = "media/";

  // Get the index where we want to insert the crop info
  const index = url.indexOf(target) + target.length;

  // Inject the crop info between the sliced string
  //   "https://media.rawg.io/media/"
  // + "crop/600/400"
  // + "/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;
