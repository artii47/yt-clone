import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideosContainer from "./components/videos-container/videos-container";
import * as Styled from "./App.styles";
import VideoDetails from "./components/video-details/video-details";
import VideoList from "./components/video-list/video-list";
import RelatedVideos from "./components/related-videos/related-videos";
import Comments from "./components/comments/comments";
/*
TODO
sorting comments - DONE
proper fetching - DONE
fix fetching needed data only once - DONE
possibility to show more/show less video details description - DONE
add statistics for searched videos - DONE
fix fetching data when going back (previous page)
showing some kind of spinner when elements loading
add dynamic like/dislike bar
fetching comments on scroll only once
fetching more related videos on scroll only once
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "130rem",
                  paddingRight: "2.4rem",
                  paddingTop: "2.4rem",
                  marginLeft: "2rem"
                }}
              >
                <VideoDetails />
                <Comments />
              </div>
              <RelatedVideos />
            </div>
          </VideosContainer>
        </Route>
      </Router>
    </Styled.App>
  );
}

export default App;
