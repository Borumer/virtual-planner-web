import DayToDoList from "../DayToDoList/dayToDoList";
import MonthWeekView from "../MonthWeekView/monthWeekView";
import WeeklyGoals from "../WeeklyGoals/weeklyGoals";
import "./weekView.css";

export default function WeekView(props) {
	return (
		<main className="container">
			<MonthWeekView />
			<WeeklyGoals />
			<DayToDoList />
		</main>
	);
}
