import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

//setup root reducer /  single function or object of slice reducers / adaugă valori implicite bune la configurarea magazinului pentru o experiență de dezvoltare mai bună
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
