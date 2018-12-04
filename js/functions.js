function isAlphabetic(keyCode) {
    return (keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123);
}

function isNumeric(keyCode) {
    return keyCode > 47 && keyCode < 58;
}

function isAlphanumeric(keyCode) {
    return isAlphabetic(keyCode) || isNumeric(keyCode);
}
