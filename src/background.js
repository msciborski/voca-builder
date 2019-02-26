import { getUser, addUser } from "./services/userServices";
import { memoServices } from "./services/memoServices";

chrome.contextMenus.removeAll();

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

chrome.contextMenus.create({
  id: 'addToMemo',
  title: 'Add word to memo',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    const { _id } = JSON.parse(localStorage.getItem('user'));
    memoServices.addMemo(_id, info.selectionText).then(translatedMemo => {
    });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});