import { useEffect, useState } from 'react'
import logement from './logements.json'

function useFetchData() {
    const [datas, setDatas] = useState(logement);
    return datas;
}

export default useFetchData