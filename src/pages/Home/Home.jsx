import home_banner from '../../assets/home-banner.png'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'
import Header from '../../components/Header/Header'
import './Home.css'

function Home() {
  return (
    <>
      <Banner image={home_banner} textContent={'Chez vous, partout et ailleurs'}/>
      <Gallery />
    </>
  )
}

export default Home
