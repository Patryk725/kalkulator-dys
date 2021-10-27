const toTime=()=>
{
    // Tworzę zmienne na podstawie wartości z divów
    let time = document.getElementById("field1").value;
    let velocity = document.getElementById("field2").value;
    let goal = document.getElementById("field3").value;
    let submit = document.getElementById("wynik");

    let sum;

    // Jeśli wartość ma być pusta 👇
    // alert(velocity==null||velocity=="")

    // Jeśli wartość ma coś mieć wpisane 👇
    // if(time){alert("works")} 

    // Bramki, jeśli dwa inputy są wpisane, a jeden nie
    if(velocity==null||velocity=="" && time && goal)
    {sum=goal/time;sum=sum.toPrecision(1);submit.innerHTML="prędkość: "+sum+" km/h"}

    else if(time==null||time=="" && velocity && goal)
    {sum=goal/velocity;sum=sum.toPrecision(1);submit.innerHTML="do celu za: "+sum+" godzin"}

    else if(goal==null||goal=="" && velocity && time)
    {sum=time*velocity;sum=sum.toPrecision(1);submit.innerHTML="zostało ci: "+sum+" kilometrów"} 

    //Bramka, jeśli żadne pole nie zostało wypełnione
    else if(velocity==null||velocity=="" && time==null||time=="" && goal==null||goal=="")
    {alert("Nie wypełniłeś wszystkich pól")}
    
    // W przeciwnym razie zaznaczono za dużo pól
    else{alert("Za dużo pól, zostaw jedno puste")}

}