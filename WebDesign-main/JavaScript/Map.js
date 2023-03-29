window.addEventListener("load",function(){
    map();
});
window.addEventListener("click",function(){
    addClickEvents();
});
function map(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    
    var img = new Image();
    img.src = "../images/world.svg";
    img.onload = function(){
        context.drawImage(img,0,0,id.width,id.height);
        canada();
        mexique();
        capvert();
        chine();
        chypre();
        guadeloupe();
        indonesie();
        japon();
        madagascar();
        thailande();
        vietnam();
        tunisie();
    }
}
function canada(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(2500,1100,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function capvert(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(4220,2350,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function chine(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7900,1900,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function chypre(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(5750,1780,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function guadeloupe(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(3150,2290,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function indonesie(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7800,3000,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function japon(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(8500,1700,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function madagascar(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(6200,3450,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function mexique(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(2250,2280,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function thailande(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7700,2350,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function tunisie(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(5140,1740,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}
function vietnam(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7900,2450,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
}


function addClickEvents() {
    var countries = document.getElementById('map').childNodes;
    var i;
    for (i=0;i<countries.length;i++){
        countries[i].addEventListener('click', showCountry);
    }
}

function showCountry(e) {
    var node = e.target;
    if (node.id != 'ocean') {
        node = getCorrectNode(node);
    }
    alert(node.id);
}

function getCorrectNode(node) {
    if (node.id.length == 2 || node.id == 'lakes') {
        return node;
    }
    return getCorrectNode(node.parentNode);
}
// FONCTION CLICK
// IF POSITION PAYS = OK
// go rervation.html avec données du pays