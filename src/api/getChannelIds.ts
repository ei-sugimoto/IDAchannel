import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';

type Token = {
  youtubeAPIKey: string;
}
type Response = {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items:[
    {
      kind: string;
      etag: string;
      id: string;
    }
  ]
}


export const getChannelIds = async () => {
  const token: Token = {
    youtubeAPIKey: dotenv.config().parsed?.YOUTUBE_TOKEN ?? ''
  }
  const options: AxiosRequestConfig = {
    url: `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=@ida_channel&key=${token.youtubeAPIKey}`,
    method: "GET",
  };

  const response: AxiosResponse<Response> = await axios(options)
  if(response.data.items && response.data.items.length > 0) console.log(response.data.items[0].id);
};

getChannelIds();
