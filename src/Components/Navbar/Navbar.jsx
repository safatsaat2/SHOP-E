import './Navbar.css'
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"

const Navbar = () => {
    return (
        <div className='navbar flex justify-around p-4 shadow-sm'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOP-E</p>
            </div>
            <ul className="nav-menu">
                <li>
                    Shop
                </li>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    Kids
                </li>
            </ul>
            <div className="nav-login-cart">
                <button>
                    Log in
                </button>
                <img src={cartIcon} alt="icon" />
            </div>
        </div>
    );
};

export default Navbar;