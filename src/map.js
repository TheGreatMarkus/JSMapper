let map;
let locations = [];
let markers = [];

function initMap() {
  // Create map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(45.49771787287171, -73.57839930244054),
    mapTypeId: "roadmap",
    draggableCursor: "default",
    disableDoubleClickZoom: true,
    rotateControl: true
  });

  // Create events
  window.onkeypress = ({ key }) => {
    console.log(`Pressed Key = ${key}`);
    if (key === "p") {
      printLocations();
    } else if (key === "c") {
      locations = [];
      while (markers.length > 0) {
        markers.pop().setMap(null);
      }
    } else if (key === "n") {
      console.log(map.getZoom());
      console.log(map.getCenter().toString());
    }
  };

  google.maps.event.addListener(map, "click", ({ latLng }) => {
    console.log(latLng);
    var location = { lat: latLng.lat(), lng: latLng.lng() };
    placeLocation(location);
  });

  google.maps.event.addListener(map, "rightclick", () => {
    removeLocation();
  });
}

function printLocations() {
  let printString = "";
  locations.forEach(location => {
    printString += `{ latitude: ${location.lat}, longitude: ${location.lng} },\n`;
  });
  console.log(printString);
}

function removeLocation() {
  locations.pop();
  markers.pop().setMap(null);
}

function placeLocation(location) {
  let index = locations.length;
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: location.lat + ", " + location.lng,
    label: `${index}`
  });
  locations.push(location);
  markers.push(marker);
}
