// ========== Variables ==========
var map;
var infoWindow;
var markers   = [];
var locations = mapLocations;
var styles    = mapStyles;

// ========== Map ==========
function initMap() {
    // Constructor function that creates a new map with custom styles
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -16.3310711, lng: -48.954776},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    });

    var infoWindow = new google.maps.InfoWindow();
    var bounds     = new google.maps.LatLngBounds();

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
            populateInfoWindow(this, infoWindow);
            markerAnimation(this);
        });
        // Adjusts the map's bounds
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

// ========== View Model ==========
// TODO: OPEN INFOWINDOW AND ANIMATE PIN WHEN LI IS CLICKED
var viewModel = {
  places: ko.observableArray([]),
  query: ko.observable(''),
  // Live search function
  search: function(searchQuery) {
    // Removes all locations from view
    viewModel.places.removeAll();
    // Hides all markers
    for (var marker in markers) {
      markers[marker].setVisible(false);
      // Shows all markers if search field is empty
      if (searchQuery === '') markers[marker].setVisible(true);
    }
    // Checks search query and displays matching locations on the view and map
    for (var location in locations) {
      if (locations[location].title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0) {
        viewModel.places.push(locations[location]);
        markers[location].setVisible(true);
      }
    }
  }
};

viewModel.query.subscribe(viewModel.search);
ko.applyBindings(viewModel);