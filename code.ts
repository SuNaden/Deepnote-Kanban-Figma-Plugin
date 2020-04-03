figma.showUI(__html__);

figma.ui.resize(280, 245);

// Gets the index of the first page which includes the substring pageName
const getPageIndex = (pageName: string) => {
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
    // Get the index of the the "To Implement" page
    const pageIndex = getPageIndex("--- To Implement");
    // Get the index the of the currently selected page
    const cur = figma.currentPage;
    // move the current page after the one with pageIndex
    figma.root.insertChild(pageIndex + 1, cur);
    return;
  }

  if (msg.type === "move-review") {
    const pageIndex = getPageIndex("--- To Review");
    const cur = figma.currentPage;
    figma.root.insertChild(pageIndex + 1, cur);
    return;
  }

  if (msg.type === "move-playgrounds") {
    const pageIndex = getPageIndex("--- Playgrounds");
    const cur = figma.currentPage;
    figma.root.insertChild(pageIndex + 1, cur);
    return;
  }

  if (msg.type === "add-playgrounds") {
    const pageIndex = getPageIndex("--- Playgrounds");
    var newPage = figma.createPage();
    figma.root.insertChild(pageIndex + 1, newPage);
    return;
  }

  figma.closePlugin();
};
