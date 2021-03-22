function the_adblocker() {
    const ac_root = document.querySelectorAll('div.fc-ab-root')[0]
    const body = document.querySelectorAll('body')[0]
    ac_root.parentElement.removeChild(ac_root)
    body.style.overflow = 'scroll'
}
  
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: the_adblocker
    });
});