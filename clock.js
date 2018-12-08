//updates clock display every 1s
let timeUpdate = setInterval(function(){
  let currentTime = new Date();

  // traslates time to specific degree angle on the clock display
  let secondsAngle = (currentTime.getSeconds() * 6 + 90) % 360;
  let minutesAngle = (currentTime.getMinutes() * 6 + 90) % 360;
  let hoursAngle = (currentTime.getHours() * 30+ 90) % 360;

  // updates each hand with to correct angle position
  document.getElementById("second").style.transform = `rotate(${secondsAngle}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minutesAngle}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hoursAngle}deg)`;

  // For Testing
  // let hours = currentTime.getHours();
  // let minutes= currentTime.getMinutes();
  // let seconds = currentTime.getSeconds();
  // document.getElementById("time").innerHTML = hours+":"+minutes+":"+seconds;

}, 1000);
