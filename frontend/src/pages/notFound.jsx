import '../styles.css'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h1 className="text-bold text-center">Not found page</h1>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            
        </>
    )
}