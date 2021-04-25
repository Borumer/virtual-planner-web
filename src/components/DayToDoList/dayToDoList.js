import DayToDo from "../DayToDo/dayToDo";

export default function DayToDoList(props) {
	return (
		<section className="day-todo-list">
			<h2>Daily To-Do</h2>
			<ul>
				<li key="1">
					<DayToDo dateStr="2021-24-04" />
				</li>
				<li key="2">
					<DayToDo dateStr="2021-24-05" />
				</li>
                <li key="3">
					<DayToDo />
				</li>
                <li key="4">
					<DayToDo />
				</li>
			</ul>
		</section>
	);
}
