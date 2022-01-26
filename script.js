// Loading
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function(){
    document.getElementById("loader").style="display:none;";
    document.getElementById("content").style="display:block;";
  }, 500);
});


import { saveAs } from 'file-saver';

// Download
document.getElementById("getVideo").addEventListener("click", getVideo);

function getVideo() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    document.getElementById("url").innerHTML = tabs[0].url;

    getTitle = "Title";

    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    let blob = "blob:https://www.youtube.com/05938525-8c1a-4f92-a2e8-b34c5fc631fa";
    FileSaver.saveAs(blob, getTitle);

  });
}
