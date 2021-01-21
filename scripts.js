function showSection(scID) {
    // console.log("sc-" + scID);
    var i;
    for (i = 0; i < document.getElementsByClassName("sub-container").length; i++) {
        if (document.getElementsByClassName("sub-container")[i].id == "sc-" + scID) {
            document.getElementsByClassName("sub-container")[i].style.display = "grid";
            // console.log("the section to show is " + document.getElementsByClassName("sub-container")[i].id);
        }
        else {
            document.getElementsByClassName("sub-container")[i].style.display = "none";
            // console.log("the section to hide is " + document.getElementsByClassName("sub-container")[i].id);
        }
    }
}

function browserButton(btnID) {
    var i, x, scArray;
    i = 0;
    x = 0;
    scArray = document.getElementsByClassName("sub-container");
    for (i = 0; i < scArray.length; i++) {
        console.log(scArray[i].id)
        if (window.getComputedStyle(scArray[i], null).getPropertyValue("display") == "grid") {
            scArray[i].style.display = "none";
            x = i + 1;
            scArray[x].style.display = "grid";
            break;
        }
    }
}