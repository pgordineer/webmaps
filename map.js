'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoicGdvcmRpbmVlciIsImEiOiJjbGI3ZGQ2em4wYTYzM3VxajQ4N3ZqdHFxIn0.I9piBBRsoGa6BHBel3KVsw'

// style //styles/pgordineer/cl9m4mo03003e15khcpjlarpg
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pgordineer/cl9m4mo03003e15khcpjlarpg',
    center: [-73.93324, 40.80877],
    zoom: 14
});
