var autoSaveInterval = 30;
var AppData = {};
var AppDataTemplate = "{\"blocks\":[{\"type\":\"cursor\"}],\"overrides\":{},\"settings\":{}}";
var Cursor;

$(document).ready(function () {
    AppData = JSON.parse(localStorage.AppData || AppDataTemplate);
    loadBlocks();

    setInterval(autoSave, autoSaveInterval * 1000);
});

function autoSave() {
    localStorage.AppData = JSON.stringify(AppData);
}
