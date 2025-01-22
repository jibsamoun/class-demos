async function getDinos() {
    console.log("getting dinos");
    let response = await fetch("api/getDinos");
    let dinos = await response.json();
console.log('dinos', dinos);
    let html = dinos.map(item => {
        return `
          <div>
             <p>${item.Genus}</p>
             <img src="${item.img}" />
          </div>
        `
    })

    document.getElementById('results').innerHTML = html;
}

async function saveUserData() {
    let name = document.getElementById("name").value;
    let icecream = document.getElementById("icecream").value;
    console.log(name, icecream);
}