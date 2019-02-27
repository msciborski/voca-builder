export function openPopupWithTranslatedWord(memo){
  var popup = document.createElement('div');
  popup.id = 'vocabuilder_popup';
  popup.innerHTML = memo.sourceWord + ' => ' + memo.translatedWord;

  popup.style.position = 'fixed';
  popup.style.background = '#fff';
  popup.style.border = '1px solid #e0e0e0';
  popup.style.right = '20px';
  popup.style.top = '20px';
  popup.style.zIndex = '9999';
  popup.style.fontSize = '16px';
  popup.style.padding = '20px 80px';
  document.body.appendChild(popup)
}


// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.type == 'memo_added' && msg.memo) {
    openPopupWithTranslatedWord(msg.memo);
  }
});