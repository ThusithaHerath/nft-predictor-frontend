/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const MobileMenus = ({ setIsActive }: any) => {

    const [navTitle, setNavTitle] = useState("");

    const closeSidebar = () => {
        setIsActive(false);
    };

    const [navClick, setNavClick] = useState<any>();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navClick]);

    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navigation">
            <li className="menu-item-has-children">
                <Link onClick={() => setNavClick(!navClick)} to="#" className="section-link"> Home</Link>
                <div className={`dropdown-btn ${navTitle === "Home" ? "open" : ""}`}
                    onClick={() => openMobileMenu("Home")} >
                    <i className={`${navTitle === "Home" ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                </div>
                <ul className="sub-menu" style={{ display: navTitle === "Home" ? "block" : "none" }}>
                    <li onClick={closeSidebar}><Link onClick={() => setNavClick(!navClick)} to="/"> ICO Investment</Link></li>
                    <li onClick={closeSidebar}><Link onClick={() => setNavClick(!navClick)} to="/home-two"> Blockchain</Link></li>
                </ul>
            </li>
            <li onClick={closeSidebar}>
                <HashLink onClick={() => setNavClick(!navClick)} to="/#featureone" className="section-link">Feature </HashLink>
            </li>
            <li onClick={closeSidebar}>
                <HashLink onClick={() => setNavClick(!navClick)} to="/#roadMap" className="section-link">RoadMap </HashLink>
            </li>
            <li className="menu-item-has-children">
                <Link onClick={() => setNavClick(!navClick)} to="#" className="section-link">Blog</Link>
                <div className={`dropdown-btn ${navTitle === "Blog" ? "open" : ""}`}
                    onClick={() => openMobileMenu("Blog")} >
                    <i className={`${navTitle === "Blog" ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                </div>
                <ul className="sub-menu" style={{ display: navTitle === "Blog" ? "block" : "none" }}>
                    <li onClick={closeSidebar}><Link onClick={() => setNavClick(!navClick)} to="/blog">Blog</Link></li>
                    <li onClick={closeSidebar}><Link onClick={() => setNavClick(!navClick)} to="/blog-details">Blog Details</Link></li>
                </ul>
            </li>
            <li onClick={closeSidebar}>
                <Link onClick={() => setNavClick(!navClick)} to="/contact" className="section-link">Contact</Link>
            </li>
        </ul>
    );
}

export default MobileMenus;
