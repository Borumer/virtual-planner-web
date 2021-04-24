import { useState } from "react";
import goalMod from "./goal.module.css";

export default function Goal({goal}) {
    const [goalDescription, setGoalDescription] = useState(goal);

    const handleGoalDescriptionChange = e => {
        setGoalDescription(e.target.value);
    };

    return (
        <p className={goalMod.container}>
            <input type="text" value={goalDescription} onChange={handleGoalDescriptionChange} />
            <input type="checkbox" />
            <button>X</button>
        </p>
    );
}