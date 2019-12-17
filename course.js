//geo

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

function validateSubmit(){
	//validate message
	var msg = document.getElementById("validateMessage").value;
	msg = msg.trim();
	if(msg == ""){
		alert("Must include a message!");
		return false;
	}
	//validate email address
	var email = document.getElementById("validateEmail").value;
	var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
	if(validEmail == false){
		alert("Invalid email adress");
		return false;
	}
	
	//continue and post
	var frm = document.getElementById("validate");
	var urlName = "harrihuhta";//trick bots?
	frm.setAttribute("action","https://formspree.io/" + urlName + "@kamk.fi");//using formspree to send directly, alternative "mailto:FAKEADRRESS@kamk.fi" for app
	frm.submit();
}
function place(e) {
  e.preventDefault();
  var pieceID = e.dataTransfer.getData("pieceID");
  var piece = document.getElementById(pieceID);
  e.target.appendChild(piece);
  e.target.setAttribute("ondrop","");
  e.target.setAttribute("ondragover","");
}
function drag(e) {
  e.dataTransfer.setData("pieceID", e.target.id);
}
function showDroppable(e) {
  e.preventDefault();
}