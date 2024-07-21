function updateTime() {
  let losAngelesElement = document.querySelector("#los-Angles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAnglesTime = moment().tz("America/Los_Angles");

  losAngelesDateElement.innerHTML = losAnglesTime.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAnglesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
