import { ReactComponent as BrowseSVG } from "../../../assets/icons/browse.svg";
import musicImg from "../../../assets/icons/music1.jpg";
import sportsImg from "../../../assets/icons/sports.jpg";
import gamingImg from "../../../assets/icons/gaming.jpg";
import moviesImg from "../../../assets/icons/movies.jpg";
import newsImg from "../../../assets/icons/news.jpg";
import liveImg from "../../../assets/icons/live.jpg";
import video360Img from "../../../assets/icons/360.jpg";

export const primaryItems = [
  {
    name: "Music",
    path: "/music",
    img: musicImg,
    Svg: ""
  },
  {
    name: "Sports",
    path: "/trending",
    img: sportsImg,
    Svg: ""
  },
  {
    name: "Gaming",
    path: "/subscriptions",
    img: gamingImg,
    Svg: ""
  },
  {
    name: "Movies",
    path: "/subscriptions",
    img: moviesImg,
    Svg: ""
  },
  {
    name: "News",
    path: "/subscriptions",
    img: newsImg,
    Svg: ""
  },
  {
    name: "Live",
    path: "/subscriptions",
    img: liveImg,
    Svg: ""
  },
  {
    name: "360 Video",
    path: "/subscriptions",
    img: video360Img,
    Svg: ""
  }
];

export const secondaryItems = [
  {
    name: "Browse channels",
    path: "/library",
    Svg: BrowseSVG
  }
];
