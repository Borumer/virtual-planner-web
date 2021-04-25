import dayToDo from "./dayToDo.module.css";
import { daysOfWeek } from "../../lib/Moment";
import Goal from "../Goal/goal";

/**
 *
 * @param {{dateStr : string}} props
 * @param {string} props.dateStr
 * @returns
 */
export default function DayToDo({ dateStr = "" }) {
	const getDateInfo = () => {
		if (dateStr === "") {
			const date = new Date();
			return {
				date: date.getDate(),
				dayOfWeekName: daysOfWeek[date.getDay()],
			};
		}

		const dateComponents = dateStr.split("-");

		const date = new Date(
			dateComponents[0],
			dateComponents[1],
			dateComponents[2]
		);

		const dayOfWeekName = daysOfWeek[date.getDay()];
		return {
			date: date.getDate(),
			dayOfWeekName,
		};
	};

	const dateInfo = getDateInfo();

	return (
		<article className={dayToDo.container}>
			<h3>
				<span>{dateInfo.date}</span>{" "}
				<span>{dateInfo.dayOfWeekName}</span>
			</h3>
			<ul className={dayToDo.schoolwork}>
				<li>
					<Goal
						goal={`Finish "The Great Gatsby" Constructed Response Outline`}
					/>
				</li>
				<li>
					<Goal goal="Study for Biology Unit 9 Quiz" />
				</li>
				<li>
					<Goal
						goal={`Read pages 614-631 of "The New Economy" and "The New
					Culture`}
					/>
				</li>
				<li>
					<Goal goal="Do a PopSugar Fitness workout" />
				</li>
				<li>
					<Goal goal="Polish C&CA beat for WIP" />
				</li>
				<li>
					<Goal goal="Review polar coordinates" />
				</li>
				<li>
					<Goal goal="Review 5A grammar topics and vocabulary" />
				</li>
				<li>
					<Goal goal="Practice new Symphonic Band music" />
				</li>
			</ul>
			<h3>After School</h3>
			<ul className={dayToDo.afterSchoolWork}>
				<li>
					<Goal goal="Test positional Kalman Filter" />
				</li>
				<li>
					<Goal
						goal="Finish implementing Positional Kalman Filter with process
					noise"
					/>
				</li>
				<li>
					<Goal goal="Test Velocity Kalman Filter" />
				</li>
				<li>
					<Goal goal="Implement velocity Kalman Filter" />
				</li>
			</ul>
		</article>
	);
}
