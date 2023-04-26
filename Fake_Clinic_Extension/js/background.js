// Load csvUrl when the extension is installed
chrome.runtime.onInstalled.addListener(async () => {
  const csvUrl = "https://raw.githubusercontent.com/SeanDaBlack/ROE-CPC/main/fake-clinic.csv";
  const csvData = await fetch(csvUrl).then(response => response.text());
  chrome.storage.local.set({ csvData });
  console.log("CSV data downloaded and stored")
});

// Check the URL when the web page is loaded
chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.storage.local.get('csvData', (result) => {
    const csvData = result.csvData;
    const url = details.url;
    console.log(url);
    const csvRows = csvData.split(/\r?\n/);
    const urls = csvRows.slice(1).map(row => row.split(",")[6].replace('http', 'https'));
    if (urls.includes(url)) {
      console.log("URL found");
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "showAlert", message: 'WARNING: The website you are currently on has been reported as a "fake clinic", or a Crisis Pregnancy Center.'});
      });
    } else {
      console.log("Can't find URL");
    }
  });
});