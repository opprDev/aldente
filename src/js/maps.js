window.google = window.google || {};
google.maps = google.maps || {};
(function() {

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }

  function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.7160462, lng: -9.1668034},
      zoom: 18,
      styles: [
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                }
              ]
    });
    var marker = new google.maps.Marker({
      position: {lat: 38.7160462, lng: -9.1668034},
      map: map,
      title: 'Aldente'
    });
  }

  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDtQm8gqvwPcbaxZCMDmbCNOjvuckoJGUs&callback=initMap");
})();
