import React, { useState, useRef } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import FocusLock from 'react-focus-lock';
import { PageTransition } from "@steveeeie/react-page-transition";


// Style
import './App.scss';
import "./style/styles.css";

//Components
import { Burger, Menu } from './components';
// import Login from './components/Login/Login';
// import useToken from './components/App/useToken';

// Pages
import Home from './pages/home';
// import ECvid from './components/ECvid';

const Links = () => (
  <>
    {/* <Link to="/ECvid"></Link> */}
    <Link to="/"></Link>
  </>
);


function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
    <BrowserRouter>
    <Links />
      <Route
        render={({ location }) => {
          return (
          <PageTransition
            preset="scaleUpScaleUp"
            transitionKey={location.pathname}
          >
            <Switch location={location} key={location.pathname}>
            {/* <Route
                exact
                path='/ECvid'
                component={ECvid}>
              </Route> */}
              <Route
                exact
                path='/'
                component={Home}>
              </Route>
              
            </Switch>
          </PageTransition>
          );
        }}
      />
    </BrowserRouter>
    </>
    </ThemeProvider>
  );
}

export default App;
