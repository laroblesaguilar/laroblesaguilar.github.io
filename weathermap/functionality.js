function boxMaker(data, maxday) {
    console.log(data);
    var html = "";
    var img;
    for (var i = 0; i < maxday; i++) {
        for (var j = 0; j < conditions.length; j++) {
            if (data.daily.data[i].icon === conditions[j].condition) {
                img = "<img alt='icon' src=" + conditions[j].icon + "/>"
            }
        }
        html += "<div class='box text-center'>" + "<p><strong>" + new Date(data.daily.data[i].time * 1000) + "</strong></p>" + "<p><strong>" + data.daily.data[i].temperatureHigh + "° " + "/ " + data.daily.data[i].apparentTemperatureLow + "°" + "</strong></p>"
        html += img;
        html += "<p>" + "<strong>Clouds: </strong>" + data.daily.data[i].summary + "</p>"
        html += "<p>" + "<strong>Humidity: </strong>" + data.daily.data[i].humidity + "</p>"
        html += "<p>" + "<strong>Wind: </strong>" + data.daily.data[i].windSpeed + "</p>"
        html += "<p>" + "<strong>Pressure: </strong>" + data.daily.data[i].pressure + "</p></div>"
    }
    $("#test").html(html)
}

var conditions =
    [
        {condition: 'cloudy-day', icon: "climacons-master/SVG/Cloud.svg"},
        {condition: 'clear-night', icon: "climacons-master/SVG/Moon.svg"},
        {condition: 'rain', icon: "climacons-master/SVG/Cloud-Rain.svg"},
        {condition: 'snow', icon: "climacons-master/SVG/Cloud-Snow.svg"},
        {condition: 'sleet', icon: "climacons-master/SVG/Cloud-Snow.svg"},
        {condition: 'wind', icon: "climacons-master/SVG/Cloud-Wind.svg"},
        {condition: 'fog', icon: "climacons-master/SVG/Cloud-Fog.svg"},
        {condition: 'cloudy', icon: "climacons-master/SVG/Cloud.svg"},
        {condition: 'partly-cloudy-day', icon: "climacons-master/SVG/Cloud-Sun.svg"},
        {condition: 'partly-cloudy-night', icon: "climacons-master/SVG/Cloud-Moon.svg"}

    ];

var darkSkyKey = "81ccbe760e20ff959d61216185b52430";
var mapBoxKey = 'pk.eyJ1IjoibGFyb2JsZXNhZ3VpbGFyIiwiYSI6ImNqc2tpZ2NxYzBpMW80M3BpM2h5MjhjMmgifQ.z0JQD5GBmQ2y9YfnZGKOTQ';

$(document).ready(function () {

    // sets Map


    mapboxgl.accessToken = mapBoxKey;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 4,

    });

    //Sets center of map at SA,TX

    geocode("San Antonio, Texas", mapBoxKey).then(function (data) {


        map.setCenter(data);
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(data)
            .addTo(map);

        map.addControl(new MapboxGeocoder({
            accessToken: mapBoxKey

        }));


        //Sets SA,TX as default for darkSky
        var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + "81ccbe760e20ff959d61216185b52430" + "/29.4241,-98.4936"
        $.ajax(darkSkyUrl).done(function (data) {
            reverseGeocode({lng: -98.4936, lat: 29.4241}, mapBoxKey).then(function (results) {
                console.log(results);
                results = results.split(",");
                results = results.slice(0, 2);
                results = results.join(",");
                $("h2").html(results)
            })

            boxMaker(data, 3)

        })

        //Draggable marker function

        function onDragEnd() {

            var lngLat = marker.getLngLat();

            //using marker latitude and longitude to add on to out URL
            var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + "81ccbe760e20ff959d61216185b52430" + "/" + lngLat.lat + "," + lngLat.lng + ""
            $.ajax(darkSkyUrl).done(function (data) {
                // sets h2 with name of Current city
                reverseGeocode({lng: lngLat.lng, lat: lngLat.lat}, mapBoxKey).then(function (results) {
                    console.log(results);
                    results = results.split(",");
                    results = results.slice(0, 2);
                    results = results.join(",")
                    $("h2").html(results)
                })

                //boxes for new information
                boxMaker(data, 3);


            })

        }

        //"event listener" for marker
        marker.on('dragend', onDragEnd);

    })


})