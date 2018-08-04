// Add "Scan page" action to extension context menu.

chrome.contextMenus.create({
	"id": "AG_ScanPage",
    title: "Scan Page",
    contexts: ["browser_action"],
    onclick: function() {
    }
});

// When context menu item is selected, send a message to context.js to run an airgap Scan.

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (tab && info.menuItemId=="AG_ScanPage")
    chrome.tabs.sendMessage(tab.id, {args: null }, function(response) {
    });
});