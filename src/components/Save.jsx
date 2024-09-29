import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';
import SaveLine from "src/components/SaveLine";

export default function Save({saveList}) {
    const {save} = useContext(PersoDataContext);
    return (
        <table>
            <thead><tr><th colSpan="3">Jets de sauvegarde</th></tr></thead>
            <tbody>
                <SaveLine saveName="Force (STR)" bonus={save.str} prof={saveList.includes('str')}/>
                <SaveLine saveName="Decterité (DEX)" bonus={save.dex} prof={saveList.includes('dex')}/>
                <SaveLine saveName="Constitution (CON)" bonus={save.con} prof={saveList.includes('con')}/>
                <SaveLine saveName="Intelligence (INT)" bonus={save.int} prof={saveList.includes('int')}/>
                <SaveLine saveName="Sagesse (WIS)" bonus={save.wis} prof={saveList.includes('wis')}/>
                <SaveLine saveName="Charisme (CHA)" bonus={save.cha} prof={saveList.includes('cha')}/>
            </tbody>
        </table>
    );
}