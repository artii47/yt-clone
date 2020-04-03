import { ReactComponent as HomeSVG } from "../../../assets/icons/home.svg";
import { ReactComponent as TrendingSVG } from "../../../assets/icons/trending.svg";
import { ReactComponent as SubscriptionsSVG } from "../../../assets/icons/subs.svg";
import { ReactComponent as LibrarySVG } from "../../../assets/icons/library.svg";
import { ReactComponent as HistorySVG } from "../../../assets/icons/history.svg";

export const primaryItems = [
  {
    name: "Home",
    path: "/",
    Svg: HomeSVG
  },
  {
    name: "Trending",
    path: "/trending",
    Svg: TrendingSVG
  },
  {
    name: "Subscriptions",
    path: "/subscriptions",
    Svg: SubscriptionsSVG
  }
];

export const secondaryItems = [
  {
    name: "Library",
    path: "/library",
    Svg: LibrarySVG
  },
  {
    name: "History",
    path: "/history",
    Svg: HistorySVG
  }
];
