import { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User"

export type dataObject = {
    firstName: string,
    lastName: string,
    pesel: string,
    birthday: string,
}

type paramsObject = {
    count: number,
    year: number
}

export default function Home() {
    const baseUrl = process.env.REACT_APP_API_URL
    const [data, setData] = useState<dataObject[]>([])
    const [error, setError] = useState(null)
    const [params, setParams] = useState<paramsObject>({
        count: 3,
        year: 2003
    })
    const {count, year} = params
    
    const url = `${baseUrl}/api/users/single-year?count=${count}&year=${year}`
    
    const getUsers = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const response = await axios.get(url)
        response.data?.error ? setError(response.data.error) : setData(response.data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="h-min px-5 flex flex-col justify-center items-center">
            <form className="form-control mb-10">
                <label className="label">
                    <span>Count of users:</span>
                    <input 
                        type="number" 
                        className="input input-bordered input-primary ml-3"
                        id="count"
                        value={count}
                        onChange={handleChange}
                    />
                </label>
                <label className="label">
                    <span>Year of birth:</span>
                    <input 
                        type="number" 
                        className="input input-bordered input-primary ml-3"
                        id="year"
                        value={year}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={(e) => getUsers(e)} className="btn btn-primary">Get</button>
            </form>

            <div className="grid px-10 grid-cols-4 w-full">
                {data.length > 0 && data.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
        </div>
    )
}
