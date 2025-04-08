let isEnabled = true;
const processed = new WeakSet(); // Track processed elements

// Initialize toggle state
chrome.storage.local.get(['translatorEnabled'], (res) => {
  isEnabled = res.translatorEnabled ?? true;
});

// Listen for popup toggle
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'TOGGLE_TRANSLATOR') {
    isEnabled = msg.value;
  }
});

function isEnglish(text) {
  const cleaned = text.replace(/https?:\/\/\S+/g, '').replace(/[@#]\w+/g, '').trim();
  const eng = (cleaned.match(/[A-Za-z]/g) || []).length;
  const total = cleaned.replace(/\s/g, '').length;
  return total > 0 && eng / total > 0.5;
}

async function translateEl(el) {
  if (!isEnabled) return;
  if (processed.has(el)) return;
  const txt = el.textContent?.trim();
  if (!txt || !isEnglish(txt)) return;

  processed.add(el);

  const div = document.createElement('div');
  div.className = 'web-translator-translation';
  div.textContent = 'Translating...';

  // Check platform
  const isTwitter = location.hostname.includes('twitter.com') || location.hostname.includes('x.com');
  
  // Platform-specific styling
  if (isTwitter) {
    div.style.cssText = `
      margin-top: 8px;
      padding: 8px 12px;
      color: #000000;
      font-size: 15px;
      line-height: 1.5;
      border-left: 3px solid rgb(29, 155, 240);
      background-color: rgba(128, 128, 128, 0.05);
      border-radius: 4px;
    `;
  } else {
    // Discord styling
    const isReply = el.closest('[class*="repliedMessage"]') !== null;
    div.style.cssText = `
      margin-top: ${isReply ? '2px' : '4px'};
      padding: ${isReply ? '2px 12px' : '8px 12px'};
      color: #dbdee1;
      font-size: ${isReply ? '0.875rem' : '1rem'};
      line-height: 1.375rem;
      border-left: 3px solid #5865f2;
      background-color: rgba(88, 101, 242, 0.1);
      border-radius: 4px;
      margin-left: ${isReply ? '8px' : '0'};
    `;
  }
  el.parentNode.insertBefore(div, el.nextSibling);

  try {
    const res = await fetch('http://localhost:3000/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: txt })
    });
    const { translation } = await res.json();
    div.textContent = translation || 'Translation failed';
  } catch {
    div.textContent = 'Translation failed';
    div.style.borderLeftColor = isTwitter ? '#E0245E' : '#ed4245';
    div.style.backgroundColor = isTwitter ? 'rgba(224, 36, 94, 0.1)' : 'rgba(237, 66, 69, 0.1)';
    div.style.color = isTwitter ? '#E0245E' : '#ed4245';
  }
}

// Scan all target elements
function scanAll() {
  if (!isEnabled) return;
  
  const isTwitter = location.hostname.includes('twitter.com') || location.hostname.includes('x.com');
  
  if (isTwitter) {
    document.querySelectorAll('div[data-testid="tweetText"], [data-text="true"]')
      .forEach(translateEl);
  } else if (location.hostname.includes('discord.com')) {
    document.querySelectorAll('div[id^="message-content-"]')
      .forEach(translateEl);
  }
}

// Observe DOM changes
const observer = new MutationObserver((mutations) => {
  // Scan all elements on each mutation
  scanAll();
});

// Start observer
observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
});

// Initial scan on load
window.addEventListener('load', () => {
  scanAll();
});
