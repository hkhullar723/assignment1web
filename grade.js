
document.getElementById("submit").addEventListener("click", function() {
    var inputNumber = parseInt(document.getElementById("input").value);
    
    // Check if the input is a valid number and within range
    if (!isNaN(inputNumber) && inputNumber >= 0 && inputNumber < 101) {
        var grade;
        if (inputNumber >= 90) {
            grade = "A";
        } else if (inputNumber >= 80) {
            grade = "B";
        } else if (inputNumber >= 70) {
            grade = "C";
        } else if (inputNumber >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        
        
        document.getElementById("convert").innerHTML = "Grade: " + grade + "<br><button id='refreshButton'>Back to Converter</button>";
    } else {
       
        document.getElementById("convert").innerHTML = "Please enter a non-negative number less than 101." + "<br><button id='refreshButton'>Back to Converter</button>";
    }

    
    document.getElementById("refreshButton").addEventListener("click", function() {
        
        location.reload();
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

