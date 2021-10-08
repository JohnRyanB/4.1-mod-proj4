import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function url(path) {
	return process.env.NODE_ENV === "development"
		? `http://localhost:1234${path}`
		: path;
}

function App() {
	const [data, setData] = useState("hi");

	useEffect(() => {
		axios
			.get(url("/api/"))
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="App">
			<header className="App-header">What is in the API? {data.data}</header>
		</div>
	);
}

export default App;
