// Unser erster Javascript
/*Mit vielen
    Funktionen */

    // Variablen zum Speichern von Werten
    // Deklarieren einer Variablen
    var x;
    // Initialisieren einer Variable
    x=1;

    // Methoden
     // Bedingungen 
     // Schleifen
     
     // JQuery Metode ready wartet darauf das alle Elemente in die DOM gelanden sind 
$(document).ready(function(){

    init();
    
    

});

function init()
{

showChar();
showChar1();

    $("#Laden").click(function(){

        getData();

    });



     $("#cmdabsenden").click(function(){
      
        // setTimeout erzeugt verzögerung beim Start
    setTimeout(function(){    
                // Zeigen des Modalen Fensters
            $("#demo-modal").modal();         
      },500);
        
        // Sichtbar und UNdichtbar im wechsel (Display:none)
        $(".team").toggle(1000);
           });

}


function getData()
{
//fetch('https://jsonplaceholder.typicode.com/todos/1')
 // .then(response => response.json())
 // .then(json => console.log(json))

 // https://jsonplaceholder.typicode.com/users

// Laden der Daten
$.getJSON('https://jsonplaceholder.typicode.com/users',function(data){
var items=[];
console.log("success");
//console.log(data);
$.each(data,function(i,field){


//$("#temp_mitarbeiter").tmpl(field).appendTo("#Kontakte");

$("#Kontakte").append("<div class='card col-lg-3 col-md-3 col-sm-4 text-center'><img class='card-img-top rounded-circle' src='mensch3.png' alt='Mitarbeiterfoto'/><div class='card-body'><h4 class='card-title'>" + field.name +"</h4><p class='card-text'>Sportler</p></div></div>");

});

/*                <div class="card col-lg-3 col-md-3 col-sm-4 text-center"> 
                    <img class="card-img-top rounded-circle" src="mensch3.png" alt="Mitarbeiterfoto"/>
                    <div class="card-body">
                        <h4 class="card-title">field.name</h4>
                        <p class="card-text">Sportler</p>
                    </div>

                </div>
*/                



// Wenn Daten zurück kommen
}).done(function(){
// Wenn all Daten geladen wurden (zweiter aufruf)

console.log("second success");
}).fail(function(){
// Bei Fehler
console.log("error");

}).always(function(){
console.log("complete");

});


}

function showChar1(){

    $.getJSON('https://mth-it-service.com/data.json',function(cfg){
        
        console.log("success");
        //console.log(data);
        
    var ctx =$("#char1");
    const ch=new Chart(ctx,cfg);});
    
}


function showChar() {

    const cfg={

    type:'doughnut',
    data:{
    labels:[
            'Red',
            'Blue',
            'Yellow'
    ],
    datasets: [{

        label: 'Mein erstes Chart',
        data: [300,50,100],
        backgroundColor:[
            'rgb(255,99,132)',
             'rgb(54,162,235)',
              'rgb(255,205,86)'
        ],
        hoverOffset:4
    }]
}};
var ctx =$("#char");
const ch=new Chart(ctx,cfg);



    }










