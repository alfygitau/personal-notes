import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const history = useHistory();
  // console.log("user", user)

  const logout = (e) => {
    e.preventDefault();
    dispatch(Logout());
    history.push("/auth");
    toast.success("User logged out");
  };

  return (
    <React.Fragment>
      {user ? (
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">
              <div className="d-flex align-items-center">
                <i className="fas fa-book fa-2x"></i>
                <span className="h4 pl-2" style={{ paddingRight: "770px" }}>
                  NOTES Manager
                </span> 
                <a href="/edit-note">Edit Notes</a> &nbsp;
                <button className="btn btn-outline-primary" onClick={logout}>
                  Logout | <i className="fa fa-sign-out" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">
              <div className="d-flex align-items-center">
                <i className="fas fa-book fa-2x"></i>
                <span className="h4 pl-2" style={{ paddingRight: "770px" }}>
                  NOTES Manager
                </span>
                <a href={user ? "/notes" : "/auth"}>Notes</a>
                &nbsp;
                <a href={user ? "edit-note" : "/auth"}>Edit Notes</a>
                &nbsp;
                <a href="/auth">Auth Page</a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};
export default Header;
