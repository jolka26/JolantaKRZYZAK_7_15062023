import  logements  from '../../data/logement.json'
import Card from '../Card'
import '../Gallery/index.css'

function Gallery () {
return (


  <section className="gallery">
    {logements.map((logement) => {
      return ( 
        <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />
    )})}
</section> 
)

}

export default Gallery 