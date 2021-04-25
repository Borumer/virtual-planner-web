import logo from "../../logo.svg";
import "./App.css";
import WeekView from "../WeekView/weekView";
import MonthView from "../MonthView/monthView";
import ViewTypeToggle from "../ViewTypeToggle/viewTypeToggle";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/month">
						<ViewTypeToggle />
						<MonthView />
					</Route>
					<Route path="/week">
						<ViewTypeToggle />
						<WeekView />
					</Route>
					<Route exact path="/">
						<ViewTypeToggle />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
