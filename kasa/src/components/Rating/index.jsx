import '../Rating/index.css'
import activeStar from '../../assets/star-active.png'
import inactiveStar from '../../assets/star-inactive.png'

function Rating({rate}) {

    const stars = [1, 2, 3, 4, 5]

    return(
        <div className="stars">
            { stars.map((star) =>
            rate >= star ? (
                <img key={star.C} className="star-icone" src={activeStar} alt="star" />
            ) : (
                <img key={star.toString()} className="star-icone" src={inactiveStar} alt="star" />
            )
            )}
        </div>
    )

}

export default Rating