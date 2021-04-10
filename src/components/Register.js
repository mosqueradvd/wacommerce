import React, { useState } from "react";
// import firebase from '../firebase'

import firebase from 'firebase'
require('firebase/auth')
const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault() && false}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label htmlFor="name">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          id="name"
          name="name"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label  htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" onClick={onRegister}>
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );

  async function onRegister() {
    try {
        await firebase.register(name, email, password)
        props.history.replace('/')
    } catch(error) {
        alert(error.message)
    }
}
};

export default Register;
