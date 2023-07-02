import { useState } from 'react'
import '../Slider/index.css'
import leftArrow from '../../assets/arrow_back.png'
import rightArrow from '../../assets/arrow_forward.png'


function Slider ({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
      };

      const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
      };


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            {slides.map((image, index ) => {
                return(
                    <div key= {index} className={index === current ? "slider-active" : "slider"}>
                        {index === current && ( <img src= {image} alt="apparment-img" className="slide-image"/>)}
                        {index === current && length > 1 && ( <span className="number">{current + 1}/{length}</span>)}
                    </div>
                )
            })}
            <div className="previous"> 
                {length > 1 && (<p onClick={prevImage}>
                    <img src={leftArrow} alt="" className="left-arrow" /></p>)}
            </div>
            <div className="next">    
                {length > 1 && (<p onClick={nextImage}>
                    <img src={rightArrow} alt="" className="right-arrow"/></p>)}
            </div>
        </section>
    )
}
 
export default Slider

