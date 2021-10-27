const toTime=()=>
{
    let time = document.getElementById("field1").value;
    let velocity = document.getElementById("field2").value;
    let goal = document.getElementById("field3").value;
    let submit = document.getElementById("wynik");

    // Jeśli wartość ma być pusta 👇
    // alert(velocity==null||velocity=="")

    // Jeśli wartość ma coś mieć wpisane
    // if(time){alert("works")} 

    if(velocity==null||velocity=="" && time && goal)
    {submit.innerHTML="prędkość: "+goal/time+" km/h"}

    else if(time==null||time=="" && velocity && goal)
    {submit.innerHTML="do celu za: "+goal/velocity+" godzin"}

    else if(goal==null||goal=="" && velocity && time)
    {submit.innerHTML="zostało ci: "+time*velocity+" kilometrów"} 

    else if(velocity==null||velocity=="" && time==null||time=="" && goal==null||goal=="")
    {alert("Nie wypełniłeś żadnego pola")}
    
    else{alert("Za dużo pól, zostaw jedno puste")}

}