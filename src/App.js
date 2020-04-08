import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Styled from "./App.styles";
import { useMediaQuery } from "react-responsive";
import VideosPopularList from "./components/videos-popular-list/videos-popular-list";
import VideoDetails from "./components/video-details/video-details";

import CommentsContainer from "./components/comments/commentsContainer";

import VideosSearchList from "./components/videos-search-list/videos-search-list";

import VideosRelatedList from "./components/videos-related-list/videos-related-list";

/*
TODO
sorting comments - DONE
proper fetching - DONE
fix fetching needed data only once - DONE
possibility to show more/show less video details description - DONE
add statistics for searched videos - DONE
showing some kind of spinner when elements loading - DONE
add dynamic like/dislike bar - DONE
fetching comments on scroll only once - DONE
fetching more related videos on scroll only once - DONE
fix fetching data when going back (previous page)
provide error handling on fetching
add items next to like/dislike bar
add api key to environment file
divide sidebar files
fetch more videos/comments when page is zoomed out
*/
function App() {
  const isMediumSize = useMediaQuery({ query: `(max-device-width: 1000px)` });
  return (
    <Styled.App>
      <Router>
        <Header />
        <Route exact path={["/"]}>
          <Sidebar />
          <VideosPopularList />
        </Route>
        <Route exact path={["/search_query=:searchTerm"]}>
          <Sidebar />
          <VideosSearchList />
        </Route>
        <Route exact path={"/watch/:videoId"}>
          <Styled.Container>
            <Styled.FlexWrapper>
              <Styled.VideoDetailsAndCommentsWrapper>
                <VideoDetails />
                {isMediumSize && (
                  <VideosRelatedList enableScrollEvent={false} />
                )}
                <CommentsContainer />
              </Styled.VideoDetailsAndCommentsWrapper>
              {!isMediumSize ? <VideosRelatedList enableScrollEvent /> : ""}
            </Styled.FlexWrapper>
          </Styled.Container>
        </Route>
      </Router>
    </Styled.App>
  );
}

export default App;
