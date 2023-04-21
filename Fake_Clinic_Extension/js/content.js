chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentUrl = tabs[0].url;
    
    for (var i = 0; i < blockedWebsites.length; i++) {
      if (currentUrl.includes(blockedWebsites[i])) {
        alert('CAUTION: This website has been listed as a "Fake Clinic", or a Crisis Pregnancy Center.');
        break;
      }
    }
  });
  