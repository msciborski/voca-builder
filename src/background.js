chrome.windows.onCreated.addListener(() => {
  alert('Extension wita!');
});

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: 'addToMemo',
  title: 'Add word to memo',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info, tab);
  chrome.extension.sendMessage({
    action: 'contextClicked',
    payload: {
      selectedText: info.selectionText
    }
  })
  chrome.tabs.create({ url: "chrome://newtab" });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});