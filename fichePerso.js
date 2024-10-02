let data;
let bonus = {};
let prof;
let saving = {};
let level;
let maxLife;

document.addEventListener("DOMContentLoaded", (event) => {
    const storage = localStorage.getItem("data");
    if (storage) {
        data = JSON.parse(storage);
        LoadData();
    }
});

function Export() {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(data)], {type: "application/json"});
    a.href = URL.createObjectURL(file);
    a.download = data.resume.name;
    a.click();
}

function ReadFile() {
    const fileElement = document.getElementById("file");
    const reader = new FileReader();
    reader.addEventListener("load",() => {
        data = JSON.parse(reader.result);
        localStorage.setItem("data", JSON.stringify(data));
        LoadData();
    }, false);
    if (fileElement.files[0]) {
        reader.readAsText(fileElement.files[0]);
    }
}

function LoadData() {
    const persoElement = document.getElementById("perso");

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
        let value = bonus["ability-" + key];
        if (data.saving.includes(key)) {
            cells[2].innerHTML = "&#x25CF";
            value += prof;
        }
        cells[1].innerText = "+" + value;
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

    document.getElementById("file").classList.add("hidden");
    document.getElementById("export").classList.remove("hidden");
    persoElement.classList.remove("hidden");
}

function print(text) {
    console.log(text);
}