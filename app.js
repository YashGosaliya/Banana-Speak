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

// function url(text) { return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text= " + text }
// var url0 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Jaahanava Joshi";
// fetch(url0)
//     .then(response => response.json())
//     .then(json => console.log(json))
// var url1 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am god of cricket";
// fetch(url1)
//     .then(response => response.json())
//     .then(json => console.log(json))
// var url2 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am ShaktiMan";
// fetch(url2)
//     .then(response => response.json())
//     .then(json => console.log(json))
// const text1 = "I am Jaahanava Joshi";
// const text2 = "I am god of cricket";
// const text3 = "I am ShaktiMan";
// // url(text1);
// doFetch(text1);
// doFetch(text2);
// doFetch(text3);

// function doFetch(text) {
//     fetch(url(text))
//     .then(response => response.json())
//         .then(json => console.log(json))
// }