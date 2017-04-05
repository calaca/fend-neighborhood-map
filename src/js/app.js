// Variables
var map;
var markers   = [];
var locations = mapLocations;
var styles    = mapStyles;

function initMap() {
    // Constructor function that creates a new map with custom styles
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -16.3310711, lng: -48.954776},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    });

    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds          = new google.maps.LatLngBounds();

    // Initializing markers
    for(var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title    = locations[i].title;
        var marker   = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: '../img/map-marker-green.png',
            id: i
        });
        
        // Populates markers array
        markers.push(marker);

        // Opens up an infowindow when a marker is clicked
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
            markerAnimation(this);
        });
        
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

function populateInfoWindow(marker, infoWindow) {
    // Checks if infowindow isn't already open
    if(infoWindow.marker != marker) {
        infoWindow.marker = marker;
        infoWindow.setContent('<div>' + marker.title + '</div>');
        infoWindow.open(map, marker);
        // Clears marker's infowindow when closed and sets marker's icon back to green
        infoWindow.addListener('closeclick', function() {
            infoWindow.setMarker = null;
            marker.setIcon('../img/map-marker-green.png');
        });
    }
}

// Sets marker's icon to blue and makes icon bounce once when clicked
function markerAnimation(marker) {
    marker.setIcon('../img/map-marker-blue.png');
    marker.setAnimation(google.maps.Animation.BOUNCE);
    // Makes the marker bounce only once
    setTimeout(function() {
        marker.setAnimation(null);
    }, 750);
}