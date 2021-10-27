const toTime=()=>
{
    let time = document.getElementById("field1").value;
    let velocity = document.getElementById("field2").value;
    let goal = document.getElementById("field3").value;

    let submit = document.getElementById("wynik");

    alert(velocity==null||velocity=="") //  Is velocity empty?   If yes then true
    alert(velocity==null||velocity=="") //  Has some number?      If yes then true

    if(velocity=="" || time!=="" && goal!=="")
    {submit.innerHTML="prędkość: "+goal/time+" km/h"}

    else if(time=="" || velocity!=="" && goal!=="")
    {submit.innerHTML="do celu za: "+goal/velocity+" godzin"}

    else if(goal=="" || velocity!=="" && time!=="")
    {submit.innerHTML="zostało ci: "+time*velocity+" kilometrów"} 

    else if(velocity=="" && time=="" && goal==""){alert("Nie wypełniłeś żadnego pola")}
    
    else{alert("Za dużo pól, zostaw jedno puste")}

}