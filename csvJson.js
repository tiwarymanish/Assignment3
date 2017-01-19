var fs = require('fs');
var readableStream = fs.createReadStream('FoodFacts.csv');
var writeStream=fs.createWriteStream("output.json")
var data = '';
var result1;
readableStream.on('data', function(chunk) {
	data+=chunk;
}).on('end', function() {

	//getting the positin of element
var json=csvJSON(data);
 var filtered=json.filter(barChartForcountries);
 var addOfData=addData(filtered);
 console.log(addOfData);
	writeStream.write(JSON.stringify(filtered));
	writeStream.end();
});

///function
function csvJSON(readStream){
	var lines=readStream.toString().split("\n");
	//console.log(lines[0]);
	var result1 = [];

	var headers=lines[0].split(",");

	var	 countryIndex=headers.indexOf("countries_en");
	var sugarIndex=headers.indexOf("sugars_100g");
	var saltIndex=headers.indexOf("salt_100g");

	for(var i=1;i<lines.length;i++){

		var obj = {};
		var currentline=lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
			 obj[headers[countryIndex]]=currentline[countryIndex];
			 obj[headers[sugarIndex]]=currentline[sugarIndex];
			 obj[headers[saltIndex]]=currentline[saltIndex];

		result1.push(obj);
//console.log(result1);
	}
return result1;
}
///filter function
 function barChartForcountries(json){
 if ((json.countries_en=="Netherlands")||(json.countries_en=="Canada")||(json.countries_en=="UK/USA")||(json.countries_en=="Australia")||(json.countries_en=="France")||(json.countries_en=="Germany")||(json.countries_en=="Spain")||(json.countries_en=="South Africa"))
{
	return true;
}
 }
//////Function for adding

function addData(filtered){
	var arrAdd=[];

	for (var i = 1; i < filtered.length; i++) {
	if (filtered.countries_en=="Netherlands") {
		arrAdd[countryIndex]=filtered.countries_en;
	arrAdd[sugars_100g]+=filtered.sugars_100g;
		arrAdd[salt_100g]+=filtered.salt_100g;
	}
	 else if (filtered.countries_en=="Canada") {
		 	arrAdd[countryIndex]=filtered.countries_en;
		 arrAdd_sugar[sugars_100g]+=filtered.sugars_100g;
 		arrAdd_salt[salt_100g]+=filtered.salt_100g;
	}
	else if (filtered.countries_en=="UK/USA") {
			arrAdd[countryIndex]=filtered.countries_en;
	arrAdd_sugar[sugars_100g]+=filtered.sugars_100g;
	arrAdd_salt[salt_100g]+=filtered.salt_100g;
 }
 else if (filtered.countries_en=="Australia") {
	 	arrAdd[countryIndex]=filtered.countries_en;
	arrAdd_sugar[sugars_100g]+=filtered.sugars_100g;
arrAdd_salt[salt_100g]+=filtered.salt_100g;
 }
 else if (filtered.countries_en=="France") {
	 	arrAdd[countryIndex]=filtered.countries_en;
	 arrAdd_sugar[sugars_100g]+=filtered.sugars_100g;
	arrAdd_salt[salt_100g]+=filtered.salt_100g;
 }
 else if (filtered.countries_en=="Germany") {
	 	arrAdd[countryIndex]=filtered.countries_en;
	 arrAdd_sugar[sugars_100g]+=filtered.sugars_100g;
	arrAdd_salt[salt_100g]+=filtered.salt_100g;
 }
 else if (filtered.countries_en=="Spain") {
	 	arrAdd[countryIndex]=filtered.countries_en;
	  arrAdd[sugars_100g]+=filtered.sugars_100g;
    arrAdd[salt_100g]+=filtered.salt_100g;
 }
 else  (filtered.countries_en=="South Africa") {
	 	arrAdd[countryIndex]=filtered.countries_en;
    arrAdd[sugars_100g]+=filtered.sugars_100g;
    arrAdd[salt_100g]+=filtered.salt_100g;
 }

	}
}
