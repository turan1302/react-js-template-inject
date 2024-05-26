import {Component} from "react";

class Footer extends Component{

    handleScroll = ()=>{
        window.scrollTo(0,0);
    }
    render() {
        return (
            <>
                <a className="scroll-to-top rounded" onClick={this.handleScroll}>
                    <i className="fas fa-angle-up"></i>
                </a>

                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;
