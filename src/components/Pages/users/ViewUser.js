import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: " ",
    username: " ",
    email: " ",
    phone: " ",
    website: " ",
  });
  const loadUser = async () => {
    await axios
      .get(`http://localhost:3003/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View A User</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
            />
          </div>
          <Link className="btn btn-primary btn-block mb-4" to="/">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ViewUser;
