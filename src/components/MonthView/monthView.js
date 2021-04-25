import MonthCalendar from "../MonthCalendar/monthCalendar";
import MonthlyGoals from "../MonthlyGoals/monthlyGoals";
import monthView from "./monthView.module.css";

export default function MonthView(props) {
	return (
		<main className={monthView.container}>
			<MonthCalendar />
			<MonthlyGoals />
		</main>
	);
}
