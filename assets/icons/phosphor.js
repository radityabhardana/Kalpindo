// Load Phosphor Icons from local files (no internet required)
var head = document.getElementsByTagName("head")[0];

var weights = ["fill", "bold", "regular"];
var base = document.currentScript
  ? document.currentScript.src.replace(/\/phosphor\.js$/, "")
  : "/assets/icons";

for (var i = 0; i < weights.length; i++) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = base + "/" + weights[i] + "/style.css";
  head.appendChild(link);
}
