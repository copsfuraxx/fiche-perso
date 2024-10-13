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

export const Skills = {
    acr : {
        name: "Acrobaties",
        ability: "Dex"
    },
    ani : {
        name: "Dressage",
        ability: "Wis"
    },
    arc: {
        name: "Arcanes",
        ability: "Int"
    },
    ath: {
        name: "Athlétisme",
        ability: "Str"
    },
    dec: {
        name: "Tromperie",
        ability: "Cha"
    },
    his: {
        name: "Histoire",
        ability: "Int"
    },
    ins: {
        name: "Perspicacité",
        ability: "Wis"
    },
    int: {
        name: "Intimidation",
        ability: "Cha"
    },
    inv: {
        name: "Investigation",
        ability: "Int"
    },
    med: {
        name: "Médecine",
        ability: "Wis"
    },
    nat: {
        name: "Nature",
        ability: "Int"
    },
    prc: {
        name: "Perception",
        ability: "Wis"
    },
    prf: {
        name: "Représentation",
        ability: "Cha"
    },
    prs: {
        name: "Persuasion",
        ability: "Cha"
    },
    rel: {
        name: "Religion",
        ability: "Int"
    },
    slt: {
        name: "Escamotage",
        ability: "Dex"
    },
    ste: {
        name: "Discrétion",
        ability: "Dex"
    },
    sur: {
        name: "Survie",
        ability: "Wis"
    }
};

export const formFields = {
    resume : {
        name: {
            type: 'text',
            label: 'Nom',
        },
        race: {
            type: 'text',
            label: 'Race',
        },
        gender: {
            type: 'text',
            label: 'Genre',
        },
        alignment: {
            type: 'text',
            label: 'Alignement',
        },
        deity: {
            type: 'text',
            label: 'Dieu',
        },
        size: {
            type: 'text',
            label: 'Corpulence',
        },
        hair: {
            type: 'text',
            label: 'Cheveu',
        },
        eyes: {
            type: 'text',
            label: 'Yeux',
        },
        height: {
            type: 'text',
            label: 'Taille',
        },
        weight: {
            type: 'text',
            label: 'Poid',
        },
        age: {
            type: 'text',
            label: 'Age',
        },
        background: {
            type: 'text',
            label: 'Histoire',
        },
    }
}