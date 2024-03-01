function displayDivAfterTimeout() {
    setTimeout(function() {
        var div = document.getElementById("p0");
        div.style.display = "block"; // Display the hidden div
    }, 10000); // Timeout set to 10 seconds (10000 milliseconds)
}

function updateCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var dateString = year + "-" + month + "-" + day;

    document.getElementById("currentDate").textContent = "Harsh Khullar, Copyright @harsh Date: " + dateString;
}

// Combine both functions into one window.onload event handler
window.onload = function() {
    displayDivAfterTimeout();
    updateCurrentDate();
};
