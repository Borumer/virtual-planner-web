import { useState } from "react";
import monthWeekView from "./monthWeekView.module.css";

export default function MonthWeekView(props) {
	const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

	const getMonthDates = daysInMonth => {
		const monthDates = [];
		for (let i = 1; i <= daysInMonth; i++) {
			monthDates.push(i);
		}
		return monthDates;
	};

	const getPlaceholders = firstDayOfCurrentMonth => {
		const firstWeekPlaceholders = [];
		for (let i = 0; i < firstDayOfCurrentMonth; i++) {
			firstWeekPlaceholders.push(" ");
		}
		return firstWeekPlaceholders;
	};

	const getMonthDatesWithPlaceholders = () => {
		const date = new Date();
		const currentYear = date.getFullYear();
		const currentMonth = date.getMonth();

		const firstDayOfCurrentMonth = new Date(
			currentYear,
			currentMonth,
			1
		).getDay();
		
		const lastDayOfCurrentMonth = new Date(
			currentYear,
			currentMonth + 1,
			0
		).getDate();

		return getPlaceholders(firstDayOfCurrentMonth).concat(
			getMonthDates(lastDayOfCurrentMonth - firstDayOfCurrentMonth)
		);
	};

	return (
		<section className={monthWeekView.container}>
			<h2>April 2021</h2>
			<ul className={monthWeekView.daysOfWeek}>
				{daysOfWeek.map((item, index) => (
					<li key={item.substring(0, 3)}><abbr>{item.substring(0, 1)}</abbr></li>
				))}	
			</ul>
			<ul className={monthWeekView.monthDates}>
				{getMonthDatesWithPlaceholders().map(item => (
					<li>{item}</li>
				))}
			</ul>
		</section>
	);
}
