document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Display the current day of the week
    document.getElementById("dayOfWeek").textContent = dayOfWeek;

    // Get the current UTC time in milliseconds
    const utcTime = Date.now();

    // Display the current UTC time
    document.getElementById("utcTime").textContent = utcTime;

    
});
