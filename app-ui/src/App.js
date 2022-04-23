import React, { Suspense, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./layouts";
import { ROLE, RoutesApp, RoutePaths } from './common';
import cookies from 'react-cookies';

function App() {

  function GuestLayout(props) {
    return (
      <Layout {...props}>
        <Switch>
          {Object.values(RoutesApp).map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
          <Redirect to={RoutePaths.Home} />
        </Switch>
      </Layout>
    );
  }

  return (
    <Router>
      {/* {loggedIn ? (
        <Switch> test source tree
          <Route key={1} path="/" render={(props) => <GuestLayout {...props} />} />
        </Switch>
      ) : (  
        <Switch>
          <Route key={0} path="/" render={(props) => <GuestLayout {...props} />} />
        </Switch>
      )} */}
      <Route key={0} path="/" render={(props) => <GuestLayout {...props} />} />
    </Router>
  );
}

export default App;