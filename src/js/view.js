/**
* @description View model
*/
var ViewModel = function() {
    var self    = this;
    this.places = ko.observableArray(initLocations);
    this.query  = ko.observable('');

    /**
    * @description Live search function
    * @param {String} searchQuery - Term typed by the user to search for
    */
    this.search = function(searchQuery) {
        // Removes all locations from view
        self.places.removeAll();
        // Hides all markers
        for (var marker in markers) {
            markers[marker].setVisible(false);
            // Shows all markers if search field is empty
            if (searchQuery === '') markers[marker].setVisible(true);
        }
        // Checks search query and displays matching locations on the view and map
        for (var location in locations) {
            if (locations[location].title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0) {
                self.places.push(locations[location]);
                markers[location].setVisible(true);
            }
        }
    };

    this.query.subscribe(this.search);

    /**
    * @description Opens up an info window and animates the pin when the corresponding list item is clicked
    * @param {object} place - Place data
    */
    this.openInfoWindow = function(place) {
        for (var location in locations) {
            if (markers[location].title === place.title) {
                populateInfoWindow(markers[location], infoWindow);
                markerAnimation(markers[location]);
            }
        }
    };
};

ko.applyBindings(new ViewModel());
