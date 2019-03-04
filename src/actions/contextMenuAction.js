import { memoServices } from "../services/memoServices";

export function openPopupWithTranslatedWord(userId, info){
  var popup = document.createElement('div');
  popup.id = 'vocabuilder_popup';

  popup.style.position = 'fixed';
  popup.style.background = '#fff';
  popup.style.border = '1px solid #e0e0e0';
  popup.style.right = '20px';
  popup.style.top = '20px';
  popup.style.zIndex = '9999';
  popup.style.fontSize = '16px';
  popup.style.padding = '20px 80px';
  document.body.appendChild(popup);
  
  memoServices.addMemo(userId, info.selectionText).then(response => { 
    var memo = response.data;
    popup.innerHTML = memo.sourceWord + ' => ' + memo.translatedWord;
  });
}


// Listen for messages
chrome.runtime.onMessage.addListener(function (action, sender, sendResponse) {
  if (action.type == 'add_memo') {
    openPopupWithTranslatedWord(action.userId, action.info);
  }
});