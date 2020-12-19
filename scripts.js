window.alert("For your safety from the COVID-19 please follow guidelines!");
// alert("For your safety from the COVID-19 please follow guidelines!")

// function warn() {
//     alert("For your safety from the COVID-19 please follow guidelines!");
// }

// function hideIt(event) {
//     event.target.style.display = "none";
// }

// function setUp() {
//     document.querySelector("#hiddenNa").addEventListener("click", hideIt);
// }

// addEventListener("load", setUp);


// $(document).ready(function() {
//     $("a").click(function(event) {
//         alert("You clicked on a link to " + this.href);
//     });
// });


// function validationEmail(event) {
//     let ValidateEmail = document.querySelector("email_val")
//     let checking_sign = email_val.indexOf("@");
//     if (checking_sign == -1) {
//         alert("your mail address is not valid")
//     } else {
//         alert("your mail address is a valid")
//     }
// // }


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