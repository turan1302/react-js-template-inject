import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";

class AppRouter extends Component{
    render() {
      return (
          <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route path={"/users"} element={<Users/>}></Route>
          </Routes>
      )
    }
}

export default AppRouter;
