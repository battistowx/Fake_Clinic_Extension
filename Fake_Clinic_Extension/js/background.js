// Load csvUrl when the extension is installed
chrome.runtime.onInstalled.addListener(async () => {
  const csv_url = "https://raw.githubusercontent.com/SeanDaBlack/ROE-CPC/main/fake-clinic.csv";
  var csv_data = await fetch(csv_url).then(response => response.text());

  csv_data = csv_data.split(",")

  for (let i = 0; i < csv_data.length; i++) {
    // Replace http with https
    if (!csv_data[i].startsWith("https")) {
      csv_data[i] = csv_data[i].replace("http", "https");
    }
    // Add "www" to each URL
    if (!csv_data[i].includes("www")) {
      csv_data[i] = csv_data[i].replace("https://", "https://www.");
    }
  }

  chrome.storage.local.set({ csv_data });
  console.log("CSV data downloaded and stored");
});

// Check the URL when the web page is loaded
chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.storage.local.get(['csv_data'], (result) => {
    var urls = result.csv_data;
    var url = details.url;

    // Add "www" to each URL detail
    if (!url.includes("www")) {
      url = url.replace("https://", "https://www.");
    }

    // Uncomment for debugging
    // console.log(urls);
    // console.log(url);

    // Check URLs for a match
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
