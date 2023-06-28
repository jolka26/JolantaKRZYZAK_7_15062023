import { useState } from "react";
import '../Collapse/index.css'
import up from '../../assets/Vector_up.png'
import down from '../../assets/Vector_down.png'

function Collapse ({title, content}){

    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen)
    }
    const liste = () => {
        if (Array.isArray(content)) {
        return (
            <div className="colapse-text">
            {content.map((item, index) => 
            <p key={index} className="collapse-list">{item}</p>)}
            </div>
        )}
        return(
            <div className="colapse-text">
            <p>{content}</p>
            </div>
        )
    }

  
    return (     
 
    <div className="collapse">
            <div  onClick={display} className="collapse-button">
                <h2 className="collapse-title">{title}</h2>
                <p >       
                 {isOpen ? (<img src={up} alt="fleche-up" className="fleche-up"/>) : (<img src={down} alt="fleche-down" className="fleche-down"/>)}
                 </p>
            </div>
            <div className="collapse-text" >
                {isOpen && liste() }

            </div>
    </div>


    )
}

export default Collapse;

