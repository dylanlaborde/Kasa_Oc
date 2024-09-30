import useFetchData from './useFetchData'

function useDataById(id) {
    const datas = useFetchData()
    const filtered = datas.find((data) => data.id === id)
    
    return filtered || null;
}

export default useDataById