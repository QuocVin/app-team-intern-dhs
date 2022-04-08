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
import { useSelector } from 'react-redux';
import Login from './views/Login';

function App() {

  function GuestLayout(props) {
    const isLogin = useSelector(state => state.loginState.isLogin)
    return (
      <Layout {...props}>
        <Switch>
          {Object.values(RoutesApp).map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  if(route.needLogin && !isLogin){
                   return <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location }
                    }}/> 
                  }else if(route.isLoginRoute && isLogin){
                    return <Redirect
                    to={{
                      pathname: "/",
                      state: { from: props.location }
                    }}/>
                  }else{
                  } 
                  return <route.component {...props} />
                }}
                  
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
        <Switch>
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