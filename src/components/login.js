import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      console.log(user)
      history.push("/notes");
    }
  }, [user, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
  };


  return (
    <React.Fragment>
      <h2>Have an Account ?</h2>
      <h4>Login Here</h4>
      <br />

      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            noValidate
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            noValidate
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary mr-4">
          Login | <i className="fas fa-sign-in-alt"></i>
        </button>
        <button className="btn btn-outline-secondary">
          Cancel | <i className="fas fa-times"></i>
        </button>
      </form>
    </React.Fragment>
  );
};
export default LoginForm;
