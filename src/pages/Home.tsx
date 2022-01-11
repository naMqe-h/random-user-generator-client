import React, { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User"
import { toast } from 'react-toastify'

export type dataObject = {
    firstName: string,
    lastName: string,
    pesel: string,
    birthday: string,
}

type paramsObject = {
    count: number,
    year: number,
    since: number,
    until: number
}

export default function Home() {
    const baseUrl = process.env.REACT_APP_API_URL
    const [data, setData] = useState<dataObject[]>([])
    const [error, setError] = useState(null)
    const [single, setSingle] = useState<boolean>(false)
    const [params, setParams] = useState<paramsObject>({
        count: 3,
        year: 2003,
        since: 1970,
        until: 2010
    })
    const {count, year, since, until} = params
    
    const url = {
        normal: `${baseUrl}/api/users?count=${count}&since=${since}&until=${until}`,
        single: `${baseUrl}/api/users/single-year?count=${count}&year=${year}`
    }
    
    
    const getUsers = async (e : React.MouseEvent<HTMLButtonElement>) => {
        setError(null)
        setData([])
        e.preventDefault()
        const response = await axios.get(single ? url.single : url.normal)
        if(response.data?.error) {
            setError(response.data.error)
            toast.error(response.data.error, {
                className: 'w-max'
            })
        } else {
            setData(response.data)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    
    const handleSingle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSingle(e.target.checked);
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
                    <span>Single Year</span>
                    <input 
                        type="checkbox" 
                        className="checkbox checkbox-primary"
                        checked={single}
                        onChange={handleSingle}
                    />
                </label>
                {single ? (
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
                ) : (
                    <div>
                        <label className="label">
                            <span>Since year:</span>
                            <input 
                                type="number" 
                                className="input input-bordered input-primary ml-3"
                                id="since"
                                value={since}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="label">
                            <span>Until year:</span>
                            <input 
                                type="number" 
                                className="input input-bordered input-primary ml-3"
                                id="until"
                                value={until}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                )}

                
                
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
