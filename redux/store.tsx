import { configureStore,Action ,Reducer} from "@reduxjs/toolkit";
import axios from "axios"
import {
    persistStore, persistReducer , PersistConfig, PERSIST
} from "redux-persist"
import storage from 'redux-persist/lib/storage' 
import { rootReducer } from "./slices";

import toast from "react-hot-toast";
import Cookies from "universal-cookie";
 
type RootState = ReturnType<typeof rootReducer>;
 
const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer:Reducer <any, Action>  = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          PERSIST,
        ],
      },
    }),
})

export let persistor = persistStore(store)

export const apiService = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL
})

type InternalAxiosRequestConfig = any

// ------------------------ Axios interceptor request -------------------------
apiService.interceptors.request.use(
    function (config:InternalAxiosRequestConfig) {
    //   let tz = moment.tz.guess();
    //   console.log(tz, "time");
      let accessToken = null;
      const cookies = new Cookies();
  
  
      // Fetching JWT Token from the local storage.
      if (cookies.get("jwtToken") != undefined)
      
      config.headers = {
        Accept: "application/json",
        "Content-Type": config.url.includes("/attachment/upload")
        ? "multipart/form-data"
        : "application/json",
        
        // timezone: tz,
        
        // language:
        //   typeof window !== "undefined" && localStorage.getItem("language")
        //     ? localStorage.getItem("language")
        //     : "en",
      };
      console.log(config.headers,"config.url")
      accessToken = window.location.href.includes("/preview") ? cookies.get("deviceToken") : cookies.get("jwtToken");
  
  
      // Send JWT token in every request if access token value found.
      if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  
      config.params = {
        ...config.params, // Here, we send params in URL as a Query Params.
      };
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // ------------------------ Axios interceptor response -------------------------
  apiService.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error,"123")
      if (
        typeof error?.response !== "undefined" &&
        typeof error?.response?.status !== "undefined"
      ) {
        switch (error.response.status) {
          // Unauthorized User - HTTP STATUS 401 - Error Handling
          case 401:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            //   setTimeout(() => {
            //     clearSession();
            //   }, 3000);
            break;
          case 440:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            //   clearSession();
            break;
          case 404:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            break;
          case 409:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            break;
          case 400:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            break;
          // Server Side Issues Handling
          case 500:
            error?.response?.data?.message
              ? toast.error(error?.response?.data?.message)
              : toast.error(
                  "Sorry, something went wrong. Please try again later."
                );
            break;
          default:
            toast.error("Sorry, something went wrong. Please try again later.");
        }
      }
  
      return Promise.reject(error);
    }
  );
  