import { useContext } from 'react';
import { PersoDataContext } from 'src/Context';
import Resume from 'src/components/Resume';
import MainInfo from 'src/components/MainInfo';

export default function FichePersoPage() {
    const {persoData} = useContext(PersoDataContext);
    return (
        <>
            <Resume resume={persoData.resume}/>
            <MainInfo/>
        </>
    );
    
}