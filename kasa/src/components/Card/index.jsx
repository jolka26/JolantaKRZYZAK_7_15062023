import './index.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Card ({title, cover, id }) {

    
        const navigate = useNavigate();
        const handleClick = () => navigate(`/apartment/${id}`);
      

    return (
        <div className="card">
            <img onClick={handleClick} src={ cover } alt="" className="card-image" />
                <div className="card-overlay">
                    <button onClick={handleClick} className="card-title"> 
                        <h3>{ title }</h3>
                    </button>
                 </div>
        </div>
      


    )
}

export default Card

