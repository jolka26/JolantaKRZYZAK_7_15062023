import { useState } from "react";
import '../Collapse/index.css'


function Collapse ({title, content}){

    const [isOpen, setIsOpen] = useState(false);
    const display = () => {
        setIsOpen(!isOpen)
    }

    return (     
 
    <div className="collapse">
            <div onClick={display} className="collapse-button">
                <h2 className="collapse-title">{title}</h2>
            </div>
            <div className="collapse-text" >
                {isOpen && <p>{content}</p>}
            </div>
    </div>


    )



}

export default Collapse;