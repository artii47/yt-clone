export const numberConverter = x => {
  if (isNaN(x)) return x;
  if (x < 999) {
    return x;
  }
  if (x < 1000000) {
    return Math.round(x / 1000) + "K";
  }
  if (x < 10000000) {
    return (x / 1000000).toFixed(2) + "M";
  }
  if (x < 1000000000) {
    return Math.round(x / 1000000) + "M";
  }
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
