const expanderBtn = document.getElementById("expander");

try {
  expanderBtn.addEventListener("click", () => {
    console.log("in popup")
    chrome.runtime.sendMessage({ action: 'injectContentScript' });
  });
} catch (error) {
  console.log(error);
}