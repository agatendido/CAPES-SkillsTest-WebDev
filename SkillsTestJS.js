
// BUTTON FUNCTIONS
function submitButton() {

    // Store values
    const nameInput = document.getElementById("name").value;
    const contactNumberInput = document.getElementById("contactnumber").value;

    // IF ELSE STATEMENTS --- displaying text and icons

    let outputText;
    if (nameInput.length == 0) {                                                        // NAME WRONG
        outputText = "Error: Please check all the details before submitting.";
        document.getElementById("nameTimes").style.display = "inline";
        document.getElementById("nameCheck").style.display = "none";

        if (contactNumberInput.length != 11) {                                          // name wrong, number wrong 
            document.getElementById("numberTimes").style.display = "inline";
            document.getElementById("numberCheck").style.display = "none";
            document.getElementById("wrongNumber").style.display = "block";
        }

        else if (contactNumberInput.length == 11) {                                     // name wrong, number correct                                                         

            if (contactNumberInput.includes(" ")) {                                       // no spaces !!!!
                document.getElementById("numberCheck").style.display = "none";
                document.getElementById("numberTimes").style.display = "inline";
                document.getElementById("wrongNumber").style.display = "inline";
            }

            else {
                document.getElementById("numberCheck").style.display = "inline";
                document.getElementById("numberTimes").style.display = "none";
                document.getElementById("wrongNumber").style.display = "none";
            }

        }
    }

    else if (nameInput.length != 0) {                                                   // NAME CORRECT
        document.getElementById("nameTimes").style.display = "none";
        document.getElementById("nameCheck").style.display = "inline";

        if (contactNumberInput.length != 11) {                                          // name correct, number wrong 
            outputText = "Error: Please check all the details before submitting.";
            document.getElementById("numberTimes").style.display = "inline";
            document.getElementById("numberCheck").style.display = "none";
            document.getElementById("wrongNumber").style.display = "block";
        }

        else if (contactNumberInput.length == 11) {                                     // name correct, number correct                                                         

            if (contactNumberInput.includes(" ")) {                                       // no spaces !!!!
                outputText = "Error: Please check all the details before submitting.";
                document.getElementById("numberCheck").style.display = "none";
                document.getElementById("numberTimes").style.display = "inline";
                document.getElementById("wrongNumber").style.display = "inline";
            }
            if (!(contactNumberInput.startsWith("09"))) {                               // must start with 09
                outputText = "Error: Please check all the details before submitting.";
                document.getElementById("numberCheck").style.display = "none";
                document.getElementById("numberTimes").style.display = "inline";
                document.getElementById("wrongNumber").style.display = "inline";
            }

            else {
                outputText = "You have successfully submitted your contact details.";
                document.getElementById("numberCheck").style.display = "inline";
                document.getElementById("numberTimes").style.display = "none";
                document.getElementById("wrongNumber").style.display = "none";
            }
        }
    }
    if (outputText.includes("Error")) {
        document.getElementById("OutputFail").style.display = "block";
        document.getElementById("OutputSuccess").style.display = "none";
        document.getElementById("OutputError").innerHTML = outputText;
    }
    else {
        document.getElementById("OutputSuccess").style.display = "block";
        document.getElementById("OutputFail").style.display = "none";
        document.getElementById("OutputGood").innerHTML = outputText;
    }


}

// TOGGLE FUNCTIONS
function toggleDark() {
    var v = document.getElementById("togglePanel");
    v.className += "panel bg-dark";

    var w = document.getElementById("toggleBG");
    w.className += "body bodyDark";

    var x = document.getElementById("toggleH3");
    x.className += "h3 header-dark";

    var y = document.getElementById("toggleH1");
    y.className += "h1 header-dark";

    var z = document.getElementById("toggleP1");
    z.className += "p header-dark";

    var t = document.getElementById("toggleP2");
    t.className += "p header-dark";
}
function toggleLight() {
    var v = document.getElementById("togglePanel");
    v.className += "panel bg-light";

    var w = document.getElementById("toggleBG");
    w.className += "body bodyLight";

    var x = document.getElementById("toggleH3");
    x.className += "h3 header-light";

    var y = document.getElementById("toggleH1");
    y.className += "h1 header-light";

    var z = document.getElementById("toggleP1");
    z.className += "p header-light";

    var t = document.getElementById("toggleP2");
    t.className += "p header-light";
}

