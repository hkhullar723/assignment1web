document.getElementById("Celsius").addEventListener("click", function(){

    var convertToCelsius = parseInt(document.getElementById("input").value);
    var celsius = (convertToCelsius - 32) * (5/9);
    var kelvin = celsius + 273.15; // Conversion to Kelvin
    document.getElementById("convertedCelsius").innerHTML ="<b>"+ celsius + " degree Celsius</b> <button id='refreshbutton'>Refresh</button> <button id='kelvin'>Convert to Kelvin</button>";

    document.getElementById("refreshbutton").addEventListener("click", function() {        
        location.reload();
    });

    document.getElementById("kelvin").addEventListener("click", function() {
        document.getElementById("convertedCelsius").innerHTML = "<b>"+ kelvin + " Kelvin</b> <button id='refresh'>Refresh</button>";

        document.getElementById("refresh").addEventListener("click", function() {        
            location.reload();
        });
    
    });

});



function updateCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var dateString = year + "-" + month + "-" + day;

    document.getElementById("currentDate").textContent = "Harsh Khullar, Copyright @harsh Date: " + dateString;
}


window.onload = updateCurrentDate();

