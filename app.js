var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
console.log(textInput);
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
    var inputText = textInput.value

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            console.log(translatedText);
            outputDiv.innerText = translatedText;
        })
}

btnTranslate.addEventListener("click", clickEventHandler);

