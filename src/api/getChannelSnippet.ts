import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";
import { Token, Response, Status } from "./types";
import { match } from "ts-pattern";

export const getChannelSnippet = async () => {
  const token: Token = {
    youtubeAPIKey: dotenv.config().parsed?.YOUTUBE_TOKEN,
    CHANNEL_ID: dotenv.config().parsed?.CHANNEL_ID,
  };
  if (!token.youtubeAPIKey || !token.CHANNEL_ID)
    throw new Error("Token is not found");
  const options: AxiosRequestConfig = {
    url: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${token.CHANNEL_ID}&maxResults=5&key=${token.youtubeAPIKey}`,
    method: "GET",
  };
  const { data, status } = await axios<Response>(options);
  match(status as Status)
    .with(200, () => console.log("Success Request"))
    .with(400, () => {
      throw new Error("Bad Request");
    })
    .with(403, () => {
      throw new Error("Forbidden");
    })
    .with(404, () => {
      throw new Error("Not Found");
    })
    .exhaustive();

  return {
    res: data.items[0].snippet,
  };
};
