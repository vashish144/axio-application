import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: " ",
    username: " ",
    email: " ",
    phone: " ",
    website: " ",
  });
  const changHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const resetHandler = () => {
    setUser({
      name: " ",
      username: " ",
      email: " ",
      phone: " ",
      website: " ",
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3003/users", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/");
  };
  console.log(user);
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={changHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={changHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={changHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={changHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
              onChange={changHandler}
            />
          </div>
          <button className="btn btn-primary btn-block mb-4">Add User</button>
          <button
            className="btn btn-dark btn-block mb-4"
            onClick={resetHandler}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
