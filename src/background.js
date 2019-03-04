import { userService } from "./services/userServices";
import { memoServices } from "./services/memoServices";
import { openPopupWithTranslatedWord } from "./actions/contextMenuAction";

chrome.contextMenus.removeAll();

chrome.windows.onCreated.addListener(() => {
  chrome.identity.getProfileUserInfo((userInfo) => {
    userService.getUser(userInfo.id)
      .then(response => {
        if (response.status == 400) {
          userService.addUser(userInfo);
        }
        localStorage.setItem('user', JSON.stringify(response.data));
      }).catch(err => alert(err));
  });
});

chrome.contextMenus.create({
  id: 'addToMemo',
  title: 'Add word to memo',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const { _id } = JSON.parse(localStorage.getItem('user'));
  chrome.tabs.sendMessage(tab.id, {
    type: 'add_memo',
    userId: _id,
    info: info
  });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});