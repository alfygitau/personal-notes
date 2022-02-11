import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import AuthPage from "./pages/authpage";
import EditNotePage from "./pages/editnotepage";
import NotePage from "./pages/notepage";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, Slide} from 'react-toastify'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar transition={Slide}/>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/notes" component={NotePage} />
          <Route exact path="/edit-note" component={EditNotePage} />
          <Route exact path="/edit-note/:noteId" component={EditNotePage} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </React.Fragment>
  );
};
export default App;
