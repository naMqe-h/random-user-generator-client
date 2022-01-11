import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar mb-12 bg-neutral shadow-md">
            <div className="container mx-auto">
                <div className="flex-none">
                    <Link to="/" className="text-3xl text-primary font-bold">Random User Generator</Link>
                </div>
                <div className="flex-1">
                    <div className="flex justify-end">
                        <Link to="/" className="btn btn-outline btn-primary mr-5">Home</Link>
                        <Link to="/docs" className="btn btn-outline btn-primary mr-5">Docs</Link>
                        <Link to="/about" className="btn btn-outline btn-primary">About</Link>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
