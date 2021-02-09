import { IMAGE_CHANGE } from "../constants";

export function changeImage(imagePath) {
  return {
    type: IMAGE_CHANGE,
    payload: imagePath,
  };
}
