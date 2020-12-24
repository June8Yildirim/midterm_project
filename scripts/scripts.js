const userName = prompt("Please enter your name");
alert("Hello "+ userName +" please follow guidelines");




function hideIt(event) {
    event.target.style.display = "none";
}

function setUp() {
    document.querySelector("#testScript").addEventListener("click", hideIt);
}
addEventListener("load", setUp)



function reveal() {
    document.querySelector("#click").addEventListener("click", revealed);
}

function revealed() {
    var y = document.getElementById("explainer");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
addEventListener("load", reveal);