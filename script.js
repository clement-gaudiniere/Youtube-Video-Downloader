document.getElementById("getUrl").addEventListener("click", getUrl);


function getUrl() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    document.getElementById("url").innerHTML = tabs[0].url;
  });
}
