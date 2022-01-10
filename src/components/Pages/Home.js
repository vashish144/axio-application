import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);
  const loadUser = () => {
    axios
      .get("http://localhost:3003/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={data.id}>
                <th scope="col">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>
                  <Link
                    className="btn btn-primary "
                    exact
                    to={`/user/view/${data.id}`}
                  >
                    view
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    exact
                    to={`/users/edit/${data.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
