import '../Banner/index.css'

 
function Banner({image, text}) {
     

    return (
        <div className="banner">
        <img className="banner-image" src={ image } alt="banner" />
        <span className="banner-text">{ text }</span> 
        </div>
    )
}

export default Banner