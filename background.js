function toggleActive() {
  chrome.storage.local.get(['active'], (active) => {
    chrome.storage.local.set({ active: !active.active });
  });
}

chrome.storage.local.set({ active: false });

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.local.get(['active'], (active) => {
    if (!active.active) {
      chrome.tabs.executeScript(tab.ib, {
        file: 'src/index.js',
      });
    } else {
      chrome.tabs.executeScript(tab.ib, {
        file: 'src/reload.js',
      });
    }
    toggleActive();
  });
});
