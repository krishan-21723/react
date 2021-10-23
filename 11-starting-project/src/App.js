import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail></ProductDetail>
        </Route>
      </main>
    </div>
  );
}

export default App;
