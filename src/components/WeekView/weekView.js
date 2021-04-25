import DayToDoList from "../DayToDoList/dayToDoList";
import MonthCalendar from "../MonthCalendar/monthCalendar";
import WeeklyGoals from "../WeeklyGoals/weeklyGoals";
import "./weekView.css";

export default function WeekView(props) {
	return (
		<main className="container">
			<MonthCalendar week={1} />
			<WeeklyGoals />
			<DayToDoList />
		</main>
	);
}
