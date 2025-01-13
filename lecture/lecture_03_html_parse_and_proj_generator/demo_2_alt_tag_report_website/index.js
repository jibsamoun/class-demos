async function auditUrl(){
    const inputWord = document.getElementById("urlInput").value;
    const response = await fetch("api/auditurl?url=" + inputWord);
    const resultText = await response.text()

    document.getElementById("results").innerHTML = resultText;
}