import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles.css'


export default function LandingPage() {
  const [name, setNames] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => setNames(data))
      .catch(error => console.error("Error fetching names:", error));
  }, []);

  return (
    <>
      <h1 className="font-mono text-green-500 font-bold text-base ">
        Hello this is the Landing Page
      </h1>
      <p className="text-blue-700 text-5xl">Fetched title: {name.title}</p>
      <Link to="/" className="text-4xl text-blue-500"><p>Home</p></Link>
      <Link to="/register" className="text-4xl text-blue-500"><p>Register</p></Link>
      <Link to="/login" className="text-4xl text-blue-500"><p>Login</p></Link>
    </>
  );
}
