import {Link} from 'react-router-dom'

import CartWidget from './CartWidget'

const Navbar = () => {
    return (  
        <>
        <div className = 'navBar' >
            <div className = 'logo'>
            <img src='./image/icecream2.png' alt='' />
            </div>
        <div className = 'lista'>
            <ul>
                <li>
                <Link to="/"><a href="">Home</a></Link>
                </li>
                <li>
                <Link to="/About"><a href="">About us</a></Link>
                </li>
                <li>
                <Link to="/productos"><a href="">Our Products</a></Link>
                </li>
                <li>
                <Link to="/Contact"><a href="">Contact</a></Link>
                </li>
            </ul>
        </div>
        </div>
        
        <CartWidget />

        </>
    );
}
 
export default Navbar;