import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../assets/family-tree-logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    const handleLinkClick = () => {
    toggleMenu()  // closes the dropdown after a link is clicked
  }


    return (
        <header>
            <div className="logo-container">
                <img 
                    src={logo} 
                    alt="Shopping list logo" 
                    className="logo"
                />
            </div>
            <div className="menu">
                <FontAwesomeIcon
                icon={faBars}
                onClick={toggleMenu}
                className="menu-icon"
                />

                {isOpen && (
                    <ul className="dropdown">
                        <li>
                            <Link to="/" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li>
                            <Link to="/aldi" onClick={handleLinkClick}>Aldi</Link>
                        </li>
                        <li>
                            <Link to="/costco" onClick={handleLinkClick}>Costco</Link>
                        </li>
                        <li>
                            <Link to="/hardware" onClick={handleLinkClick}>Hardware</Link>
                        </li>
                         <li>
                            <Link to="/target" onClick={handleLinkClick}>Target</Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}