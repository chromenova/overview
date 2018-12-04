var modifierKeys = {
    shift: false,
    alt: false,
    control: false
};

$(document).keydown(function (evt) {
    evt.preventDefault();
    console.log("Key " + evt.key + " Down");
    if (modifierKeys[evt.key.toLowerCase()])
        modifierKeys[evt.key.toLowerCase()] = true;
});

$(document).keyup(function (evt) {
    evt.preventDefault();
    console.log("Key " + evt.key + " Down");
    if (modifierKeys[evt.key.toLowerCase()])
        modifierKeys[evt.key.toLowerCase()] = false;
    if (isAlphanumeric(evt.keyCode)) {
        insertChar(evt.key);
    }
});

function insertChar() {

}
