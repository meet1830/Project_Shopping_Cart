import React from 'react'
import { Link } from 'react-scroll';
import { CartState } from "../Context";

const NavbarTop = () => {
    const { categories, categoriesId, categoriesIcons } = CartState();

    return (
        <div id='navbar-top-container'>
            {categories.map((item, index) => (
                <p>
                    <Link className='nav-top-link' activeClass="active-top" smooth spy offset={-225} to={categoriesId[index]}>
                        <center><i className={"fa-solid " + categoriesIcons[index]}></i></center>
                        {item}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export default NavbarTop