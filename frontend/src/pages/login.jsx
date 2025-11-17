import '../styles.css'
import Button from '../components/ui/Button';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <h1 className="font-mono text-green-500 font-bold">Hello this is the login screen</h1>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>

            <div className=''>
                <Button/>
            </div>
        </>
    )
}

