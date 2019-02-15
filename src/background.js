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
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});