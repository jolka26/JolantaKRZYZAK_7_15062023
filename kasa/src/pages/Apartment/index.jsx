import '../Apartment/index.css'
import  logements  from '../../data/logement.json'
import { useParams } from 'react-router-dom';

function Apartment(){
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id );
  console.log(logement.title)
return (
<main className="apartment">
 <div className="apartment-carusele">
   <img className="apartment-images" src={logement.pictures[1]} alt="" />
  <div/>
    <div className="apartment-content">
      <div className="apartment-informations">
        <h1 className="apartment-title">{logement.title}</h1>
        <p className="apartment-location">{logement.location}</p>
        <p className="apartment-tags"> {logement.tags}</p>
        <div className="apartment-profil">
          <p>{logement.host.name }  </p>
          <img src={logement.host.picture} alt= "profil" /> 
        </div>
        <p className="apartment-stars"> {logement.rating}</p>
      </div>
    </div>

    <div className="apartment-dropdown">
      <p>{logement.description}</p> 
      <p>{logement.equipments}</p>
    </div>
 </div>
</main>
);

}

export default Apartment
