import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify'

type dataObject = {
    firstName: string,
    lastName: string,
    pesel: string,
    birthday: string,
}

export default function useFetch(url : string) {
    const [data, setData] = useState<dataObject[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getUsers = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setData([])
        setLoading(true)

        try {
            const response = await axios.get(url)
            if(response.data?.message) {
                toast.error(response.data.message, {
                    className: 'w-max'
                })
                setLoading(false)
            } else {
                setData(response.data)
                setLoading(false)
            }
        } catch (err) {
            toast.error('Could not fetch data', {
                className: 'w-max'
            })
            setLoading(false)
        }

        
    }

    return {data, loading, getUsers}
}
