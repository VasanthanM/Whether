var request = new XMLHttpRequest
request.open("GET", "https://restcountries.eu/rest/v2/all", true)
request.send()
request.onload = function(){
    var data=JSON.parse(this.response)
    for(i=0; i<250 ; i++){
        var cname = data[i].name
        var lang = data[i].latlang
        //console.log(cname)
        weatherData(cname, ...lang)
    }
}

function weatherData(name,lat,lon){
    var req = new XMLHttpRequest
    var url= 'api.openweathermap.org/data/2.5/weather?lat='+lat+ '&lon='+lon+'&appid=01a5f40beec4682b0ff7c7f5655ba272'
    req.open("GET",url,true)
    req.send()
    req.onload = function(){
        var data = JSON.parse(this.response)
        console.log(`${name} : ${data.main.temp}`)
    }
}
