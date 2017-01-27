(function() {
    console.log('Start');

    $('#sendAjaxBtn').click(function() {
        console.log('click btn');

        // var url = "http://localhost:3000/places";
        // $.ajax(url).done(ajaxDone).fail(ajaxFailed);   

    });

    $('#meteoBtn').click(function() {
        console.log('click btn');

        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&units=metric&lang=fr&appid=f2280845f042a572e50a80f884e2311a",
            dataType: "json",
            success: meteo,
            error: function() {
                alert("404 Not Found - Oops something went wrong !");
            }
        });
    });

    $('#geolocBtn').click(function() {
        console.log('click btn');

        $.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=Toulouse&lang=fr&key=AIzaSyD7EtFbAhBZWZMCI_9OaOpLNPkjVRcKlGU",
            dataType: "json",
            success: geolocalisation,
            error: function() {
                alert("404 Not Found - Oops something went wrong !");
            }
        });
    });

    $('#itiBtn').click(function() {
        console.log('click btn');

        $.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/directions/json?origin=Toulouse,fr&destination=Saint-Gaudens,fr&lang=fr&key=AIzaSyD7EtFbAhBZWZMCI_9OaOpLNPkjVRcKlGU",
            dataType: "json",
            success: itineraire,
            error: function() {
                alert("404 Not Found - Oops something went wrong !");
            }
        });
    });

    // function ajaxDone(data, status) {
    //     console.log('done', data);
    //     var places = data.places;
    //     console.log(places);

    //     for (var i = 0; i < places.length; i++) {
    //         var place = places[i];
    //         var newElement = "<li>" + place.nom + "</li>";

    //         if (place.nom === "IoT Valley") {
    //             var motDePasse = place.password;
    //             $('body').append('Mot de passe: ' + motDePasse);
    //         }

    //         $('#list').append(places);
    //     }
    // };

    // function ajaxFailed() {
    //     console.log('failed');

    // };

    function meteo(data) {
        var name = data.name;
        var temperature = data.main.temp;
        var temps = data.weather[0].description;

        $("#meteo").append('<div>A ' + name + ' il fait ' + temperature + '°C et un ciel ' + temps + '</div>');
    }

    function geolocalisation(data) {
        var name = data.results[0].address_components[0].long_name;
        var region = data.results[0].address_components[2].long_name;
        var lat = data.results[0].geometry.location.lat;
        var long = data.results[0].geometry.location.lng;

        $("#geoloc").append('<div>A ' + name + ', ' + 'région ' + region + ', nous sommes géolocalisé Latitude: ' + lat + ' Longitude: ' + long + '</div>');
    }

    function itineraire(data) {
        var distance = data.routes[0].legs[0].distance.text;
        var duree = data.routes[0].legs[0].duration.text;
        var start = data.routes[0].legs[0].start_address;
        var end = data.routes[0].legs[0].end_address;

        $("#iti").append('<div>De ' + start + ' à ' + end + ', il y a ' + distance + ' et en voiture il faut ' + duree + '</div>');
    }


})();