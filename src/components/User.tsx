import { ReactComponent as Female } from '../assets/svg/female.svg'
import { ReactComponent as Male } from '../assets/svg/male.svg'

type userProps = {
    user: {
        firstName: string,
        lastName: string,
        pesel: string,
        birthday: string,
        gender: string,
    }
}

export default function User( { user } : userProps) {
    return (
        <div 
            className="card shadow bg-base-200 m-1 overflow-visible
                sm:h-40 
            ">
            <div className="card-body relative">
                <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-400">Birthday: {user.birthday} </p>
                <p className="text-gray-400">PESEL: {user.pesel} </p>
                <div className="absolute right-0 top-2/3 mr-2">
                    {user.gender === "Mężczyzna" ? <Male /> : <Female />}
                </div>
            </div>
        </div>
    )
}
