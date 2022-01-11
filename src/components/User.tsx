type userProps = {
    user: {
        firstName: string,
        lastName: string,
        pesel: string,
        birthday: string,
    }
}

export default function User( { user } : userProps) {
    return (
        <div>
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                    <p className="text-gray-400">Birthday: {user.birthday} </p>
                    <p className="text-gray-400">PESEL: {user.pesel} </p>
                </div>
            </div>
        </div>
    )
}