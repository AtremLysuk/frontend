import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/index.js";
import OrdersPage from "./pages/OrdersPage/index.js";
import ProductsPage from "./pages/ProductsPage/index.js";
import GroupsPage from "./pages/GroupsPage/GroupsPage.jsx";
import NotFoudPage from "./pages/NotFoudPage/NotFoudPage.jsx";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";

function App() {
  return (<Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Navigate
          to="/orders"
          replace
        />}
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
        path='settings'
        element={<SettingsPage />}
      />
      <Route
        path='users'
        element={<UsersPage />}
      />


      <Route
        path='*'
        element={<NotFoudPage />}
      />

    </Route>
  </Routes>);
}

export default App;