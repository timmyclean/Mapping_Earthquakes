//

let lights = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});  

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// create a base layer that holds both maps
let baseMaps = {
  Light: lights,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


let torontoData = "https://raw.githubusercontent.com/timmyclean/Mapping_Earthquakes/main/torontoRoutes.json";



















// Add console.log to check to see if our code is working.
console.log("working");
 // We create the tile layer that will be the background of our map.
//let map = L.map('mapid').setView([30, 30], 2);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/timmyclean/Mapping_Earthquakes/main/majorAirports.json"; 

// Add GeoJSON data.
// Grabbing our GeoJSON data.
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


d3.json(torontoData).then(function(data) {
  console.log(data);
  //Creating a GeoJSON layer with retrivedDAta
  L.geoJson(data, {
    style:myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline:" + feature.properties.airline + "</h3><hr><h3> Destination: "+ feature.properties.dst + "</h3>");
    }
  }).addTo(map);


  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data, {
    //onEachFeature:function(feature,layer){
      //console.log(layer);
      //layer.bindPopup("<h3> Airport code:" + feature.properties.faa + "</h3><hr><h3> Airport name: "+ feature.properties.name + "</h3>");

    }
  //}).addTo(map);
);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
  // we turn each feature into a marker on the map.
  //pointToLayer: function(feature, latlng) {
    //console.log(feature);
    //return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.city + ", " + feature.properties.state + "</h2> <hr> <h3>" + feature.properties.name + "</h3>")
  //}

  // Grabbing our GeoJson data usong eachFeature
  //L.geoJson(sanFranAirport, {
    //onEachFeature: function(feature, layer) {
      //console.log(layer)
      //layer.bindPopup('<h1>'+feature.properties.Airport_Code+'</h1>')
    //}
//}).addTo(map);



   
// Then we add our 'graymap' tile layer to the map
     //streets.addTo(map);
  