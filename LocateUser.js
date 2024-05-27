 // Check if the browser supports the Geolocation API
 if ("geolocation" in navigator) {
    console.log("Geolocation is supported. Attempting to get position...");
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    document.getElementById("status").textContent = "Geolocation is not supported by this browser.";
    console.log("Geolocation is not supported by this browser.");
}

// Success callback function
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("latitude").textContent = "Latitude: " + latitude;
    document.getElementById("longitude").textContent = "Longitude: " + longitude;
    document.getElementById("status").textContent = "Geolocation supportée. Position obtenue.";
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
}

// Error callback function
function errorCallback(error) {
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    document.getElementById("status").textContent = "Erreur de géolocalisation: " + error.message;
}