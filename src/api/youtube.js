import axios from "axios";

export const youtubeVideos = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const youtubeVideo = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

//videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY
