export const durationConverter = (duration) => {
  const durationSliced = duration.slice(2).toString();
  const shortenDuration = durationSliced
    .replace("M", ":")
    .replace("S", "")
    .replace("H", ":");
  const parts = shortenDuration.split(":");
  if (parts[parts.length - 1] < 10) {
    parts[parts.length - 1] = `0${parts[parts.length - 1]}`;
  }
  if (parts.length === 1) {
    parts[0] = `0:${parts[0]}`;
  }
  if (parts[0] && parts[1] === "0") {
    parts[1] = "00";
  }
  const durationReady = parts.join(":");
  return durationReady;
};
