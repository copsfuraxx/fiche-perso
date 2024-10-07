export default function SaveLine({ saveName, bonus, prof = false }) {
    return (
        <tr>
            <th>{saveName}</th>
            <td>+{bonus}</td>
            <td>{prof ? <>&#x25CF;</> : ''}</td>
        </tr>
    );
}