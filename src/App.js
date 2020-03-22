import React from "react";
import { fetchAsync } from "./reducers/videosReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideosContainer from "./components/videos-container/videos-container";
import * as Styled from "./App.styles";
import VideoDetails from "./components/video-details/video-details";
import VideoList from "./components/video-list/video-list";

function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Sidebar />
        <Route exact path={["/", "/search_query=:searchTerm"]}>
          <VideosContainer>
            <VideoList />
          </VideosContainer>
        </Route>
        <Route exact path={"/watch/:videoId"}>
          <VideosContainer>
            <VideoDetails />
          </VideosContainer>
        </Route>
      </Router>
      {/* <button onClick={() => dispatch(fetchAsync())}>ugly button</button>
      {renderVideos()} */}
    </Styled.App>
  );
}

export default App;
