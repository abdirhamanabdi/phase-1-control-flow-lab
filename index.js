// Write your code in this file!
function scuberGreetingForFeet(someDistance) {
//// Write your code here!
    if (someDistance <= 400){
            return "This one is on me!";
    }
    else if (someDistance > 2000 && someDistance < 2500){
        return "I will gladly take your thirty bucks.";
    }
    else if(someDistance > 2500){
        return "No can do.";
    }

}

function ternaryCheckCity(city) {
//// Write your code here!
    if (city === "NYC") {
        return "Ok, sounds good.";
    }
    else{
        return "No go.";
    }
}


function switchOnCharmFromTip(tip) {
//// Write your code here!
    if (tip === "generous") {
        return "Thank you so much.";
    } else if (tip === "not as generous") {
        return "Thank you.";
    } else {
        return "Bye.";
    }




}



