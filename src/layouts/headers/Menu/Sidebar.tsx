import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link to="/"><img src="/assets/img/logo/NFT.png" alt="Logo" /></Link>
                    </div>
                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive} />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar