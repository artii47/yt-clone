import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "lodash";

const useScrollEvent = (data, domElement, action, ...args) => {
  const dispatch = useDispatch();
  const [element, setElement] = useState(null);
  useEffect(() => {
    setElement(document.getElementById(domElement));
    document.addEventListener("scroll", throttledFunction);
    return () => {
      document.removeEventListener("scroll", throttledFunction);
    };
  }, [data, domElement, element]);
  const trackScrolling = () => {
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
