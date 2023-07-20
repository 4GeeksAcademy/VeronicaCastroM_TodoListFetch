import React, { useEffect } from "react";
import '../../styles/home.css';
import ReactDOM from "react-dom";
import { useState } from "react";
import Task from "./Task";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	const [inputText, setInputText] = useState("");
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


	const updateAllTasks = () => {
		const newTask = { done: false, id: Date.now(), label: inputText };

		// Fetch para añadir datos
		fetch(todosApi, {
			method: 'PUT',
			body: JSON.stringify([...tasks, newTask]),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(err => err);

		setTasks([...tasks, newTask]);
		setInputText('');
	}

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (inputText.trim() !== '') {
				updateAllTasks()
			}
		}
	}


	const deleteTask = (index) => {
		// Fetch para borrar datos
		fetch(todosApi, {
			method: 'PUT',
			body: JSON.stringify(tasks.filter((_, i) => i !== index)),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(err => err);
		setTasks(tasks.filter((_, i) => i !== index));
	}

	const deleteAllTask = (index) => {
		// Fetch para borrar datos
		fetch(todosApi, {
			method: 'PUT',
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(err => err);
		setTasks([]);
	}

	return (
		<div className="Input-center main-container">
			<h1 className="title mt-5">Todos</h1>
			<ul className=" list-group w-50 position-absolute top-50 start-50 translate-middle">
				<li className="list-group-item input-main-div">
					<input type="text" className="form-control border-0" value={inputText} placeholder="What needs to be done?" onKeyDown={handleKeyDown} onChange={(e) => { setInputText(e.target.value) }} />
				</li>
				{/* Render every input that gets inserted */}
				{tasks.map((task, index) => {
					return (
						<li key={index} className="ul-list list-group-item">
							<Task task={task.label} deleteTask={deleteTask} id={index} />
						</li>
					);
				})}
				<li className="list-group-item Input-start">{tasks.length} Items left</li>
				<button onClick={() => { deleteAllTask() }}>DELETE ALL</button>
			</ul>

		</div>
	);


};

export default Home;