import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import NavMenuTwo from "./Menu/NavMenuTwo";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [offCanvas, setOffCanvas] = useState<boolean>(false);

    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link to="/"><img src="assets/img/logo/logo1.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenuTwo />
                                        </div>
                                        {/* <div className="header-action">
                                            <ul className="list-wrap">
                                                <li className="header-login"><Link className="btn2" to="/login">LOGIN</Link></li>
                                            </ul>
                                        </div> */}
                                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
        </>
    );
}

export default HeaderTwo;
