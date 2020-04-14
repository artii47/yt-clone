import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import * as Styled from "./App.styles";
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
add api key to environment file - DONE
provide error handling on fetching - DONE
fix fetching data when going back (previous page)
add items next to like/dislike bar
fetch more videos/comments when page is zoomed out
*/
function App() {
  const isMediumSize = useMediaQuery({ query: `(max-width: 1000px)` });
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
        <Route exact path="/watch/:videoId">
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
