import { useState, useEffect } from 'react';
import { CalcBonus, CalcSave } from 'src/utils';
import { PersoDataContext } from 'src/Context';
import FichePersoPage from 'src/pages/FichePersoPage';
import CreatePersoPage from 'src/pages/CreatePersoPage';
import InputFile from 'src/components/InputFile';

export default function App() {
  const [persoData, setPersoData] = useState(null);
  const [bonus, setBonus] = useState(null);
  const [save, setSave] = useState(null);
  const [create, setCreate] = useState(false);

  if (create) {
    return (
      <CreatePersoPage/>
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('data');
    if (data) {
      data = JSON.parse(data);
      setPersoData(data);
      const newBonus = CalcBonus(data.ability);
      setBonus(newBonus);
      setSave(CalcSave(newBonus, data.save));
    }
  }, []);

  
  if (persoData) {
    return (
      <PersoDataContext.Provider value={{ persoData, setPersoData, bonus, setBonus, save, setSave }}>
        <FichePersoPage/>
      </PersoDataContext.Provider>
    )
  }

  const onChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const data = JSON.parse(reader.result);
        localStorage.setItem("data", JSON.stringify(data));
        setPersoData(data);
        const newBonus = CalcBonus(data.ability);
        setBonus(newBonus);
        setSave(CalcSave(newBonus, data.save));
      }, false);
      reader.readAsText(file);
    }
  }
  return (
    <>
      <InputFile onChange={onChange}/>
      <button onClick={() => setCreate(true)}>Créer un nouveau personnage</button>
    </>
    );
}
