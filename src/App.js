import React from "react";
import { fetchAsync } from "./reducers/videosReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import VideosContainer from "./components/videos-container/videos-container";
import * as Styled from "./App.styles";

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
    <Styled.App>
      <Header />
      <Styled.FlexWrapper>
        <Sidebar />
        <VideosContainer />
      </Styled.FlexWrapper>
      {/* <button onClick={() => dispatch(fetchAsync())}>ugly button</button>
      {renderVideos()} */}
    </Styled.App>
  );
}

export default App;
