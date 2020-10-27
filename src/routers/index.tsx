import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import loadable from "@loadable/component";
const Loading = () => <div>Loading</div>;

const Topics = loadable(() => import('./topics'), { fallback: <Loading /> })
const About = loadable(() => import('./about'), { fallback: <Loading /> })
const Home = loadable(() => import('./home'), { fallback: <Loading /> })


const Routes: any = () => {
  return <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
};
export default Routes;