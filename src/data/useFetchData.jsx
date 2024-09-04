import { useEffect, useState } from 'react'

function useFetchData() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('./logement.json')
            .then(response => response.json())
            .then(data => setDatas(data))
    }, []);

    return datas;
}

export default useFetchData