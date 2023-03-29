///Code montrant les crénaux horaires
//Parfois le serveur worldtime api refuse de partager les données, message d'erreur : Access to fetch at 'http://worldtimeapi.org/api/timezone/America/Cancun' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.



for (let i = 0; i <= trips.length - 1; i++) {

    window.fetch("http://worldtimeapi.org/api/timezone/" + trips[i].continent + "/" + trips[i].fuseau)

        .then(res => res.json())
        .then(resJson => {
            var element = document.getElementById("zone_heure" + (i + 1))
            output = resJson.datetime
            element.innerHTML = output.slice(11, 16)


        })
}
