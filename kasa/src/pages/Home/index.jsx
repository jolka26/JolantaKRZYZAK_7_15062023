import Banner from "../../components/Banner";
import homeBanner from '../../assets/IMG.png'
import Gallery from "../../components/Gallery";



function Home() {

    return (
      <main>
        <Banner image={ homeBanner } text={"Chez vous, partout et ailleurs"}/>
        <div>
          <Gallery />
        </div>
      </main>

    )
}

export default Home
