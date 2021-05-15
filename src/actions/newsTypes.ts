/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import { APIActions } from "./apiTypes";
import axios from "axios";
import { Payload } from "../models/payload";

export const GET_NEWS_DATA = "GET_NEWS_DATA";

// Interface for Get All Action Type
export type GetNews = {
  type: "GET_NEWS_DATA";
  payload: Payload[];
};

export type GetNewsList = APIActions | GetNews;

export const getBitCoinsArticle = (callback?: (data: any) => void): any => {
  return (dispatch: any) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}&pageSize=100`
      )
      .then((res) => {
        if (res.data && res.status === 200) {
          let value: Payload[];
          value = res.data.articles;
          if (callback) callback(value);
          dispatch({
            type: GET_NEWS_DATA,
            payload: value,
          });
        }
      });
  };
};
