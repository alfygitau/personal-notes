import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../redux/actions/actions";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerInitiate(
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation
      )
    );
    toast.success("Account registration successful");
  };

  return (
    <React.Fragment>
      <h2>New User ? Create an Account</h2>
      <br />

      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            noValidate
            id="firstname"
            type="firstname"
            name="firstname"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            noValidate
            id="lastname"
            type="lastname"
            name="lastname"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            noValidate
            id="username"
            type="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Email Address</label>
          <input
            noValidate
            id="email1"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            noValidate
            id="passsword1"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword1">Confirm Password</label>
          <input
            noValidate
            id="confirmpasssword1"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={password_confirmation}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mr-4">
          Register | <i className="fas fa-user-plus"></i>
        </button>
        <button className="btn btn-outline-secondary">
          Cancel | <i className="fas fa-times"></i>
        </button>
      </form>
    </React.Fragment>
  );
};
export default RegisterForm;
