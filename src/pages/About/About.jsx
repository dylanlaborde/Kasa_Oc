import React from 'react'
import about_banner from '../../assets/about-banner.png'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './About.css'
import Dropdown from '../../components/Dropdown/Dropdown'

function About() {
  const aboutList = [
    {
    title: 'Fiabilité',
    content:
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
    title: 'Respect',
    content:
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
    title: 'Service',
    content:
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
    title: 'Sécurité',
    content:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
    ];


  return (
    <>
      <Header />
      <Banner image={about_banner} />
      <div className="dropdownWrapper">
      {aboutList.map
        (
          (about, i) =>
          (
            <Dropdown key={i} title={about.title} content={about.content} / >
            )
        )
        }
        </div>
      <Footer />
  </>
  )
}

export default About