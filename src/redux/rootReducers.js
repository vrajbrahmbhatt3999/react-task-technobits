import { combineReducers } from "redux";
import DashboardSlice from "./dashboardSlice/DashboardSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
    storage,
    key: "movie-user",
    whitelist: ["dashboardAllData"],
  };
  const PeristedLoginReducer = persistReducer(persistConfig, DashboardSlice);
  
export const roorReducer = combineReducers({
    dashboardReducer: PeristedLoginReducer
})