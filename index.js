function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = "AM";
  
    // Convert to 12-hour format
    if (hours > 12) {
      hours -= 12;
      meridiem = "PM";
    }
  
    // Add leading zeros to single-digit hours, minutes, and seconds
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  
    // Update clock display
    document.getElementById("clock").innerText = time;
  
    // Update clock every second
    setTimeout(showTime, 1000);
  }
  
  showTime();
  