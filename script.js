document.getElementById("myButton").addEventListener("click", operatingSytem);


function operatingSytem() {
  var OSName="Unknown OS";
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

  // Display the OS name
  document.getElementById("OS").innerHTML = OSName;
}


// Si l'utilisateur active le theme
let checkbox = document.getElementById("active");

checkbox.addEventListener('change', function() {
  if(this.checked) {
    alert('checked');
  } else {
    alert('unchecked');
  }
});
