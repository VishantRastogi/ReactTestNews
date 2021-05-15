/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";
export const API_CANCELED = "API_CANCELED";

export type APIActions = APIAction | ApiStart | ApiEnd | AccessDenied | ApiError | ApiCanceled;

export type APIAction = {
    type: "API"
};

export type ApiStart = {
    type: "API_START",
    payload: string
};

export type ApiEnd = {
    type: "API_END",
    payload: string
};

export type AccessDenied = {
    type: "ACCESS_DENIED",
    payload: {
        url: any
    }
};

export type ApiError = {
    type: "API_ERROR",
    error: any
};

export type ApiCanceled = {
    type: "API_CANCELED",
};

export const api = (label: any) => ({
    type: "API"
});

export const apiStart = (label: any) => ({
    type: "API_START",
    payload: label
});

export const apiEnd = (label: any) => ({
    type: "API_END",
    payload: label
});

export const accessDenied = (url: any) => ({
    type: "ACCESS_DENIED",
    payload: {
        url
    }
});

export const apiError = (error: any) => ({
    type: "API_ERROR",
    error
});

export const apiCanceled = () => ({
    type: "API_CANCELED",
});
