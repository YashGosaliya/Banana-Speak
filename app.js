var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate);
btnTranslate.addEventListener('click', addEventListener)
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json?";

function getTranslateUrl(input) {
    return serverUrl + "text= " + input;
}

function addEventListener() {
    console.log("Clicked!!!");
    console.log("input", textInput.value); //takes input
    var inputText = textInput.value; //fetches into process
    fetch(getTranslateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText; //output
        })
        .catch(errorHandler);
}

function errorHandler(error) {
    console.log("An unexpected error has been occured", error);
    alert("Issues in server, please come after some time.");
}
