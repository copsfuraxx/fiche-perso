import ClassLine from "./ClassLine";

export default function Class({classes}) {
    const lvl = classes.reduce((value, elemment) => value + elemment.level, 0);
    const hp = classes.reduce((value, elemment) => value + elemment.hp, 0);
    const classList = classes.map((cl, index) => <ClassLine key={index} cl={cl}/>);
    return (
        <table>
            <thead>
                <tr><th colSpan="4">Classes</th></tr>
                <tr>
                    <th>Nom</th>
                    <th>Lvl</th>
                    <th>HP</th>
                    <th>Hit Dice</th>
                </tr>
            </thead>
            <tbody>
                {classList}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{lvl}</th>
                    <th>{hp}</th>
                </tr>
            </tfoot>
        </table>
    );
}