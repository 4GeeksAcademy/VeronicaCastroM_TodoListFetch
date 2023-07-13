import React from "react";
import '../../styles/home.css';
import ReactDOM from "react-dom";
import Tag from "./Tag";
import { useState } from "react";



//create your first component
const Home = () => {
	const [tag, setTag] = useState([])
	const [text, setText] = useState("");
	const [id, setId] = useState(0);
	const [counter, setCounter] = useState(0);

	window.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			if (text.trim() !== '') {
				setTag([...tag, <Tag text={text} deleteTag={deleteTag} id={id}/*delete={() => { setTag((tag) => tag.filter((tag) => tag.text !== "")) }}*/ />]);
				setText('');
				setCounter(counter + 1);
			}
		}
	})

	const deleteTag = (index) => {
		const updatedTag = [...tag];
		updatedTag.splice(index, 1);
		setTag(updatedTag);

	}

	return (
		<div className="text-center main-container">
			<h1 className="title mt-5">Todos</h1>
			<ul className=" list-group w-50 position-absolute top-50 start-50 translate-middle">
				<li className="list-group-item input-main-div">
					<input type="text" className="form-control border-0" placeholder="What needs to be done?" onChange={(e) => { setText(e.target.value) }} />
				</li>
				{/* Render every input that gets inserted */}
				{tag.map((tagContent, index) => (
					<li className="ul-list list-group-item" key={index} id={index}>{tagContent}</li>
				))}
				<li className="list-group-item text-start">{counter} Items left</li>
			</ul>


		</div>
	);


};

export default Home;