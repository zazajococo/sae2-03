// Check if the browser supports the Geolocation API
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Success callback function
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
}

// Error callback function
function errorCallback(error) {
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
}
