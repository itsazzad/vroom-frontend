'use strict';

require('leaflet-control-geocoder');

var defaultGeocoder = L.Control.Geocoder.nominatim();

var control = L.Control.geocoder({
  geocoder: defaultGeocoder,
  collapsed: false,
  position: 'topleft'
});

module.exports = {
  defaultGeocoder: defaultGeocoder,
  control: control
};
