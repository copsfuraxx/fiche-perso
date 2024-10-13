import LabelInput from 'src/components/LabelInput';
import { formFields } from 'src/utils'

export default function CreatePersoPage({setCreate}) {
    const navigate = useNavigate();
    function CreatePerso(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let data = {
            resume: {}
        }
        formData.forEach((value, key) => {
            const keys = key.split('.');
            data[keys[0]][keys[1]] = value;
        });
        setCreate(false);
    }

    let fields = [];
    for (const [key, value] of Object.entries(formFields.resume)) {
        fields.push(<LabelInput key={key} label={value.label} name={'resume.' + key} type={value.type} />);
      }


    return (
        <form onSubmit={CreatePerso}>
            {fields}
            <button type='submit'>Créer</button>
        </form>
    );
    
}