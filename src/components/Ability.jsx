import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';
import AbilityLine from 'src/components/AbilityLine';

export default function Ability({ ability }) {
    const { bonus } = useContext(PersoDataContext);
    return (
        <table>
            <thead><tr><th colSpan="3">Statistiques</th></tr></thead>
            <tbody>
                <AbilityLine abilityName="Force (STR)" abilityValue={ability.str} bonus={bonus.str} />
                <AbilityLine abilityName="Decterité (DEX)" abilityValue={ability.dex} bonus={bonus.dex} />
                <AbilityLine abilityName="Constitution (CON)" abilityValue={ability.con} bonus={bonus.con} />
                <AbilityLine abilityName="Intelligence (INT)" abilityValue={ability.int} bonus={bonus.int} />
                <AbilityLine abilityName="Sagesse (WIS)" abilityValue={ability.wis} bonus={bonus.wis} />
                <AbilityLine abilityName="Charisme (CHA)" abilityValue={ability.cha} bonus={bonus.cha} />
            </tbody>
        </table>
    );
}