import React from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'
import useFetchData from '../../data/useFetchData'
import './LogementWrapper.css'

function LogementWrapper() {
  const { id } = useParams();
  const datas = useFetchData();
  let currentData = datas.find(data =>
    data.id === id
  )
  const pictures = currentData.pictures
  const pictureLenght = currentData.pictures.length;
  console.log(currentData);
  console.log(pictureLenght);



  return (
      <div className='logement_wrapper'>
        <Carrousel pictures={pictures} pictureLenght={pictureLenght} />
      </div>
  )
}

export default LogementWrapper

//recuperer id pour identifier
//recuper les image pour le carrousel avec l'id
//les passer en parametre au carrousel
//les afficher dans le carrousel