
function time() {
  var d = new Date();
  var day = d.getDay();
  var yr = d.getFullYear();
  var mon = d.getMonth() + 1;
  var list = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("date").innerHTML = ""+list[day] + " " + month[mon] + " " +yr;
}

function HomeFunction() {
  location.replace("file://E:/Website/Latest/News Paper/index.html") //location thik koris
}