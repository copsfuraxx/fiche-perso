import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';
import Ability from 'src/components/Ability';

export default function MainInfo() {
    const {persoData} = useContext(PersoDataContext);
    return (
        <>
            <h2 className="text-center">Information Principale</h2>
            <Ability ability= {persoData.ability}/>
        </>
    );
}