var input;
var output;

window.onload = function() {
    console.log("yo");
    input = document.getElementById("input");
    output = document.getElementById("output");

    input.addEventListener('keypress', function(e) {
        console.log("hi");
        output.innerHTML = "";
        var text = input.value.toLowerCase();
        for (var i = 0; i < VOCAB.length; i++) {
            if (VOCAB[i].toLowerCase().includes(text)) {
                output.innerHTML += VOCAB[i] + "<br/>";
            }
        }
    });
}