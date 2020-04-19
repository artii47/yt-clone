import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import * as Styled from "./App.styles";
import ErrorPage from "./pages/error-page/error-page";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import HomePage from "./pages/home-page/home-page";
import SearchPage from "./pages/search-page/search-page";
import VideoDetailsPage from "./pages/video-details-page/video-details-page";

function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Route exact path="/">
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        </Route>
        <Route exact path="/search_query=:searchTerm">
          <ErrorBoundary>
            <SearchPage />
          </ErrorBoundary>
        </Route>
        <Route exact path="/watch/:videoId">
          <ErrorBoundary>
            <VideoDetailsPage />
          </ErrorBoundary>
        </Route>
        <Route exact path="/error/:errorMessage">
          <ErrorPage />
        </Route>
      </Router>
    </Styled.App>
  );
}

export default App;
