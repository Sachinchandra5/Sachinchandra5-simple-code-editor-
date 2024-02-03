let html = document.querySelector("#html-code");
let css = document.querySelector("#css-code");
let js = document.querySelector("#js-code");
let output = document.querySelector("#output");

function code() {
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";

    output.contentWindow.eval(js.value);
}

html.addEventListener('keyup', () => {
    code();
});
css.addEventListener('keyup', () => {
    code();
});
js.addEventListener('keyup', () => {
    code();
});
