import Cart from "components/Cart/index";
import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product/index";
import ProductList from "components/ProductList/index";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

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
      <Route exact component={Product} path={routes.products.show} />
      <Route exact component={ProductList} path={routes.products.index} />
      <Redirect exact from={routes.root} to={routes.products.index} />
      <Route exact component={Cart} path={routes.cart} />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
