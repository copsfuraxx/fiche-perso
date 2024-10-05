import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';

export default function Ability({ ability }) {
    const {bonus} = useContext(PersoDataContext);
    return (
        <table>
        <thead><tr><th colSpan="3">States</th></tr></thead>
        <tbody>
            <tr id="ability-str">
                <th>Force (STR)</th>
                <td>{ability.str}</td>
                <td>+{bonus.str}</td>
            </tr>
            <tr id="ability-dex">
                <th>Decterité (DEX)</th>
                <td>{ability.dex}</td>
                <td>+{bonus.dex}</td>
            </tr>
            <tr id="ability-con">
                <th>Constitution (CON)</th>
                <td>{ability.con}</td>
                <td>+{bonus.con}</td>
            </tr>
            <tr id="ability-int">
                <th>Intelligence (INT)</th>
                <td>{ability.int}</td>
                <td>+{bonus.int}</td>
            </tr>
            <tr id="ability-wis">
                <th>Sagesse (WIS)</th>
                <td>{ability.wis}</td>
                <td>+{bonus.wis}</td>
            </tr>
            <tr id="ability-cha">
                <th>Charisme (CHA)</th>
                <td>{ability.cha}</td>
                <td>+{bonus.cha}</td>
            </tr>
        </tbody>
        </table>
    );
}