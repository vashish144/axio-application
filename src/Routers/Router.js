import React from "react";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import About from "../components/Pages/About";
import Contact from "../components/Pages/Contact";
import Home from "../components/Pages/Home";
import Navbar from "../layout/Navbar";
import NotFound from "../components/Pages/NotFound";
import AddUser from "../components/Pages/users/AddUser";
import EditUser from "../components/Pages/users/EditUser";
import ViewUser from "../components/Pages/users/ViewUser";
function Router() {
  return (
    <Routers>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users/add" component={AddUser} />
        <Route path="/users/edit/:id" component={EditUser} />
        <Route path="/user/view/:id" component={ViewUser} />
        <Route component={NotFound} />
      </Switch>
    </Routers>
  );
}

export default Router;
