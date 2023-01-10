//written by Christian Hart for Bethel School of Technology


function Done(){
    lat = document.getElementById("Latitude").value;
    long = document.getElementById("Longitude").value;
    console.log(lat, long);
    let baseURL = "http://api.sunrise-sunset.org/json?";
    let myURL = baseURL + "lat=" + lat + "&lng=" + long + "&date=today";

    $.ajax(myURL,
    {
        success: function (APIResponse) {
            sunrisenode = document.getElementById("Sunrise");
            sunsetnode = document.getElementById("Sunset");
            Sunrise = (APIResponse.results.sunrise);
            Sunset = (APIResponse.results.sunrise);
            rise = document.createElement('p');
            rise.innerHTML="Sunrise: "+ Sunrise;
            set = document.createElement('p');
            set.innerHTML="sunset: "+ Sunset;
            sunrisenode.innerHTML = "";
            sunsetnode.innerHTML="";
            sunrisenode.appendChild(rise);
            sunsetnode.appendChild(set);
        }
    })
}