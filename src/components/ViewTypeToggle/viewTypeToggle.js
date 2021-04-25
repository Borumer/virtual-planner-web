import { Link } from "react-router-dom";
import viewTypeToggle from "./viewTypeToggle.module.css";

export default function ViewTypeToggle(props) {
    return (
        <nav className={viewTypeToggle.container}>
            <Link to="/month">Month</Link>
            <Link to="/week">Week</Link>
        </nav>
    );
}