import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideosContainer from "./components/videos-container/videos-container";
import * as Styled from "./App.styles";
import VideoDetails from "./components/video-details/video-details";
import VideoList from "./components/video-list/video-list";
import RelatedVideos from "./components/related-videos/related-videos";

function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Route exact path={["/", "/search_query=:searchTerm"]}>
          <Sidebar />
          <VideosContainer>
            <VideoList />
          </VideosContainer>
        </Route>
        <Route exact path={"/watch/:videoId"}>
          <VideosContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "0 6rem"
              }}
            >
              <VideoDetails />
              <RelatedVideos />
            </div>
          </VideosContainer>
        </Route>
      </Router>
      {/* <button onClick={() => dispatch(fetchAsync())}>ugly button</button>
      {renderVideos()} */}
    </Styled.App>
  );
}

export default App;
