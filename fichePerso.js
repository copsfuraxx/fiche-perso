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
    const data = JSON.parse(file);
    for (const [key, value] of Object.entries(data)) {
        document.getElementById(key).innerText = value;
      }
    persoElement.classList.remove("hidden");
}