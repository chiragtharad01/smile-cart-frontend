import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product/index";
import ProductList from "components/ProductList/index";
import { NavLink, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";

// eslint-disable-next-line import/extensions

const App = () => (
  <>
    <div className="flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/products">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route exact component={Product} path="/product/:slug" />
      <Route exact component={ProductList} path="/products" />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
