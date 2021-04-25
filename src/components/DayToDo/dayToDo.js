import DayAfterSchoolToDo from "./dayAfterSchoolToDo";
import dayToDo from "./dayToDo.module.css";
import { daysOfWeek } from "../../lib/Moment";

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
					<DayAfterSchoolToDo
						initialDesc={`Finish "The Great Gatsby" Constructed Response Outline`}
					/>
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Study for Biology Unit 9 Quiz" />
				</li>
				<li>
					<DayAfterSchoolToDo
						initialDesc={`Read pages 614-631 of "The New Economy" and "The New
					Culture`}
					/>
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Do a PopSugar Fitness workout" />
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Polish C&CA beat for WIP" />
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Review polar coordinates" />
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Review 5A grammar topics and vocabulary" />
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Practice new Symphonic Band music" />
				</li>
			</ul>
			<h3>After School</h3>
			<ul className={dayToDo.afterSchoolWork}>
				<li>
					<DayAfterSchoolToDo initialDesc="Test positional Kalman Filter" />
				</li>
				<li>
					<DayAfterSchoolToDo
						initialDesc="Finish implementing Positional Kalman Filter with process
					noise"
					/>
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Test Velocity Kalman Filter" />
				</li>
				<li>
					<DayAfterSchoolToDo initialDesc="Implement velocity Kalman Filter" />
				</li>
			</ul>
		</article>
	);
}
