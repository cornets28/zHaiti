import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./features/authModalSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import userSlice from "../redux/features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
  }
});

export default store;