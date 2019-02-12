chrome.extension.onMessage.addListener((msg, sender) => {
  if(msg.action == 'contextClicked') {
    console.log(msg.payload);
    // There should be call to the API:
    // API should:
    //    - Recongize language of selected text,
    //    - Try to translate selected text,
    //    - Add selected text and translation to db for particular user,
    //    - Return translation
    //    - When the translation is received, translation will be shown in window under the extension logo
  }
});