import '../Apartment/index.css'
import  logements  from '../../data/logement.json'
import Slider from '../../components/Slider'
import Tags from '../../components/Tag'
import Host from '../../components/Host'
import Collapse from '../../components/Collapse'
import { useParams} from 'react-router-dom';

function Apartment(){
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id );
  console.log(logement)
  console.log(logement.pictures)

return (
<main className="apartment">
 <Slider slides={logement.pictures} />
  <div/>
    <div className="apartment-content">
      <div className="apartment-informations">
        <h1 className="apartment-title">{logement.title}</h1>
        <p className="apartment-location">{logement.location}</p>
        <div className="apartment-tags"> 
        {logement.tags.map((tag,index) => (
          <Tags key={index} tagName={tag} />
        ))}
        </div>
        <div className="apartment-profil">
         <Host host={logement.host}/>
         <p className="apartment-stars"> {logement.rating}</p>
        </div>
        
      </div>
    </div>

    <div className="apartment-dropdown">
      <Collapse title="Description" content={logement.description}/> 
      <Collapse title="Équipements" content={logement.equipments}/>
    </div>

</main>
)
}
export default Apartment
