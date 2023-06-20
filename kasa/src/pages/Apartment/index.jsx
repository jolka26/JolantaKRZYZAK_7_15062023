import '../Apartment/index.css'

function Apartment(){
  
return (

 <div className="apartment">
   <img className="apartment-images" src="" alt="" />

    <div className="apartment-content">
      <div className="apartment-informations">
        <h1 className="apartment-title">title</h1>
        <p className="apartment-location">location</p>
        <p className="apartment-tags"> tags</p>
        <p className="apartment-profil">profil</p>
        <p className="apartment-stars"> stars</p>
      </div>
    </div>

    <div className="apartment-dropdown">
      <p>description</p> 
      <p>equipments</p>
    </div>
 </div>

);

}

export default Apartment
