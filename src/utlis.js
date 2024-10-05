export function CalcBonus(ability) {
    let bonus = {};
    for (const [key, value] of Object.entries(ability)) {
        bonus[key] = Math.floor(value / 2) - 5;
    }
    return bonus;
}