import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/apropos">A Propos</Link>
        </nav>
    )
}

export default Header