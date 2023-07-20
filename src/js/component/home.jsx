import React, { useEffect } from "react";
import '../../styles/home.css';
import ReactDOM from "react-dom";
import { useState } from "react";
import Task from "./Task";



//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	const [InputText, setInputText] = useState("");
	const todosApi = 'https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/VeronicaCastroMurillo'

	//GET API Todos
	useEffect(() => {
		//fetch(urlAPI).then(promesa).then(resultado).catch(mensaje de error)
		fetch(todosApi).then(result => result.json()).then(data => {
			console.log(data)
			setTasks(data)
		}
		).catch(err => err)
	}, []);

	//PUT TO UPDATE DATA WHEN WE PRESS ENTER.
	let newObj = [{"label": 'Hola', "done": false}]
	
	let updateAllTasks = () => {
		useEffect(() => {
			
			fetch(todosApi, {
				method: 'PUT',
				body: JSON.stringify(newObj),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response=>response.json()).then(data => setTasks(newObj)).catch(err => err);
		}, []);
	}

	//

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (InputText.trim() !== '') {
				setTasks([...tasks, InputText]);
				setInputText('');

			}
		}
	}


	const deleteTag = (index) => {
		const updatedTag = tasks.filter((_, i) => i !== index);
		setTasks(updatedTag);

	}


	return (
		<div className="Input-center main-container">
			<h1 className="title mt-5">Todos</h1>
			<ul className=" list-group w-50 position-absolute top-50 start-50 translate-middle">
				<li className="list-group-item input-main-div">
					<input type="setInputText" className="form-control border-0" value={InputText} placeholder="What needs to be done?" onKeyDown={handleKeyDown} onChange={(e) => { setInputText(e.target.value) }} />
				</li>
				{/* Render every input that gets inserted */}
				{tasks.map((task, index) => {
					return <li key={index} className="ul-list list-group-item">
						<Task task={task.label} deleteTag={deleteTag} id={index} />
					</li>
				})}
				<li className="list-group-item Input-start">{tasks.length} Items left</li>
				<button onClick={() => { alert('It´s working') }}>DELETE ALL</button>
			</ul>

		</div>
	);


};

export default Home;