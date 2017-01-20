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
  var  allCountry=(filtered);
	var newarray=addSum(filtered);
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
 if (json.sugars_100g!="" && json.salt_100g!="" && ((json.countries_en=="Netherlands")||(json.countries_en=="Canada")||(json.countries_en=="UK/USA")||(json.countries_en=="Australia")||(json.countries_en=="France")||(json.countries_en=="Germany")||(json.countries_en=="Spain")||(json.countries_en=="South Africa")));
{
	return true;
}
 }
 //////// function for removing repeted country
 function addSum(filtered) {
var 	myArray=[{ counteries_en:"Netherlands",sugars_100g:0,salt_100g:0}
	,{counteries_en:"Canada",sugars_100g:0,salt_100g:0},
	{counteries_en:"United States",sugars_100g:0,salt_100g:0},
	{counteries_en:"Australia",sugars_100g:0,salt_100g:0},
	{counteries_en:"France",sugars_100g:0,salt_100g:0},
	{counteries_en:"Germany",sugars_100g:0,salt_100g:0},
	{counteries_en:"Spain",sugars_100g:0,salt_100g:0},
	{counteries_en:"South Africa",sugars_100g:0,salt_100g:0}
];
	console.log(myArray.length);
 	for (var i = 0; i < myArray.length; i++) {
 		var addSugar=0;
		var addSalt=0;
 		for (var j = 0; j < filtered.length; j++) {
 			if (myArray[i].counteries_en == filtered[j].countries_en)
			 {
 			 addSugar+= +filtered[j].sugars_100g;
 			 addSalt+= +filtered[j].salt_100g;
 			 }
 		}
		myArray[i]["sugars_100g"]=addSugar;
		myArray[i]["salt_100g"]=addSalt;
 	}
	console.log(myArray);

 }
