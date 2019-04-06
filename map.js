// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: new google.maps.LatLng(45, -73),
        mapTypeId: 'roadmap'
    });

    var data = getData();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var marker = new google.maps.Marker({
            
        });
        
    }
}

function getData(){
    var temp = data.split(/\r?\n/);
    for (var i = 0; i < temp.length; i++) {
        temp[i] = temp[i].split(", ");
    }
    return temp;
}

var data = `45.431529, -73.961743
asdfasdf
asdf`;