# Fake Clinic Checker Chrome Extension

This Google Chrome extension is designed to check if the website (including Facebook, Twitter, YouTube, and Pinterest pages) of the current active tab has been listed as a ["fake clinic"](https://www.exposefakeclinics.com/), or a [Crisis Pregnancy Center](https://www.acog.org/advocacy/abortion-is-essential/trending-issues/issue-brief-crisis-pregnancy-centers), on [@SeanDaBlack's ROE_CPC/fake_clinic.csv list](https://github.com/SeanDaBlack/ROE-CPC/blob/main/fake-clinic.csv). If the tab website matches a URL from this list, a simple alert is displayed to the user with a warning.

### Prerequisites
1. In Google Chrome, navigate to chrome://extensions/ and click the button in the top right corner labeled "Developer Mode".

### Installation Guide

1. Click the green <>Code button and select "Download Zip". Extract the repository after it has been downloaded.
2. In Google Chrome, navigate to chrome://extensions/
3. Inside Fake_Clinic_Extension-main, drag the Fake_Clinic_Extension folder into the Extensions menu.
4. You're done! To test, navigate to the following link and verify that an alert message appears: [https://www.acsavalife.com/](https://www.acsavalife.com/)
