import {BrowserRouter} from "react-router-dom";
import {store} from "../redux/store.js";
import {Provider} from "react-redux";

export function GlobalProvider({children}) {
  return (<BrowserRouter>
    <Provider store={store}>
      {children}
    </Provider>

  </BrowserRouter>)
}