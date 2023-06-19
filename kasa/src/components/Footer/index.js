import { Link } from 'react-router-dom'
import logoFooter from '../../assets/LOGO_footer.png'
import '../Footer/index.css'


function Footer() {
   
    return (
      <footer>
        <Link to="/">
            <img src={logoFooter} alt="logo_Kasa" />
        </Link>
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
export default Footer