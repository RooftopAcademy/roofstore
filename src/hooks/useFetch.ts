import axios from 'axios'
import {useState, useEffect} from "react";

const http = axios.create({
    baseURL : "http://localhost:3000/data/",
    headers : {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
    }
})

function useFetch<dataType>(props) {
    const [response, setResponse] = useState({
        data : null
    })

    useEffect(() => {
        http(props).then(res => setResponse(res))
    }, [])

    return response
}

export default useFetch