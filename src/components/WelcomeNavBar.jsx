import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//font awesome icons
import { faCompass,faUserGroup,faBook,faBagShopping } from "@fortawesome/free-solid-svg-icons";

class WelcomeNavBar extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="border pe-3 ps-3">
                            <div className="row">
                                <div className="col-4">
                                    <div className="p-2">
                                        <img src={logo} alt="logo" width={155} height={55}  />
                                    </div>
                                </div>
                                <div className="col-8 d-flex justify-content-end align-items-center">
                                    <ul className="border-right navbar-nav d-flex flex-row">
                                        <li className="nav-item"><Link className="nav-link d-flex flex-column" to=""><FontAwesomeIcon icon={faCompass} />Discover</Link></li>
                                        <li className="nav-item ms-3"><Link className="nav-link d-flex flex-column" to=""><FontAwesomeIcon icon={faUserGroup} />People</Link></li>
                                        <li className="nav-item ms-3"><Link className="nav-link d-flex flex-column" to=""><FontAwesomeIcon icon={faBook} /> Learning</Link></li>
                                        <li className="nav-item ms-3"><Link className="nav-link d-flex flex-column" to=""><FontAwesomeIcon icon={faBagShopping} /> Jobs</Link></li>
                                    </ul>
                                    <div className="two-btns ms-3">
                                        <Link to="">Join now</Link>
                                        <Link to="" className="ms-2">Sign in</Link>
                                    </div>   
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeNavBar;