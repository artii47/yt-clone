import { ReactComponent as CreateVideoSVG } from "../../../assets/icons/video.svg";
import { ReactComponent as MoreAppsSVG } from "../../../assets/icons/apps.svg";
import { ReactComponent as SettingsSVG } from "../../../assets/icons/header-settings.svg";

export const primaryItems = [
  {
    name: "Create a video",
    path: "/create",
    Svg: CreateVideoSVG,
  },
  {
    name: "Apps",
    path: "/apps",
    Svg: MoreAppsSVG,
  },
  {
    name: "Settings",
    path: "/settings",
    Svg: SettingsSVG,
  },
];
