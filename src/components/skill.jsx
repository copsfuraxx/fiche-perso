import { Skills } from "src/utils";

export default function Skill() {
    const skills = Object.entries(Skills).map(([key, value]) => (<tr key={key}><td>{key}</td><td>{value.name} ({value.ability})</td></tr>));
    return (
        <div>
            <h2 className="text-center">Compétences</h2>
            <table>
                <thead><tr><th colSpan="4">Compétences</th></tr></thead>
                <tbody>
                    {skills}
                </tbody>
            </table>
            <table>
            </table>
        </div>
    );
}