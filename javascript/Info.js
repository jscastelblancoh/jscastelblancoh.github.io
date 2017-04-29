//i is the index of the data array
//d is the element on the i index of the data array
//function(d, i){}

//Set the data array
var data = [0,0,0,0,0];	
var colors = ["#F2C87E", "#0E8207", "#72B4D4", "#3EB477", "#F97C2A"];
var identifiers = [".progress-bar.policeNum", ".progress-bar.bookNum", ".progress-bar.trafficNum", ".progress-bar.parkNum", ".progress-bar.bikeNum"];
var ancho = $(".progress").width();

function setData(a, b, c, d, e){
	data[0] = a;
	data[1] = b;
	data[2] = c;
	data[3] = d;
	data[4] = e;
}

//Draw bars
var arrayPercent = [];
function reDraw(){
	for(var i = 0; i < data.length; i++){
		if(data[i]>40){
			arrayPercent[i] = ancho;
		}else if(data[i]==1){
			arrayPercent[i] = (data[i]/40)*ancho * 2;
		}else{
			arrayPercent[i] = (data[i]/40)*ancho;
		}
		$(identifiers[i]).text(data[i]);
		$(identifiers[i]).css("width", arrayPercent[i]);
		$(identifiers[i]).css("background", colors[i]);
	}
}


//Information to the bars
var policeCoords = [];
var librariesCoords = [];
var parksCoords = [];
var traficCoords = [];
var cicleCoords = [];

function loadPolice(){
	const deferred = $.Deferred();

	var police = new XMLHttpRequest();
	police.open("GET", "https://data.cityofchicago.org/api/views/z8bn-74gv/rows.json?accessType=DOWNLOAD", true);
	police.send();

	police.onreadystatechange = function(){
		if (police.readyState == 4 && police.status == 200) {
			var text = police.responseText;
			var parsed = JSON.parse(text);

			deferred.resolve(parsed);
		} 
	}

	return deferred.promise();
}

function loadLibraries(){
	const deferred = $.Deferred();

	var libraries = new XMLHttpRequest();
	libraries.open("GET", "https://data.cityofchicago.org/api/views/x8fc-8rcq/rows.json?accessType=DOWNLOAD", true);
	libraries.send();

	libraries.onreadystatechange = function(){
		if (libraries.readyState == 4 && libraries.status == 200) {
			var text = libraries.responseText;
			var parsed = JSON.parse(text);

			deferred.resolve(parsed);
		}
	}

	return deferred.promise();
};

function loadTrafic(){
	const deferred = $.Deferred();

	var trafic = new XMLHttpRequest();
	trafic.open("GET", "https://data.cityofchicago.org/api/views/pf56-35rv/rows.json?accessType=DOWNLOAD", true);
	trafic.send();

	trafic.onreadystatechange = function(){
		if (trafic.readyState == 4 && trafic.status == 200) {
			var text = trafic.responseText;
			var parsed = JSON.parse(text);

			deferred.resolve(parsed);
		}
	}

	return deferred.promise();
};

function loadParks(){
	const deferred = $.Deferred();

	var parks = new XMLHttpRequest();
	parks.open("GET", "https://data.cityofchicago.org/api/views/y7qa-tvqx/rows.json?accessType=DOWNLOAD", true);
	parks.send();

	parks.onreadystatechange = function(){
		if (parks.readyState == 4 && parks.status == 200) {
			var text = parks.responseText;
			var parsed = JSON.parse(text);

			deferred.resolve(parsed);
		}
	}

	return deferred.promise();
};

function loadBikes(){
	const deferred = $.Deferred();

	var bikes = new XMLHttpRequest();
	bikes.open("GET", "https://data.cityofchicago.org/api/views/bbyy-e7gq/rows.json?accessType=DOWNLOAD", true);
	bikes.send();

	bikes.onreadystatechange = function(){
		if (bikes.readyState == 4 && bikes.status == 200) {
			var text = bikes.responseText;
			var parsed = JSON.parse(text);

			deferred.resolve(parsed);
		}
	}

	return deferred.promise();
};

function setInfoView(i){
	$(".panel-body.address").text(information[i][0]);
	$(".panel-body.phone").text(information[i][1]);
	$(".panel-body.type").text(information[i][2]);
	$(".panel-body.area").text(information[i][3]);
};
