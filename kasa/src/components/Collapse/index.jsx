import { useState } from "react";
import '../Collapse/index.css'
import up from '../../assets/Vector_up.png'
import down from '../../assets/Vector_down.png'

function Collapse ({title, content}){

    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen)
    }

    return (     
 
    <div className="collapse">
            <div   className="collapse-button">
                <h2 className="collapse-title">{title}</h2>
                <p onClick={display}>       
                 {isOpen ? (<img src={up} alt="fleche-up" className="fleche-up"/>) : (<img src={down} alt="fleche-down" className="fleche-down"/>)}
                 </p>
            </div>
            <div className="collapse-text" >
                {isOpen && <p> {content} </p>}
            </div>
    </div>


    )



}

export default Collapse;

