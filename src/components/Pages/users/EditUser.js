import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
function EditUser() {
  let history = useHistory();
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
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3003/users/${id}`, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/");
  };

  const changHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //   console.log(user);
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={updateUser}>
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
          <button className="btn btn-primary btn-block mb-4">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
