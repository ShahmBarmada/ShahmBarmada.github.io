var scArray = document.getElementsByClassName("sub-container");

function showSection(scID) {
    var i;
    for (i = 0; i < scArray.length; i++) {
        if (scArray[i].id == "sc-" + scID) {
            scArray[i].style.display = "grid";
        } else {
            scArray[i].style.display = "none";
        }
    }
}

function browserButton(btnID) {
    var i;
    if (btnID == "btnNext") {
        for (i = 0; i < scArray.length; i++) {
            if ((window.getComputedStyle(scArray[i], null).getPropertyValue("display") == "grid") && (i < 5)) {
                scArray[i].style.display = "none";
                scArray[(i + 1)].style.display = "grid";
                break;
            } else {}
        }
    } else if (btnID == "btnPrevious") {
        for (i = 0; i < scArray.length; i++) {
            if ((window.getComputedStyle(scArray[i], null).getPropertyValue("display") == "grid") && (i > 0)) {
                scArray[i].style.display = "none";
                scArray[(i - 1)].style.display = "grid";
                break;
            } else {}
        }
    }
}

function lightTheme() {
    document.getElementsByTagName("html")[0].style.backgroundColor =  "rgb(238, 238, 238)";
}

function darkTheme() {
    document.getElementsByTagName("html")[0].style.backgroundColor =  "rgb(36, 36, 36)";
}