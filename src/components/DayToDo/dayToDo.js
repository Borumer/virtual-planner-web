import dayToDo from "./dayToDo.module.css";
import { daysOfWeek } from "../../lib/Moment";
import { useFetch } from "../../lib/DataStore";
import Goal from "../Goal/goal";

export default function DayToDo(props) {
	const parseDate = props.year + "-" + props.month + "-" + props.date;

	const dailyWork = useFetch("http://localhost:8000/work/daily?format=json");

	return (
		<article className={dayToDo.container}>
			<h3>
				<span>{props.date}</span> <span>{daysOfWeek[props.day]}</span>
			</h3>
			<ul className={dayToDo.schoolwork}>
				{dailyWork
					? dailyWork
							.filter(item => item.due_date === parseDate)
							.filter(
								item =>
									item.type === "daily" || item.type === "day"
							)
							.map(item => (
								<li>
									<Goal {...item} />
								</li>
							))
					: ""}
			</ul>
			<h3>After School</h3>
			<ul className={dayToDo.afterSchoolWork}>
				{dailyWork
					? dailyWork
							.filter(item => item.due_date === parseDate)
							.filter(
								item =>
									item.type === "after_school"
							)
							.map(item => (
								<li>
									<Goal {...item} />
								</li>
							))
					: ""}
			</ul>
		</article>
	);
}
