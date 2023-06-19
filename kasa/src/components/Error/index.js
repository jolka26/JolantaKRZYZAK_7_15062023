import { Link } from 'react-router-dom'
import picture from '../../assets/404.png'
import '../Error/index.css'


function Error() {
    return (
        <div className="error">
        <img className="error-image" src={picture} alt="404 page n'existe pas " />
            <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="error-link" to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error