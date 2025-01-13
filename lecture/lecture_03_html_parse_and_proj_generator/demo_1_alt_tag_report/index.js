async function pluralizeWord(){
    const inputWord = document.getElementById("wordInput").value;
    const response = await fetch("api/pluralize?word=" + inputWord);
    const resultText = await response.text()

    document.getElementById("results").innerHTML = resultText;
}