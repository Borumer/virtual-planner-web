import { useFetch } from "../../lib/DataStore";
import Goal from "../Goal/goal";
import monthlyGoals from "./monthlyGoals.module.css";

export default function MonthlyGoals(props) {
	const goals = useFetch(
		"http://localhost:8000/goal/monthly?format=json"
	);

	return (
		<section>
			<h3>Monthly Goals</h3>
			<ul>
				{goals
					? goals.map(item => (
							<li className={monthlyGoals.goal} key={item.id}>
								<Goal {...item} />
							</li>
					  ))
					: ""}
			</ul>
		</section>
	);
}
