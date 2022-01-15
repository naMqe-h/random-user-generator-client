import { useEffect, useState } from "react"
import User from "../components/User"
import useFetch from "../hooks/useFetch"

type paramsObject = {
    count: number,
    year: number,
    since: number,
    until: number,
}

export default function Home() {
    const baseUrl = process.env.REACT_APP_API_URL
    const [single, setSingle] = useState<boolean>(false)
    const [url, setUrl] = useState<string>('')
    const [params, setParams] = useState<paramsObject>({
        count: 3,
        year: 2003,
        since: 1970,
        until: 2010
    })
    const {data, loading, getUsers} = useFetch(url)
    const {count, year, since, until} = params

    const endPoints = {
        singleYear: `${baseUrl}api/users/single-year?count=${count}&year=${year}`,
        differentYears: `${baseUrl}api/users?count=${count}&since=${since}&until=${until}`
    }

    useEffect(() => {
        single ? (
            setUrl(endPoints.singleYear)
        ) : (
            setUrl(endPoints.differentYears)
        )
    }, [endPoints.singleYear, endPoints.differentYears, baseUrl, single])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    
    const handleSingle = (e: React.ChangeEvent<HTMLInputElement>) => setSingle(e.target.checked);

    return (
        <div className="px-5 h-full flex flex-col items-center justify-around overflow-y-hidden
            lg:flex-row lg:items-start
            sm:flex-col 
        ">
            <form className="form-control mb-10 text-xl
                2xl:text-lg
                xl:text-xl
                lg:text-2xl
                sm:text-3xl
            ">
                <label className="label lg:flex lg:flex-col xl:flex-row">
                    <span>Count:</span>
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
                    <label className="label lg:flex lg:flex-col xl:flex-row">
                        <span>Year:</span>
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
                        <label className="label lg:flex lg:flex-col xl:flex-row">
                            <span>Since:</span>
                            <input 
                                type="number" 
                                className="input input-bordered input-primary ml-3"
                                id="since"
                                value={since}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="label lg:flex lg:flex-col xl:flex-row">
                            <span>Until:</span>
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

                
                
                <button onClick={(e) => getUsers(e)} className={`btn btn-primary ${loading ? 'loading' : ""} `}>
                    {loading ? 'Loading' : 'Get'}
                </button>
            </form>

            <div className="grid grid-cols-1 w-full h-full px-10
                2xl:grid-cols-4
                xl:grid-cols-3 xl:w-5/6
                lg:overflow-y-auto lg:scrolling-auto
                md:grid-cols-2 
            ">
                {data.length > 0 && data.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
        </div>
    )
}
