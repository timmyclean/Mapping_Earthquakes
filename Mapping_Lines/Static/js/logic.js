// Add console.log to check to see if our code is working.
console.log("working");
 // We create the tile layer that will be the background of our map.


let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1900, -97.6664],
  [43.694657,-79.630408],
  [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  style: "dash",
  fillOpacity: 0.5,
  weight: 4
}).addTo(map);


    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
    });  
// Then we add our 'graymap' tile layer to the map
     streets.addTo(map);
  
