/*Enter a value in meters to know
how much time you did in 25-50-100-200 or any mts
*/
/*
1° We need to store the user input data for the quantity of meters he did and the time in minutes and seconds
2° Create function to convert time to seconds
3° Function to get average
*/

document.getElementById("btn").onclick = function () {
  //Get both values - meters did and meters to know the avg time
  const meters = Number(document.getElementById("meters1-input").value);
  const meters2 = Number(document.getElementById("meters2-input").value);
  //Simple rule of 3
  const mtsTime = (meters2 * getTime()) / meters;
  //Convert to minutes to show total
  let resultTotal = mtsTime / 60;
  resultTotal = resultTotal.toFixed(2);
  //Separate the integer part from the decimal part
  const resultMin = Math.floor(resultTotal);
  let resultSec = (resultTotal % 1) * 60;
  resultSec = resultSec.toFixed(2);
  document.getElementById("result").innerHTML = resultTotal + " Minutes";
  document.getElementById("resultAvg").innerHTML =
    "The average time for " +
    meters2 +
    " Mts is: " +
    resultMin +
    " Mins " +
    resultSec +
    " Secs";
};

// Converts time in minutes to seconds and performs the addition to get the total time
function getTime() {
  const minToSec = document.getElementById("minutes-input").value * 60;
  const secs = Number(document.getElementById("seconds-input").value);
  const totalTime = minToSec + secs;
  return totalTime;
}
