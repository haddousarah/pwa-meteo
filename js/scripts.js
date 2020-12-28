function loadmeteo(ville) {

    var url2 ="https://www.prevision-meteo.ch/services/json/"+ville;

    $.ajax ({

        url: url2, 
        method: "GET",
        dataType: "json",
    
    
        success:function(monObjet2){
    
        var ville = monObjet2;
    
        console.log(monObjet2);
    
    
    $("h1").html(monObjet2.city_info.name+", <br> "+monObjet2.city_info.country);
    $(".daycurrent h2").html(monObjet2.current_condition.condition);
    $(".daycurrent img").attr("src", "images/"+monObjet2.current_condition.condition_key+".png");
    $(".daycurrent .date").html("Aujourd'hui, "+monObjet2.fcst_day_0.day_long+" "+monObjet2.current_condition.date);
    $(".daycurrent .temperaturecurrent").html(monObjet2.current_condition.tmp+"°C");
    $(".daycurrent .maxmin").html(monObjet2.fcst_day_0.tmax+"°C"+" / "+monObjet2.fcst_day_0.tmin+"°C");
    $(".daycurrent .humid").html("Humidité : "+monObjet2.current_condition.humidity+"%");
    
    $(".day1 .date2").html(monObjet2.fcst_day_1.day_long);
    $(".day1 img").attr("src", "images/"+monObjet2.fcst_day_1.condition_key+".png");
    $(".day1 .temperaturemax").html(monObjet2.fcst_day_1.tmax+"°C");
    $(".day1 .temperaturemin").html(monObjet2.fcst_day_1.tmin+"°C");
    
    $(".day2 .date2").html(monObjet2.fcst_day_2.day_long);
    $(".day2 img").attr("src", "images/"+monObjet2.fcst_day_2.condition_key+".png");
    $(".day2 .temperaturemax").html(monObjet2.fcst_day_2.tmax+"°C");
    $(".day2 .temperaturemin").html(monObjet2.fcst_day_2.tmin+"°C");
    
    $(".day3 .date2").html(monObjet2.fcst_day_3.day_long);
    $(".day3 img").attr("src", "images/"+monObjet2.fcst_day_3.condition_key+".png");
    $(".day3 .temperaturemax").html(monObjet2.fcst_day_3.tmax+"°C");
    $(".day3 .temperaturemin").html(monObjet2.fcst_day_3.tmin+"°C");
    
    $(".day4 .date2").html(monObjet2.fcst_day_4.day_long);
    $(".day4 img").attr("src", "images/"+monObjet2.fcst_day_4.condition_key+".png");
    $(".day4 .temperaturemax").html(monObjet2.fcst_day_4.tmax+"°C");
    $(".day4 .temperaturemin").html(monObjet2.fcst_day_4.tmin+"°C");

         
        } //success

    }); //ajax meteo

} //function loadmeteo


navigator.geolocation.getCurrentPosition(function(position) {

    // console.log(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // console.log("lat: "+lat+" lng:"+lng)

    var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.3a7b1b0c92f6508e9b87ac4fb3678cef&format=json&lat="+lat+"&lon="+lng;

    $.ajax ({

    url: url, 
    method: "GET",
    dataType: "json",


        success:function(monObjet){

        var ville = monObjet.address.town;

        console.log(ville);

        loadmeteo(ville);

        $("#refresh").click(function(e){
            e.preventDefault();
            $("input[type=text]").val("");
            
            loadmeteo(ville); 
        });

        } //success


    }); //ajax


}); //geoloc

 document.getElementById('recherche').addEventListener("submit", function(event) {
    event.preventDefault();
});

 $("#go").click(function(){
 var ville = $("#ville").val();
 console.log(ville);

 loadmeteo(ville); 

 });





