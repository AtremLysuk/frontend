import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/index.js";
import OrdersPage from "./pages/OrdersPage";
import GroupsPage from "./pages/GroupsPage";
import ProductsPage from "./pages/ProductsPage";

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
        path="products"
        element={<ProductsPage />}
      />

      <Route
        path="groups"
        element={<GroupsPage />}
      />
      <Route path='' element={<div>404 Page Not Found </div>} />
      
    </Route>
  </Routes>);
}

export default App;