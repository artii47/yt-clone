import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import VideosPopularList from "../../components/videos-popular-list/videos-popular-list";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <VideosPopularList />
    </>
  );
};

export default HomePage;
