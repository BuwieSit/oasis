import '../styles.css'
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <h1 class=".font-mono .text-green-500 .font-bold">Hello this is the register screen</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </>
    )
}

