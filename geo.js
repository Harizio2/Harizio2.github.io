var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var t = document.getElementById("test");
  var size = 0.1;
  var px1 = position.coords.latitude-size;
  var px2 = px1+size*2;
  var py1 = position.coords.longitude - size;
  var py2 = py1 + size*2;
  t.setAttribute("src","https://www.openstreetmap.org/export/embed.html?bbox="+py1+"%2C"+px1+"%2C"+py2+"%2C"+px2+"&amp;layer=mapnik");
  //x.innerHTML = "px1 " + px1 + "<br>px2 " + px2 + "<br>py1 " + py1 + "<br>py2 " + py2;
  x.innerHTML = "You are located at latitude " + position.coords.latitude + ", and longitude " + position.coords.longitude;
}