let data;
let bonus = {};
let prof;
let level;
let maxLife;

function ReadFile() {
    const fileElement = document.getElementById("file");
    const reader = new FileReader();
    reader.addEventListener("load",() => {
        LoadData(reader.result);
        fileElement.classList.add("hidden");
    }, false);
    if (file) {
        reader.readAsText(fileElement.files[0]);
    }
}

function LoadData(file) {
    const persoElement = document.getElementById("perso");
    data = JSON.parse(file);

    level = data.classes.reduce((value, elemment) => value + elemment.level, 0);
    prof = Math.ceil(level / 4) + 1;
    maxLife = data.classes.reduce((value, elemment) => value + elemment.hp, 0);

    for (const [key, value] of Object.entries(data.resume)) {
        document.getElementById(key).innerText = value;
    }

    let parentElement = document.getElementById("ability");
    for (const [key, value] of Object.entries(data.ability)) {
        let newKey = "ability-" + key;
        const cells = parentElement.querySelector("#" + newKey).cells;
        cells[1].innerText = value;
        bonus[newKey] = Math.floor(value / 2) - 5;
        cells[2].innerText = "+" + bonus[newKey];
    }

    parentElement = document.getElementById("saving");
    const savingKey = ["str", "dex", "con", "int", "wis", "cha"]
    for (const key of savingKey) {
        let newKey = "saving-" + key;
        const cells = parentElement.querySelector("#" + newKey).cells;
        if (data.saving.includes(key)) {
            cells[2].innerHTML = "&#x25CF";
            cells[1].innerText = "+" + (bonus["ability-" +key] + prof);
        }
        else {
            cells[1].innerText = "+" + bonus["ability-" +key];
        }
    }

    parentElement = document.getElementById("classes").getElementsByTagName("tbody")[0];
    for (const cl of data.classes) {
        const row = parentElement.insertRow(-1);
        for (const [key, value] of Object.entries(cl)) {
            const cell = row.insertCell(-1);
            cell.innerText = value;
        }
    }
    parentElement = document.getElementById("classes").getElementsByTagName("tfoot")[0].getElementsByTagName("tr")[0];
    let cell = parentElement.insertCell(-1);
    cell.innerHTML = level;
    cell = parentElement.insertCell(-1);
    cell.innerHTML = maxLife;

    persoElement.classList.remove("hidden");
}

function print(text) {
    console.log(text);
}