/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';

const NavMenu = () => {

  const [navClick, setNavClick] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navClick]);

  return (
    <ul className="navigation">
      <li className="menu-item-has-children">
        <Link onClick={() => setNavClick(!navClick)} to="#" className="section-link"> Home</Link>
        <ul className="sub-menu">
          <li><Link onClick={() => setNavClick(!navClick)} to="/"> ICO Investment</Link></li>
          <li><Link onClick={() => setNavClick(!navClick)} to="/home-two"> Blockchain</Link></li>
        </ul>
      </li>
      {/* <li><HashLink to="/#featureone" className="section-link">Feature</HashLink></li> */}
      <li><HashLink to="/#roadMap" className="section-link">RoadMap</HashLink></li>
      <li><Link onClick={() => setNavClick(!navClick)} to="#" className="section-link"> Blog</Link>
        <ul className="sub-menu">
          <li><Link onClick={() => setNavClick(!navClick)} to="/blog"> Blog</Link></li>
          <li><Link onClick={() => setNavClick(!navClick)} to="/blog-details"> Blog Details</Link></li>
        </ul>
      </li>
      {/* <li><Link onClick={() => setNavClick(!navClick)} to="/contact" className="section-link"> Contact</Link></li> */}
    </ul>
  );
};


export default NavMenu;