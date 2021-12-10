import React, { useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Jobs from './components/jobs/Jobs';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import { loadUser } from "./store/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/auth/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <ToastContainer />
      <Container className="root-container" maxWidth = "sm">
        <NavBar />
        <Container className="contentStyle" >
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
