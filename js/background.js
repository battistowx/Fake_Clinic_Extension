var blockedWebsites = [];

fetch(chrome.runtime.getURL('https://raw.githubusercontent.com/SeanDaBlack/ROE-CPC/main/fake-clinic.csv'))
  .then(response => response.text())
  .then(data => {
    blockedWebsites = data.split('\n');
  });
