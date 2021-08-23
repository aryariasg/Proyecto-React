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
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Our products</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
        </div>
        
        <CartWidget />

        </>
    );
}
 
export default Navbar;