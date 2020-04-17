import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import VideosSearchList from "../../components/videos-search-list/videos-search-list";

const SearchPage = () => {
  return (
    <>
      <Sidebar />
      <VideosSearchList />
    </>
  );
};

export default SearchPage;
