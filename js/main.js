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
console.log(data);

})
// Wenn Daten zurück kommen

// Bei Fehler

}

