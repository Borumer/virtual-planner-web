import Goal from "../Goal/goal";

export default function MonthlyGoals(props) {
    const monthlyGoals = [
        "Finish Ambient Noise Remover & upload",
        "Finish NHS application and submit",
        "Send Wanderlust resume",
        "Schedule Superworld interview",
        "Submit full application to InstaHub",
        "Read _To Kill A Mockingbird_"
    ];

    return (
        <section>
        <h3>Monthly Goals</h3>
            <ul>
                {monthlyGoals.map(item => <Goal goal={item} />)}
            </ul>
        </section>
    );
}