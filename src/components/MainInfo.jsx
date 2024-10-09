import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';
import DivLine from 'src/components/DivLine';
import Ability from 'src/components/Ability';
import Save from 'src/components/Save';
import Class from 'src/components/Class';

export default function MainInfo() {
    const {persoData} = useContext(PersoDataContext);
    return (
        <>
            <h2 className="text-center">Information Principale</h2>
            <DivLine>
                <Ability ability= {persoData.ability}/>
                <Save saveList={persoData.save}/>
                <Class classes={persoData.classes}/>
            </DivLine>
        </>
    );
}