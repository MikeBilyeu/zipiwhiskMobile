export const parseNum = (num) => {
  return num > 1000000
    ? parseFloat((num / 1000000).toFixed(1)) + "m"
    : num > 1000
    ? parseFloat((num / 1000).toFixed(1)) + "k"
    : num > 0
    ? num
    : "";
};
