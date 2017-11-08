function loadDoc() {
  var unumber = parseInt($("#serial").val());
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var fer = JSON.parse(this.responseText);
   if (fer.id !== "undefined") {
    document.getElementById("results").innerHTML = "Name: " +fer.name 
   + "<br>Date: " + fer.created 
   + "<br>Found By: " + fer.author_name
   + "<br>Identity Code: " + fer.id
   + "<br>Status: " + fer.state
   + "<br>Other Details: " + fer.details;
    } else {
      document.getElementById("results").innerHTML = "Not found";
    }
  }
  };
  xhttp.open("GET", "https://mauko.co.ke/api/posts/"+unumber, true);
  xhttp.send();
}