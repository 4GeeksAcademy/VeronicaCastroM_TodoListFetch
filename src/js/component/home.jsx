import React from "react";
import '../../styles/home.css';
import ReactDOM from "react-dom";
import Tag from "./Tag";
import { useState } from "react";



//create your first component
const Home = () => {
	const [tag, setTag] = useState([])
	const [text, setText] = useState("");
	const [counter, setCounter] = useState(0);

	window.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			ReactDOM.render(<Tag text={text} />, document.querySelector(".ul-list"));
			setCounter(counter + 1);
		}
	})


	return (
		<div className="text-center main-container">
			<h1 className="title mt-5">Todos</h1>
			<ul className="ul-list list-group w-50 position-absolute top-50 start-50 translate-middle">
				<li className="list-group-item input-main-div">
					<input type="text" className="form-control border-0" placeholder="What needs to be done?" onChange={(e) => { setText(e.target.value) }} />
				</li>
				<Tag text='Probando 1 2 3' />
				<li className="list-group-item text-start">{counter} Items left</li>
			</ul>
		</div>

	);


};

export default Home;