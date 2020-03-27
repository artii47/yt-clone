import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideosContainer from "./components/videos-container/videos-container";
import * as Styled from "./App.styles";
import VideoDetails from "./components/video-details/video-details";
import VideoList from "./components/video-list/video-list";
import RelatedVideos from "./components/related-videos/related-videos";
import CommentList from "./components/comment-list/comment-list";
import Comments from "./components/comments/comments";
/*
TODO
sorting comments - DONE
proper fetching - DONE
fix fetching needed data only once - DONE
fetch comments and related video on scroll
possibility to show more/show less video details description
*/
function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Route exact path={["/", "/search_query=:searchTerm"]}>
          <Sidebar />
          <VideoList />
        </Route>
        <Route exact path={"/watch/:videoId"}>
          <VideosContainer>
            <VideoDetails />
            <RelatedVideos />
            <Comments />
          </VideosContainer>
        </Route>
      </Router>
    </Styled.App>
  );
}

export default App;
