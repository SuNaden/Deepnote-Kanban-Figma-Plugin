// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(280, 245);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
const getPageIndex = (pageName) => {
    let implementPageIndex = 0;
    for (let i = 0; i < figma.root.children.length; i++) {
        if (figma.root.children[i].name.includes(pageName)) {
            implementPageIndex = i;
            break;
        }
    }
    return implementPageIndex;
};
figma.ui.onmessage = msg => {
    if (msg.type === "move-implement") {
        const pageIndex = getPageIndex("--- To Implement");
        const cur = figma.currentPage;
        figma.root.insertChild(pageIndex + 1, cur);
    }
    if (msg.type === "move-review") {
        const pageIndex = getPageIndex("--- To Review");
        const cur = figma.currentPage;
        figma.root.insertChild(pageIndex + 1, cur);
    }
    if (msg.type === "move-playgrounds") {
        const pageIndex = getPageIndex("--- Playgrounds");
        const cur = figma.currentPage;
        figma.root.insertChild(pageIndex + 1, cur);
    }
    if (msg.type === "add-playgrounds") {
        const pageIndex = getPageIndex("--- Playgrounds");
        var newPage = figma.createPage();
        figma.root.insertChild(pageIndex + 1, newPage);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
