import { youtubeOptions } from "./fetchOptions";

//https://www.youtube.com/watch?v=YQHsXMglC9A

interface thumbnailTypes {
  height: number;
  url: string;
  width: string;
}

interface videoTypes {
  channelId: string;
  channelName: string;
  description: string;
  lengthText: string;
  publishedTimeText: string;
  thumbnails: thumbnailTypes[];
  title: string;
  videoId: string;
  viewCountText: string;
}

export interface content {
  video: videoTypes;
}

export const fetchYoutube = async (searchName: string) => {
  const response = await fetch(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${searchName}&type=v&sort=r`,
    youtubeOptions
  );
  const data = await response.json();
  return data;
};
