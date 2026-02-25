import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/index.js";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import GroupsPage from "./pages/GroupsPage/GroupsPage.jsx";
import NotFoudPage from "./pages/NotFoudPage/NotFoudPage.jsx";

function App() {
  return (<Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<OrdersPage />}
      />
      <Route
        path='orders'
        element={<OrdersPage />}
      />

      <Route
        path='groups'
        element={<GroupsPage />}
      />

      <Route
        path="products"
        element={<ProductsPage />}
      />

      <Route
        path='*'
        element={<NotFoudPage />}
      />

    </Route>
  </Routes>);
}

export default App;