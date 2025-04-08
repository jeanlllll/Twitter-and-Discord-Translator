const toggle = document.getElementById('toggleSwitch');
const statusMessage = document.getElementById('statusMessage');

function updateStatusMessage(enabled) {
  statusMessage.textContent = enabled ? 'Translation is enabled' : 'Translation is disabled';
  statusMessage.classList.remove('enabled', 'disabled');
  statusMessage.classList.add(enabled ? 'enabled' : 'disabled');
}

chrome.storage.local.get(['translatorEnabled'], (result) => {
  const enabled = result.translatorEnabled ?? true;
  toggle.checked = enabled;
  updateStatusMessage(enabled);
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ translatorEnabled: toggle.checked });
  updateStatusMessage(toggle.checked);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'TOGGLE_TRANSLATOR',
      value: toggle.checked
    });
  });
}); 