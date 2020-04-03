import { ReactComponent as PremiumSVG } from "../../../assets/icons/youtube-premium.svg";
import { ReactComponent as LiveSVG } from "../../../assets/icons/live.svg";
import { ReactComponent as SettingsSVG } from "../../../assets/icons/settings.svg";
import { ReactComponent as ReportSVG } from "../../../assets/icons/report.svg";
import { ReactComponent as HelpSVG } from "../../../assets/icons/help.svg";
import { ReactComponent as FeedbackSVG } from "../../../assets/icons/feedback.svg";

export const primaryItems = [
  {
    name: "YouTube Premium",
    path: "/premium",
    Svg: PremiumSVG
  },
  {
    name: "Live",
    path: "/live",
    Svg: LiveSVG
  }
];

export const secondaryItems = [
  {
    name: "Settings",
    path: "/settings",
    Svg: SettingsSVG
  },
  {
    name: "Report history",
    path: "/report",
    Svg: ReportSVG
  },
  {
    name: "Help",
    path: "/help",
    Svg: HelpSVG
  },
  {
    name: "Send feedback",
    path: "/feedback",
    Svg: FeedbackSVG
  }
];
