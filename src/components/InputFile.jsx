export default function InputFile({onChange}) {
    return (
        <input type="file" accept=".json" onChange={onChange}/>
    );
}