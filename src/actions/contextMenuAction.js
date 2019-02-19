import {memoServices} from '../services/memoServices';

chrome.extension.onMessage.addListener((msg, sender) => {
  if(msg.action == 'contextClicked') {
    let memo = msg.payload.selectedText;

    chrome.identity.getProfileUserInfo((userInfo) => {
      let userId = userInfo.id;
      memoServices.addMemo( userId, memo );
    })


    // There should be call to the API:
    // API should:
    //    - Recongize language of selected text,
    //    - Try to translate selected text,
    //    - Add selected text and translation to db for particular user,
    //    - Return translation
    //    - When the translation is received, translation will be shown in window under the extension logo
  }
});