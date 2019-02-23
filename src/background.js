import { getUser, addUser } from "./services/userServices";

chrome.windows.onCreated.addListener(() => {
  chrome.identity.getProfileUserInfo((userInfo) => {
    getUser(userInfo.id)
      .then(response => {
        if (response.status == 400) {
          addUser(userInfo);
        }
        localStorage.setItem('user', JSON.stringify(response.data));
      }).catch(err => alert(err));
  });
});

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: 'addToMemo',
  title: 'Add word to memo',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
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