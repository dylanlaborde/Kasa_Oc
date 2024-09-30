import React, { useEffect, useState } from 'react';
import { Navigate, redirect, useNavigate, useParams } from 'react-router-dom';
import LogementWrapper from '../../components/LogementWrapper/LogementWrapper';
import useDataById from '../../Service/useDataById'
import useFetchData from '../../Service/useFetchData';
import logements from '../../data/logements.json'
import './Logement.css';

function Logement() {
  const { id } = useParams();
  const [currentData, setcurrentData] = useState();
  const datas = logements
  const dataById = datas.find((data) => data.id === id)
  const navigate = useNavigate();
  useEffect(() => {
    dataById ? setcurrentData(dataById) : null;
  }, [dataById]);
  
  if (!dataById) {
    useEffect(() => {
      return navigate('/404')
     }, []);
 }
  if (currentData) {
    return (
      <>
         <LogementWrapper data={currentData} />
      </>
    )
  } 
  
}

export default Logement