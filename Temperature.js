function convert() {
    // Get the temperature from the input field
    var temperature = parseFloat(document.getElementById("temperatureInput").value);

    // Get the selected scale from the dropdown
    var scale = document.getElementById("scaleSelect").value;

    // Call the convertTemperature function and display the result
    var convertedTemperature = convertTemperature(temperature, scale);
    document.getElementById("result").innerText = "Converted temperature: " + convertedTemperature;
}

// Function to convert temperature between Celsius and Fahrenheit
function convertTemperature(temperature, scale) {
    var convertedTemperature;

    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        return convertedTemperature.toFixed(2) + "°F";
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        return convertedTemperature.toFixed(2) + "°C";
    } else {
        return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}



