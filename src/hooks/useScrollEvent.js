import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "lodash";

const useScrollEvent = (data, domElement, action, ...args) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("scroll", throttledFunction);
    return () => {
      document.removeEventListener("scroll", throttledFunction);
    };
  }, [data]);
  const trackScrolling = () => {
    const element = document.getElementById(domElement);
    if (isBottom(element)) {
      if (data.nextPageToken) {
        dispatch(action(data.nextPageToken, ...args));
        document.removeEventListener("scroll", throttledFunction);
      } else {
        document.removeEventListener("scroll", throttledFunction);
      }
    }
  };
  const throttledFunction = throttle(trackScrolling, 100);

  const isBottom = el => {
    if (data) {
      return el.getBoundingClientRect().bottom <= window.innerHeight + 100;
    }
  };
};

export default useScrollEvent;
