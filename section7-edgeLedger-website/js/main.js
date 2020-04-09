function initMap() {
  // The location of loc
  var loc = { lat: 43.209572, lng: -71.537292 };
  // The map, centered at loc
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: loc,
  });
  // The marker, positioned at loc
  var marker = new google.maps.Marker({ position: loc, map: map });
}
