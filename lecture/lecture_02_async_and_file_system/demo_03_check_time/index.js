async function checkTime(){
    const response = await fetch("api/getTime");
    const resultText = await response.text()

    document.getElementById("results").innerHTML = resultText;
}