

var json;
function reqListener () {
  json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
 	var name = document.createElement("p");
 	var obj = json.result[0];

  document.getElementById("avatar").src =  obj.avatar;
  
  name.innerHTML = " Handle : " + obj.handle;
  profile.appendChild(name);
  if(obj.firstName)
  name.innerHTML = " Name : " + obj.firstName[0].toUpperCase() +obj.firstName.slice(1) + " " ;
	
  if(obj.lastName)
  name.innerHTML += obj.lastName[0].toUpperCase() +obj.lastName.slice(1);
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rating : "  + obj.rating+", Maximum Rating : "+obj.maxRating;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Contribution : "  + obj.contribution;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Friends of Count : "  + obj.friendOfCount;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rank : "  + obj.rank+", Maximum Rank : "+obj.maxRank;
  profile.appendChild(name);  
  }
	
}

function errorRequest(){
	para.style = "font-size:36px;color:red;";
	para.innerHTML = "Error... Status : "+this.status + " Bad Request  ...TRY AGAIN ";

}


function getJSON(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.addEventListener("error", errorRequest);
oReq.open("GET", url);

oReq.send();
}


function sendURL(){
	var inp = document.getElementById("input0");
	var para = document.getElementById("para");
	var handle = document.getElementById("handle");
	handle.innerHTML = "";
	var img = document.createElement("img");
	img.id = "avatar";
	handle.appendChild(img);

	
	
	if(inp){
		if(inp.value==""){
			alert("Kuch USer name toh dalo bhai ");
		}else{
			para.style = "font-size:36px;";

			para.innerHTML = "Loading.....";
			
			var url = "http://codeforces.com/api/user.info?handles=" + inp.value;
			getJSON(url);
		}
	}
}