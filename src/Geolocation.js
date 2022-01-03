function locationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for geolocation.";
        case error.POSITION_UNAVAILABLE:
            return "Location information is currently unavailable.";
        case error.TIMEOUT:
            return "Request for user location timed out.";
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred.";
        default:
            return "An unknown error occurred.";
    }
}

function Geolocation() {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
      }, error => {
          console.log(locationError(error))
      }, {
        maximumAge: 20000,
      })
}

export default Geolocation