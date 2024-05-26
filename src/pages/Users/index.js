import {Component} from "react";
import Sidebar from "../../common/Sidebar";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

class Users extends Component {
    render() {
        return (
            <div id="wrapper">

                <Sidebar/>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <Navbar/>

                        <div className="container-fluid">

                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Kullanıcılar</h1>
                            </div>


                        </div>
                    </div>

                    <Footer/>

                </div>

            </div>
        )
    }
}

export default Users;
