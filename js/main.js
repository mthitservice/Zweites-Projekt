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
     $("#cmdabsenden").click(function(){
      
        // setTimeout erzeugt verzögerung beim Start
    setTimeout(function(){    
            $("#demo-modal").modal();         
      },500);
        
        
        $(".team").toggle(1000);
           });

}


