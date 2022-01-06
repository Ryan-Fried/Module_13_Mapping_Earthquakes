// Add console.log to check to see if our code is working
console.log('working');
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([33.9416, -118.4085], 5);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

let JFK = [40.6417, -73.7809]
let SFO = [37.6213, -122.3790]
let AUS = [30.1974, -97.6663]
let YYZ = [43.6775, -79.6308]

// Coordinates for each point to be used in the line.
let line = [
    SFO,
    AUS,
    YYZ,
    JFK
  ];

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: 'blue',
    width: 4,
    opacity: .5,
    dashArray: 4
}).addTo(map);