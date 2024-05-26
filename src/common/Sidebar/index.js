import {Component} from "react";
import {Link} from "react-router-dom";

class Sidebar extends Component{
    render() {
      return (
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                  <div className="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                  </div>
                  <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
              </a>

              <hr className="sidebar-divider my-0"/>

              <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Anasayfa</span></Link>
              </li>

              <li className="nav-item">
                  <Link className="nav-link" to={"/users"}>
                      <i className="fas fa-fw fa-users"></i>
                      <span>Kullanıcılar</span></Link>
              </li>

          </ul>
      )
    }
}

export default Sidebar;
