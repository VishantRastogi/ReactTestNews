/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import { applyMiddleware, combineReducers, createStore, Store as ReduxStore } from 'redux';
import thunk from 'redux-thunk';
import { articlesReducer, ArticleState } from './reducers/newsReducers';
import * as State from './state';


export const InitialState: State.Root = {
    articleStateData: ArticleState,
};

// Create the root reducer
const rootReducer = combineReducers<State.Root>({
    articleStateData: articlesReducer,
});

export const store: ReduxStore<State.Root> = createStore(rootReducer, InitialState, applyMiddleware(thunk));