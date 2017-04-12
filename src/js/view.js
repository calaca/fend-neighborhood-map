// TODO: OPEN INFOWINDOW AND ANIMATE PIN WHEN LI IS CLICKED
// TODO: INIT WITH LISTED PLACES

var viewModel = {
  places: ko.observableArray([
    {
        title: 'Brasil Park Shopping (Mall)',
        location: {lat: -16.3241054, lng: -48.9512629},
        address: 'Av. Brasil, 505 - Centro, Anápolis - GO, 75113-570'
    },
    {
        title: 'Ipiranga Park',
        location: {lat: -16.3360044, lng: -48.9434534},
        address: 'Av. Professora Zenaide Roriz, s/n - Jundiaí, Anápolis - GO, 75110-580'
    },
    {
        title: 'Joana Dark Pub',
        location: {lat: -16.3327028, lng: -48.9573166},
        address: 'Av. Sen. José Lourenço Dias, 1726 - St. Central, Anápolis - GO, 75023-160'
    },
    {
        title: 'Meiji Restaurant',
        location: {lat: -16.3303684, lng: -48.956882},
        address: 'Av. São Francisco, 740 - Bairro Jundaí, Anápolis - GO, 75110-815'
    },
    {
        title: '767 Pub',
        location: {lat: -16.3314434, lng: -48.959275},
        address: 'Rua Engenheiro Portela, 767 - St. Central, Anápolis - GO, 75023-085'
    }
  ]),
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
        // console.log(viewModel.places);
      }
    }
  }
};

viewModel.query.subscribe(viewModel.search);
ko.applyBindings(viewModel);