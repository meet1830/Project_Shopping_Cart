import React from 'react'
import { Link } from 'react-scroll';
import { CartState } from "../Context";

const NavbarSide = () => {
    const { categories, categoriesId } = CartState();

    return (
        <div id='sidebar-categories'>
            {categories.map((item, index) => (
                <p>
                    <Link activeClass="active" smooth spy offset={-97} to={categoriesId[index]}>{item}</Link>
                </p>
            ))}
        </div >
    )
}

export default NavbarSide