import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import * as Styled from "./App.styles";
import Homepage from "./pages/home-page/home-page";
import SearchPage from "./pages/search-page/search-page";
import VideoDetailsPage from "./pages/video-details-page/video-details-page";
import ErrorPage from "./pages/error-page/error-page";

function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search_query=:searchTerm">
          <SearchPage />
        </Route>
        <Route exact path="/watch/:videoId">
          <VideoDetailsPage />
        </Route>
        <Route exact path="/error/:errorMessage">
          <ErrorPage />
        </Route>
      </Router>
    </Styled.App>
  );
}

export default App;
