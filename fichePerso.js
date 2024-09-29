let data;

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
    for (const [key, value] of Object.entries(data.resume)) {
        document.getElementById(key).innerText = value;
    }
    let parentElement = document.getElementById("ability");
    for (const [key, value] of Object.entries(data.ability)) {
        const cells = parentElement.querySelector("#ability-" + key).cells;
        cells[1].innerText = value;
        cells[2].innerText = "+" + (Math.floor(value / 2) - 5);
    }
    persoElement.classList.remove("hidden");
}

function print(text) {
    console.log(text);
}