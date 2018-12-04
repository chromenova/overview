var blocksContainer = $("#blocks-container");

function loadBlocks() {
    let blocks = AppData.blocks;
    for (let block of blocks) {
        switch (block.type) {
            case "cursor":
                insertCursor();
                break;
        }
    }
}

function insertCursor() {
    blocksContainer.add("div", {
        class: "cursor",
        id: "cursor"
    });
}

function insertBlock(blockData) {

}
