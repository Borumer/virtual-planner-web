import DayToDo from "../DayToDo/dayToDo";
import dayToDoList from "./dayToDoList.module.css";

export default function DayToDoList(props) {
	const currentWeek = (() => {
		const now = new Date();
		const firstDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - now.getDay() + 1
		);

		const dates = [];

		for (let i = 0; i < 7; i++) {
			dates.push(
				new Date(
					firstDay.getFullYear(),
					firstDay.getMonth(),
					firstDay.getDate() + i
				)
			);
		}

		return dates;
	})();

	return (
		<section className={`day-todo-list ${dayToDoList.container}`}>
			<h2>Daily To-Do</h2>
			<ul>
				{currentWeek.map(item => (
					<li key={item.getFullYear()}>
						<DayToDo month={item.getMonth()} year={item.getFullYear()} date={item.getDate()} day={item.getDay()} />
					</li>
				))}
			</ul>
		</section>
	);
}
