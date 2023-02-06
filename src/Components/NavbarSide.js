import React from 'react'
import { Link } from 'react-scroll';
import { CartState } from "../Context";

const NavbarSide = () => {
    const { categories, categoriesId } = CartState();

    // onload highlight func
    // useEffect(() => {
    //     const index = categoriesId[0];
    //     document.getElementById(index).classList.add('active');
    // })

    // const selectCategory = (e) => {
    //     e.target.parentElement.classList.add('active');
    //     const currSelectedId = e.target.parentElement.id;

    //     for (let i = 0; i < categoriesId.length; i++) {
    //         const currId = categoriesId[i];
    //         if (currSelectedId !== currId)
    //             document.getElementById(currId).classList.remove('active');
    //     }
    // }

    return (
        <div id='sidebar-categories'>
            {categories.map((item, index) => (
                // <p id={categoriesId[index]} key={item + index}>
                //     <a onClick={selectCategory} href={'#' + categoriesId[index]}>{item}</a>
                // </p>
                <p>
                    <Link activeClass="active" smooth spy offset={-97} to={categoriesId[index]}>{item}</Link>
                </p>
            ))}
        </div >
    )
}

export default NavbarSide