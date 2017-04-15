/**
* @description View model
*/
var viewModel = {
  places: ko.observableArray([
    {
        title: 'Brasil Park Shopping',
        location: {lat: -16.32445445176676, lng: -48.94870215923184}
    },
    {
        title: 'Parque Ambiental Ipiranga',
        location: {lat: -16.336529779461724, lng: -48.94117706551084}
    },
    {
        title: 'Centro Cultural Joana Dark',
        location: {lat: -16.33279132194316, lng: -48.955110842882675}
    },
    {
        title: 'Meiji Japanese Food',
        location: {lat: -16.33673456616717, lng: -48.944503929335916}
    },
    {
        title: 'Pub 767 - Restaurant Bar',
        location: {lat: -16.33140388840312, lng: -48.9571044752599}
    }
  ]),
  query: ko.observable(''),
  /**
  * @description Live search function
  * @param {String} searchQuery - Term typed by the user to search for
  */
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
  },
  /**
  * @description Opens up an info window and animates the pin when the corresponding list item is clicked
  * @param {object} place - The title of the book
  */
  openInfoWindow: function(place) {
    for (var location in locations) {
      if (markers[location].title === place.title) {
        populateInfoWindow(markers[location], infoWindow);
        markerAnimation(markers[location]);
      }
    }
  }
};

viewModel.query.subscribe(viewModel.search);
ko.applyBindings(viewModel);