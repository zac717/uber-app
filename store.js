import { configureStore } from  "@reduxjs/toolkit"
import navReducer from "./slices/navSlice.js";

export const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      nav: navReducer,
    },
  });


