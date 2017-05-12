/**
* @constructor Creates a new map with custom styles
*/
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -16.3310711, lng: -48.954776},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    });

    infoWindow     = new google.maps.InfoWindow();
    var bounds     = new google.maps.LatLngBounds();

    // Initializing markers
    for(var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title    = locations[i].title;
        var address  = locations[i].address;
        var category = locations[i].cat;
        var marker   = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            address: address,
            cat: category,
            animation: google.maps.Animation.DROP,
            icon: 'https://goo.gl/nZiMiw',
            id: i
        });
        
        // Populates markers array
        markers.push(marker);

        // Opens up an infowindow when a marker is clicked
        marker.addListener('click', function() {
            populateInfoWindow(this, infoWindow);
            markerAnimation(this);
        });
        // Adjusts the map's bounds
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

/**
* @description Populates a new infowindow
* @param {object} marker - Map's marker
* @param {object} infoWindow - Map's infowindow
*/
function populateInfoWindow(marker, infoWindow) {
    // Checks if infowindow isn't already open
    if(infoWindow.marker != marker) {
        infoWindow.marker = marker;
        infoWindow.setContent('<h2>' + marker.title + '</h2><hr><p><strong>Address: </strong>' + marker.address + '</p><hr><p><strong>Category: </strong>' + marker.cat + '</p><hr><p>Information provided by <a href="https://foursquare.com/">Foursquare</a>');
        infoWindow.open(map, marker);
        // Clears marker's infowindow when closed and sets marker's icon back to green
        infoWindow.addListener('closeclick', function() {
            infoWindow.setMarker = null;
            marker.setIcon('https://goo.gl/nZiMiw');
        });
    }
}

/**
* @description Makes the icon bounce only once when clicked
* @param {object} marker - Map's marker
*/
function markerAnimation(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    // Makes the marker bounce only once
    setTimeout(function() {
        marker.setAnimation(null);
    }, 750);
}

/**
* @description Shows an error message if there was an error while loading google maps
*/
function errorHandler() {
    alertify.error('There was an error while loading Google Maps. Please try again later.');
}