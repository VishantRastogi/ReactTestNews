/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import { Payload } from '../models/payload';
// Create an interface for the application state
export type Root = {
    readonly articleStateData: ArticleStateData,
};

export type ArticleStateData = {
    readonly articles: Payload[];
};
