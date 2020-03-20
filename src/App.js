import React from "react";
import { fetchAsync } from "./reducers/videosReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);

  const renderVideos = () => {
    if (!videos[0]) {
      return "";
    }
    console.log(videos[0].title);
    return videos[0].title.map(el => {
      console.log(el);
      return <img src={`${el.snippet.thumbnails.medium.url}`} />;
    });
  };

  return (
    <div>
      <button onClick={() => dispatch(fetchAsync())}>ugly button</button>
      {renderVideos()}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
