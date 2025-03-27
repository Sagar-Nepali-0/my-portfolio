import '../styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div className="nav-bar">
            <Link className='link-home' to="/">Home</Link>
            <Link className='link-about' to="/about">About</Link>
            <Link className='link-projects' to="/projects">Projects</Link>
            <Link className='link-contact' to="/contact">Contact</Link>
        </div>
    );
}

export default Nav;