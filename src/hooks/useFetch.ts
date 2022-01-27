import axios from 'axios'
import {useState, useEffect} from "react";

interface FetchData<T> {
  data: T | null;
}

const http = axios.create({
    baseURL : "http://localhost:3000/data/",
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
    }
})

function useFetch<dataType>(props:object): FetchData<dataType> {
    const [response, setResponse] = useState<FetchData<dataType>>({
      data: null
    })

    useEffect(() => {
        http(props).then(res => setResponse(res))
    }, [])

    return response
}

export default useFetch