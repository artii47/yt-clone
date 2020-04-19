import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import * as Styled from "./App.styles";
import ErrorPage from "./pages/error-page/error-page";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import Spinner from "./components/spinner/spinner";

const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const SearchPage = React.lazy(() => import("./pages/search-page/search-page"));
const VideoDetailsPage = React.lazy(() =>
  import("./pages/video-details-page/video-details-page")
);

function App() {
  return (
    <Styled.App>
      <Router>
        <Header />
        <Suspense fallback={<Spinner middle />}>
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
        </Suspense>
      </Router>
    </Styled.App>
  );
}

export default App;
