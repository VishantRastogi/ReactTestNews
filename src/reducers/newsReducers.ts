/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import { GetNewsList, GET_NEWS_DATA } from "../actions/newsTypes";
import * as State from "../state";

export const ArticleState: State.ArticleStateData = {
  articles: [],
};

export const articlesReducer = (
  state: State.ArticleStateData = ArticleState,
  action: GetNewsList
) => {
  switch (action.type) {
    case GET_NEWS_DATA:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};