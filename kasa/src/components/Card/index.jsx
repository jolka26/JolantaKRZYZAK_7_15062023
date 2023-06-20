import '../Card/index.css'
import { Link } from 'react-router-dom'

function Card ({title, cover, id }) {


    return (
        <div className="card">
      
        <Link className="link-appartment" to={`/apartment/${id}`}>
        <img className="card-image" src={ cover } alt="" />
            <h2 className="card-title">{ title }</h2>
        </Link>
       
        </div>
    )
}

export default Card