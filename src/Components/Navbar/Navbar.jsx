import './Navbar.css'
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    return (
        <div className='navbar flex justify-around p-4 shadow-sm'>
            <div className="nav-logo flex items-center gap-3">
                <img src={logo} alt="logo" />
                <p className=''>SHOP-E</p>
            </div>
            <ul className="nav-menu flex items-center gap-12 text-[#626262] font-medium justify-center">
                <li onClick={()=>{setMenu("shop")}} className='flex items-center justify-center gap-1 cursor-pointer flex-col'>
                    <Link to="/">Shop
                    {menu === "shop" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141]' /> : <></>}</Link>
                </li>
                <li onClick={()=>{setMenu("men")}} className='flex items-center justify-center gap-1 cursor-pointer flex-col'>
                    <Link to="/mens">
                    Men
                    {menu === "men" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141]' /> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("women")}} className='flex items-center justify-center gap-1 cursor-pointer flex-col'>
                    <Link to="/womens">
                    Women
                    {menu === "women" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141]' /> : <></>}
                    </Link>
                </li>
                <li onClick={()=>{setMenu("kids")}} className='flex items-center justify-center gap-1 cursor-pointer flex-col'>
                    <Link to="/kids">
                    Kids
                    {menu === "kids" ? <hr className='border-none w-[80%] h-1 rounded-xl bg-[#FF4141]' /> : <></>}
                    </Link>
                </li>
            </ul>
            <div className="nav-login-cart flex items-center justify-center gap-11">
                <Link to="/login">
                <button className='w-[157px] h-[58px] border border-[#7a7a7a] rounded-[75px] text-xl font-medium bg-white text-[#515151] active:bg-[#f3f3f3]'>
                    Log in
                </button>
                </Link>
                
                <Link to="/cart">
                <img src={cartIcon} alt="icon" />
                
                </Link>
                <div className='w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[55px] rounded-[11px] text-sm bg-red-600 text-white'>
                    0
                </div>
            </div>
        </div>
    );
};

export default Navbar;