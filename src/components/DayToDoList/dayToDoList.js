import DayToDo from "../DayToDo/dayToDo";
import dayToDoList from "./dayToDoList.module.css";
import { useFetch } from "../../lib/DataStore";

export default function DayToDoList(props) {
	const work = useFetch("http://localhost:8000/work?format=json");

	return (
		<section className={`day-todo-list ${dayToDoList.container}`}>
			<h2>Daily To-Do</h2>
			<ul>
				{work ? work.map(item => <li key={item.id}><DayToDo {...item} /></li>) : ""}
			</ul>
		</section>
	);
}
