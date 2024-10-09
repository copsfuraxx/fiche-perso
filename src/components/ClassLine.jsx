export default function ClassLine({ cl }) {
    return (
        <tr>
            <td>{cl.name}</td>
            <td>{cl.level}</td>
            <td>{cl.hp}</td>
            <td>{cl.hitDice}</td>
        </tr>
    );
}