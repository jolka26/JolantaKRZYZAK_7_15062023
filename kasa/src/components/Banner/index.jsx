import banner from '../../assets/IMG.png'
import '../Banner/index.css'



 
function Banner() {
    

    return (
        <div className="banner">
        <img className="banner-image" src={ banner } alt="banner home page" />
            <h1 className="banner-text"> Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner