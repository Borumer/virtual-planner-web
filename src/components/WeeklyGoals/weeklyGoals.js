import { useEffect, useState } from "react";
import { useFetch } from "../../lib/DataStore";
import Goal from "../Goal/goal";
import weeklyGoals from "./weeklyGoals.module.css";

export default function WeeklyGoals(props) {
	const goals = useFetch("http://localhost:8000/goal/weekly/?format=json");

	return (
		<section>
			<h3>Weekly Goals</h3>
			<ul>
				{goals ? goals.map(item => (
					<li className={weeklyGoals.goal}><Goal {...item} /></li>
				)) : ""}
			</ul>
		</section>
	);
}
