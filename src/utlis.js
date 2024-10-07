export function CalcBonus(ability) {
    let bonus = {};
    for (const [key, value] of Object.entries(ability)) {
        bonus[key] = Math.floor(value / 2) - 5;
    }
    return bonus;
}

export function CalcSave(bonus, saveList) {
    let save = {};
    for (const [key, value] of Object.entries(bonus)) {
        if (saveList.includes(key)) {
            save[key] = value + 2;
        } else {
            save[key] = value;
        }
    }
    return save;
}