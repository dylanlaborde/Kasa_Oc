import { useEffect, useState } from 'react'
import logements from '../data/logements.json'

function useFetchData() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const url = logements;
       
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("une erreur est survenue l'ors de la recuperation des donnée")
                }
                const data = await response.json()
                setDatas(data);
            } catch (error) {
                setDatas([]);
            }
        }
        fetchData();
    }, []);
    return datas;
}

export default useFetchData