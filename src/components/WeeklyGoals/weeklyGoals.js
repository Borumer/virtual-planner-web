import Goal from "../Goal/goal";
import weeklyGoals from "./weeklyGoals.module.css";

export default function WeeklyGoals(props) {
	const goals = [
		"Enroll in and pay for NYLF program",
		"Order tennis team apparel",
		"Finish Chapter 2 of Driver's Manual",
		"Get good data for Ambient Noise Remover",
		"Assemble hackathon team",
	];

	return (
		<article>
			<h3>Weekly Goals</h3>
			<ul>
				{goals.map(item => (
					<li className={weeklyGoals.goal}><Goal goal={item} /></li>
				))}
			</ul>
		</article>
	);
}
