import { useState } from "react";

export default function DayAfterSchoolToDo({initialDesc}) {
    const [description, setDescription] = useState(initialDesc);
    
    const handleDescriptionUpdate = e => setDescription(e.target.value);

	return <input type="text" value={description} onChange={handleDescriptionUpdate} />;
}
