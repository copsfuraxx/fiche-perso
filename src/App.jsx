import { useState, useEffect } from 'react';
import 'src/App.css';
import { CalcBonus } from 'src/utlis';
import { PersoDataContext } from 'src/Context';
import FichePersoPage from 'src/pages/FichePersoPage'
import InputFile from 'src/components/InputFile';

export default function App() {
  const [persoData, setPersoData] = useState(null);
  const [bonus, setBonus] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setPersoData(JSON.parse(data));
    }
  }, []);

  
  if (persoData) {
    return (
      <PersoDataContext.Provider value={{ persoData, setPersoData, bonus, setBonus }}>
        <FichePersoPage></FichePersoPage>
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
        setBonus(CalcBonus(data.ability));
      }, false);
      reader.readAsText(file);
    }
  }
  return (<InputFile onChange={onChange}/>);
}
