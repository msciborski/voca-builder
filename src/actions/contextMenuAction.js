import {memoServices} from '../services/memoServices';

chrome.extension.onMessage.addListener((msg, sender) => {
  if(msg.action == 'contextClicked') {
    alert('Context cliked!');
    let selectedText = msg.payload;
    const { _id } = JSON.parse(localStorage.getItem('user'));
    console.log(_id);
    memoServices.addMemo(_id, selectedText).then(translatedMemo => {
      console.log(translatedMemo);
    });

    // chrome.identity.getProfileUserInfo((userInfo) => {
    //   let userId = userInfo.id;
    //   memoServices.addMemo( userId, memo );
    // })


    // There should be call to the API:
    // API should:
    //    - Recongize language of selected text,
    //    - Try to translate selected text,
    //    - Add selected text and translation to db for particular user,
    //    - Return translation
    //    - When the translation is received, translation will be shown in window under the extension logo
  }
});