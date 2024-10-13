

export default function LabelInput({name, label, type}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} />
        </div>
    );
}