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
      <h1 className="font-mono text-green-500 font-bold text-base">
        Hello this is the Landing Page
      </h1>
      <p className="text-gray-700">Fetched title: {name.title}</p>
    </>
  );
}
