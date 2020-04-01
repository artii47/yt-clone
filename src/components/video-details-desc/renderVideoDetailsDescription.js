export const renderVideoDetailsDescContent = desc => {
  const wordsArr = desc.split(" ");
  if (wordsArr.length < 40) {
    return desc;
  } else {
    return wordsArr.slice(0, 40).join(" ");
  }
};
