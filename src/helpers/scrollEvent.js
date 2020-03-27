const windowHeight = window.innerHeight;
export default () => {
  console.log(document.documentElement.scrollTop + windowHeight);
  console.log(document.documentElement.offsetHeight);
  if (
    document.documentElement.offsetHeight +
      document.documentElement.scrollTop >=
    document.documentElement.scrollHeight + 150
  ) {
    console.log("MORE");
  }
};
