import axios from 'axios'
import {useState, useEffect} from "react";

function useFetch(props) {
    const [response, setResponse] = useState({
        data : null
    })

    useEffect(() => {
        axios(props.src).then(res => setResponse(res))
    }, [])

    return response
}

export default useFetch