import '../Card/index.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Card ({title, cover, id }) {

    
        const navigate = useNavigate();
        const handleClick = () => navigate(`/apartment/${id}`);
      

    return (
        <div className="card">
    
            <img src={ cover } alt="" className="card-image" />
            <div className="card-overlay">
            <button onClick={handleClick} className="card-title"> 
            <h3>{ title }</h3>
            </button>
            </div>
       
      
        {/* <Link className="link-appartment" to={`/apartment/${id}`}>
        <img className="card-image" src={ cover } alt="" />
            <h2 className="card-title">{ title }</h2>
        </Link> */}
       
        </div>
      


    )
}

export default Card

