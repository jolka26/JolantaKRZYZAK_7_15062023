import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import '../Header/index.css'
 
function Header() {
    return (
        <header>
            <Link to="/"> 
                <img className="logo" src={logo} alt="Logo_KASA" />
            </Link>
            <nav>
                <Link className="link-home" to="/">Accueil</Link>
                <Link className="link-about" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header