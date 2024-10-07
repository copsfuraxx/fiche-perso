export default function AbilityLine({ abilityName, abilityValue, bonus }) {
    return (
        <tr>
            <th>{abilityName}</th>
            <td>{abilityValue}</td>
            <td>+{bonus}</td>
        </tr>
    );
}