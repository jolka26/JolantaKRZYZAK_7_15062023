import '../Host/index.css'

function Host({host}) {

    return(
        <div className="host-profil">
            <p className="host-name">{host.name }  </p>
            <img src={host.picture} alt= "profil" className="host-image" /> 
        </div>
    )

}

export default Host