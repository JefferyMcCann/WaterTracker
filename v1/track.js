

function date(){
    
    const minute = 1000 * 60;
    
    const hour = minute * 60;
    
    const day = hour * 24;

    const year = day * 365;  

    const d = new Date();

    let years = Math.round(d.getTime() / year);

    let Day = d.getDate(); // this is all I need for the date 

    return Day; 
}

function DisplayDate(data){

    document.getElementById("display").innerHTML = data; 

}

function DisplayIntake(data){

    document.getElementById("intake").innerHTML = data; 

}


function dayStorage(){
    let day = date(); 

    let Day = 28; 

    if(day < Day){
        // add new structure to json file with date 

        Day = day; 
    }


}

function takeIntake(){

    let addIntake = document.getElementById("Intake").value;

    console.log("this is addIntake ", addIntake); 

    return addIntake; 
}

function dayIntake(){

    let data = takeIntake(); 

    let intake = 0;  

    let Intake =+ (+intake) + (+data); 

    return Intake; 
}



function main(){

    let day = date(); 

    let water = dayIntake(); 

    console.log(day); 

    console.log(water);

    DisplayDate(day);
    
    DisplayIntake(water); 
}
